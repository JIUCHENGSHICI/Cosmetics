<!--个人中心页面-->
<template>
	<div class="user">
		<x-header class="set-header" :left-options="{showBack: false}">
			<a slot="left" @click="toMessage">
				<i class="fa fa-envelope-o"></i>
			</a>
			<a slot="right" @click="toSet">
				<i class="fa fa-cog"></i>
			</a>
		</x-header>
		<!--1.顶部的用户的头像+名字-->
		<view-box>
			<div class="user-head" @click="toUserSet">
				<flexbox :gutter="0">
					<flexbox-item :span="2.5">
						<div class="user-head-img text-center">
							<!--<img src="../../assets/ImgThree/right-top.jpg" />-->
							<img :src="user_head" />
						</div>
					</flexbox-item>
					<flexbox-item :span="9.5">
						<div class="user-name two-line font-white">
							{{name}}
						</div>
					</flexbox-item>
				</flexbox>
			</div>
			<!--2.我的订单那一行-->
			<group>
				<cell :title="('我的订单')" :value="('所有订单')" @click.native="toOrder" is-link></cell>
			</group>
			<!--3.下边的五宫格-->
			<grid>
				<grid-item @click.native.stop="toOne">
					<img slot="icon" src="../../assets/user/one.png">
					<span class="grid-center">代付款</span>
				</grid-item>
				<grid-item @click.native.stop="toTwo">
					<img slot="icon" src="../../assets/user/two.png">
					<span class="grid-center">代发货</span>
				</grid-item>
				<grid-item @click.native.stop="toThree">
					<img slot="icon" src="../../assets/user/three.png">
					<span class="grid-center">待收货</span>
				</grid-item>
				<grid-item @click.native.stop="toFour">
					<img slot="icon" src="../../assets/user/four.png">
					<span class="grid-center">交易成功</span>
				</grid-item>
				<grid-item @click.native.stop="toFive">
					<img slot="icon" src="../../assets/user/five.png">
					<span class="grid-center">退款/退货</span>
				</grid-item>
			</grid>
			<!--4.列表项-->
			<group class="margin-top-half">
				<cell :border-intent="false" :title="('我的收藏')" :value="('')" @click.native="toCollection" is-link></cell>
				<cell :border-intent="false" :title="('意见与反馈')" :value="('')" @click.native="toFeedback" is-link></cell>
			</group>
			<!--5.列表项-->
			<group class="margin-top-half">
				<cell :border-intent="false" :title="('帮助与客服')" :value="('')" @click.native="toTel" is-link></cell>
				<cell :border-intent="false" :title="('给我评分')" :value="('')" @click.native="toNewOrder" is-link></cell>
			</group>
		</view-box>

	</div>
</template>
<script>
	import {
		Cell,
		CellBox,
		CellFormPreview,
		Group,
		Badge,
		Grid,
		GridItem,
		Panel,
		XHeader,
		ViewBox,
		Flexbox,
		FlexboxItem
	} from "vux";
	export default {
		components: {
			Group,
			Cell,
			CellFormPreview,
			CellBox,
			Badge,
			Grid,
			GridItem,
			Panel,
			XHeader,
			ViewBox,
			Flexbox,
			FlexboxItem
		},
		data() {
			return {
				name: '',
				user_head: ''
			};
		},
		mounted() {
			//			if(!localStorage.user_info) {
			//				this.name = "未设置"
			//			} else {
			//				var user_name = JSON.parse(localStorage.user_info).user_name;
			//				this.name = user_name;
			//			}
			//			console.log("转换之后", JSON.parse(localStorage.user_info))
			//			var user_info = JSON.parse(localStorage.user_info);
			//			var user_head = user_info.user_head;

			this.$get("user/getUserInfo", {
					field: ["user_name", "user_head", "user_type", "user_info"]
				},
				res => {
					console.log("------------", res);
					if(res.res >= 1) {
						localStorage.user_info = JSON.stringify(res.msg);
						this.name = res.msg.user_name;
						this.user_head = this.$getUrl(res.msg.user_head);
						return;
					}
					this.$vux.toast.show({
						text: "用户信息获取失败，请重新登录",
						type: "text",
						position: "middle"
					});
				}
			);
		},
		methods: {
			//点击去订单页面
			toOrder() {
				console.log("去我的订单页面");
				this.$router.push({
					path: "/newOrder/newOrder"
				});
			},
			//去待付款页面
			toOne() {
				this.$router.push({
					path: "/newOrder/newOrder",
					name: "/newOrder/newOrder",
					params: {
						order_number: '1'
					}
				});
			},
			//去代发货页面
			toTwo() {
				this.$router.push({
					path: "/newOrder/newOrder",
					name: "/newOrder/newOrder",
					params: {
						order_number: '2'
					}
				});
			},
			//去待收货页面
			toThree() {
				this.$router.push({
					path: "/newOrder/newOrder",
					name: "/newOrder/newOrder",
					params: {
						order_number: '3'
					}
				});
			},
			//去交易成功
			toFour() {
				this.$router.push({
					path: "/newOrder/newOrder",
					name: "/newOrder/newOrder",
					params: {
						order_number: '4'
					}
				});
			},
			//			点击去优惠页面
			toDiscount() {
				console.log("去优惠页面");
			},
			//			点击去用户页面
			toUserSet() {
				console.log("去user页面");
				this.$router.push({
					path: "/userSet/userSet",
					//					params: {
					//						user_name: '1'
					//					}
				});
			},
			//			点击去设置页面
			toSet() {
				this.$router.push({
					path: "/set/set"
				});
			},
			//			点击去收藏页面
			toCollection() {
				console.log("去收藏页面");
				this.$router.push({
					path: "/collect/collect"
				});
			},
			//			点击去反馈页面
			toFeedback() {
				console.log("去反馈页面");
				this.$router.push({
					path: "/feedback/feedback"
				});
			},
			//			点击去帮助与客服页面
			toTel() {
				this.$router.push({
					path: "/tel/tel"
				});
			},
			//			点击去评分页面
			toScore() {
				console.log("去评分页面");
			},
			//			去我的消息页面
			toMessage() {
				this.$router.push({
					path: "/message/message"
				});
			},
			//去新订单页面
			toNewOrder() {
				this.$router.push({
					path: "/newOrder/newOrder"
				});
			}
		},
	};
</script>

<style>
	@import url("user.css");
	@import url("../../assets/app.css");
</style>