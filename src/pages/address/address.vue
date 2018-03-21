<template>
	<div class="address">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			收货地址
			<a slot="right" @click="toAddAddress">+</a>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="vux-1px-t">
				<swipeout>
					<swipeout-item class="address-panel" v-for="(item,index) in list" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
						<div slot="right-menu">
							<swipeout-button @click.native="del(item,index,list)" type="warn">{{('删除')}}</swipeout-button>
							<swipeout-button @click.native="edit(item,index,list)" type="primary">{{('编辑')}}</swipeout-button>
							<swipeout-button class="set-default" @click.native="setDefault(item,index,list)" type="success">{{('设为默认')}}</swipeout-button>
						</div>
						<div slot="content" class="demo-content vux-1px-t">
							<flexbox orient="vertical" :gutter="0">
								<flexbox-item>
									<flexbox :gutter="0">
										<flexbox-item :span="6">
											<div class="user-info user-name">{{item.people}}</div>
										</flexbox-item>
										<flexbox-item :span="6">
											<div class="user-info user-phone fr">{{item.phone}}</div>
										</flexbox-item>
									</flexbox>
								</flexbox-item>
								<flexbox-item>
									<flexbox :gutter="0">
										<flexbox-item :span="10">
											<div class="user-info user-address one-line">{{item.info}}</div>
										</flexbox-item>
										<flexbox-item :span="2" v-if="item.is_default==1">
											<div class="default text-center font-14">默认</div>
										</flexbox-item>
									</flexbox>
									<!--<div class="user-info user-address one-line">{{item.info}}</div>-->
								</flexbox-item>
							</flexbox>
						</div>
					</swipeout-item>
				</swipeout>
			</div>

		</view-box>
	</div>
</template>

<script>
	import {
		XHeader,
		ViewBox,
		Swipeout,
		SwipeoutItem,
		SwipeoutButton,
		Flexbox,
		FlexboxItem
	} from "vux";
	export default {
		components: {
			XHeader,
			ViewBox,
			Swipeout,
			SwipeoutItem,
			SwipeoutButton,
			Flexbox,
			FlexboxItem
		},
		mounted() {
			this.update();
		},
		methods: {
			update() {
				//获取收货地址的列表
				this.$post(
					"address/getList", {},
					res => {
						console.log("地址的", res);
						this.list = res.msg;
					}
				);

			},
			//删除地址
			del(item, index, list) {
				this.$post("address/del", {
						address_id: item.address_id
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
			},
			edit(item, index, list) {
				var address_id = item.address_id;
				var name = item.people;
				var phone = item.phone;
				var info = item.info;
				var region = item.region;
				this.$router.push({
					path: "/addAddress/addAddress",
					name: '/addAddress/addAddress',
					params: {
						openEdit: "1",
						address_id: address_id,
						name: name,
						phone: phone,
						info: info,
						region: region
					}
				});
			},
			setDefault(item, index, list) {
				this.$post("address/setDefault", {
						address_id: item.address_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.$vux.toast.show({
								text: "设置成功",
								type: "text",
								position: "middle"
							});
						}
						if(res.res < 1) {
							this.$vux.toast.show({
								text: "设置失败",
								type: "text",
								position: "middle"
							});
						}
					})
			},
			handleEvents(type) {
				console.log("event: ", type);
			},
			toAddAddress() {
				this.$router.push({
					path: "/addAddress/addAddress"
				});
			}
		},
		data() {
			return {
				list: []
			};
		}
	};
</script>

<style>
	@import url("address.css");
	@import url("../../assets/app.css");
</style>