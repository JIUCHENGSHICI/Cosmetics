<template>
	<div class="collect">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			我的收藏
			<a slot="left"></a>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<!--提示开始-->
			<!--<div class="hint font-14 text-center" v-if="messageList=[]">
				您还没有消息!
			</div>-->
			<!--提示结束-->
			<swipeout>
				<swipeout-item v-for="(item,index) in list" transition-mode="follow">
					<div slot="right-menu">
						<swipeout-button type="warn" @click.native="del(item,index,list)">删除</swipeout-button>
					</div>
					<div slot="content">
						<div class="collect-item">
							<flexbox :gutter="0">
								<flexbox-item :span="3">
									<div class="head-img" v-if="item['img_list']">
										<img :src="$getUrl(item.img_list[0].src)">
									</div>
								</flexbox-item>
								<flexbox-item :span="9">
									<div class="goods-title font-12 two-line">
										{{item.goods_title}}
									</div>
									<div class="goods-price font-12" v-if="item['spec']">
										￥{{item.spec.paramList[0].money}}
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
			FlexboxItem
		},
		data() {
			return {
				disabled: false,
				list: [],
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
							this.list = res.msg
						}
						if(res.res > 1) {

						}
					});
			},
			//删除收藏
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
		}
	}
</script>

<style>
	@import url("collect.css");
	@import url("../../assets/app.css");
</style>