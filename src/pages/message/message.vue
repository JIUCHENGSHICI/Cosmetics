<template>
	<div class="message">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			{{title}}
			<a slot="left"></a>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<!--提示-->
			<!--<div class="hint font-14 text-center" v-if="messageList=[]">
				您还没有消息!
			</div>-->
			<!--提示-->
			<swipeout>
				<swipeout-item v-for="(item,index) in messageList" transition-mode="follow">
					<div slot="right-menu">
						<swipeout-button type="warn" @click.native="del(item,index,messageList)">删除</swipeout-button>
					</div>
					<div slot="content">
						<div class="message-item">
							<flexbox :gutter="0">
								<flexbox-item :span="3">
									<div class="head-img" v-if="item['img_list']">
										<img :src="$getUrl(item.img_list[0].src)">
									</div>
								</flexbox-item>
								<flexbox-item :span="9">
									<div class="message-title font-14 two-line">
										{{item.goods_title}}
									</div>
								</flexbox-item>
							</flexbox>
						</div>
					</div>
				</swipeout-item>
			</swipeout>
		</view-box>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem, XHeader, ViewBox, GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton, Panel } from 'vux'
	export default {
		components: {
			ViewBox,
			GroupTitle,
			Swipeout,
			SwipeoutItem,
			SwipeoutButton,
			XButton,
			Panel,
			XHeader,
			Flexbox,
			FlexboxItem,
		},
		data() {
			return {
				disabled: false,
				messageList: [],
				title: '我的消息'
			}
		},
		methods: {
			onButtonClick(type) {
				alert('on button click ' + type)
			},
			handleEvents(type) {
				console.log('event: ', type)
			},
			update() {
				this.$get("collection/getList", {},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.messageList = res.msg;
						}
						if(res.res > 1) {

						}
					});
			},
			//删除
			del(item, index, list) {
				this.$post("collection/change", {
						goods_id: item.goods_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							list.splice(index, 1);
							this.$vux.toast.show({
								text: "删除成功",
								type: "text",
								position: "middle"
							});
						}
						if(res.res < 1) {
							this.$vux.toast.show({
								text: "删除失败",
								type: "text",
								position: "middle"
							});
						}

					})
			}
		},
		mounted() {
			this.update();
			if(this.$route.params["title"] != '' || this.$route.params["title"] != null) {
				this.title = this.$route.params["title"];
			}
			if(this.$route.params["title"] == '' || this.$route.params["title"] == null) {

			}
		}
	}
</script>

<style>
	@import url("message.css");
	@import url("../../assets/app.css");
</style>