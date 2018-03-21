<template>
	<div class="about">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			我的订单
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="new-order">
				<div class="top">
					<flexbox :gutter="0">
						<flexbox-item :span="2.4">
							<div :class="[{'bload':model==1}]" @click="setModel(1)" class="text-center font-14">全部</div>
						</flexbox-item>
						<flexbox-item :span="2.4">
							<div :class="[{'bload':model==2}]" @click="setModel(2)" class="text-center font-14">待付款</div>
						</flexbox-item>
						<flexbox-item :span="2.4">
							<div :class="[{'bload':model==3}]" @click="setModel(3)" class="text-center font-14">代发货</div>
						</flexbox-item>
						<flexbox-item :span="2.4">
							<div :class="[{'bload':model==4}]" @click="setModel(4)" class="text-center font-14">待收货</div>
						</flexbox-item>
						<flexbox-item :span="2.4">
							<div :class="[{'bload':model==5}]" @click="setModel(5)" class="text-center font-14">交易成功</div>
						</flexbox-item>
					</flexbox>
				</div>
				<div class="bottom">
					<div v-if='model==1' class="one">
						<!--全部-->
						<div class="order-all" v-for="(group,i) in order_list" @click="toOrderInfo(group)">
							<!--订单头部开始-->
							<div class="order-head">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="order-status border-right-1 font-12 text-center">
											{{group.state}}
											<!--{{order_state}}-->
										</div>
									</flexbox-item>
									<flexbox-item :span="10">
										<div class="font-12 one-line order-time">
											{{group.add_time}}
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单头部结束-->
							<!--订单的每一项开始-->
							<div class="order-item" v-for="(item,j) in group.order_info.goods">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="head-img text-center">
											<img :src="$getUrl(item.img_list[0].src)" />
										</div>
									</flexbox-item>
									<flexbox-item :span="8">
										<!--v-if="item['order_info']"-->
										<div class="font-12 two-line order-title">
											{{item.goods_title}}
										</div>
									</flexbox-item>
									<flexbox-item :span="2">
										<div class="float-right">
											<div class="font-12 text-right">
												￥ {{item.spec.paramList[0].money}}
											</div>
											<div class="font-12 text-right">
												×{{group.order_info.user_spec[item.goods_id].goods_count}}
											</div>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单的每一项结束-->
							<div class="text-right font-14 one-line order-all-money padding-2">
								总计：￥{{group.money}}
							</div>
						</div>
						<!--全部-->
					</div>
					<div v-if='model==2' class="two">
						<!--待付款开始-->
						<div class="order-all" v-if="group.state==0" v-for="(group,i) in order_list" @click="toOrderInfo(group)">
							<!--订单头部开始-->
							<div class="order-head">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="order-status border-right-1 font-12 text-center">
											{{group.state}}
											<!--{{order_state}}-->
										</div>
									</flexbox-item>
									<flexbox-item :span="10">
										<div class="font-12 one-line order-time">
											{{group.add_time}}
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单头部结束-->
							<!--订单的每一项开始-->
							<div class="order-item" v-for="(item,j) in group.order_info.goods">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="head-img text-center">
											<img :src="$getUrl(item.img_list[0].src)" />
										</div>
									</flexbox-item>
									<flexbox-item :span="8">
										<!--v-if="item['order_info']"-->
										<div class="font-12 two-line order-title">
											{{item.goods_title}}
										</div>
									</flexbox-item>
									<flexbox-item :span="2">
										<div class="float-right">
											<div class="font-12 text-right">
												￥ {{item.spec.paramList[0].money}}
											</div>
											<div class="font-12 text-right">
												×{{group.order_info.user_spec[item.goods_id].goods_count}}
											</div>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单的每一项结束-->
							<div class="text-right font-14 one-line order-all-money padding-2">
								总计：￥{{group.money}}
							</div>
						</div>
						<!--待付款结束-->
					</div>
					<div v-if='model==3' class="two">
						<!--代发货开始-->
						<div class="order-all" v-if="group.state==1" v-for="(group,i) in order_list" @click="toOrderInfo(group)">
							<!--订单头部开始-->
							<div class="order-head">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="order-status border-right-1 font-12 text-center">
											{{group.state}}
											<!--{{order_state}}-->
										</div>
									</flexbox-item>
									<flexbox-item :span="10">
										<div class="font-12 one-line order-time">
											{{group.add_time}}
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单头部结束-->
							<!--订单的每一项开始-->
							<div class="order-item" v-for="(item,j) in group.order_info.goods">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="head-img text-center">
											<img :src="$getUrl(item.img_list[0].src)" />
										</div>
									</flexbox-item>
									<flexbox-item :span="8">
										<!--v-if="item['order_info']"-->
										<div class="font-12 two-line order-title">
											{{item.goods_title}}
										</div>
									</flexbox-item>
									<flexbox-item :span="2">
										<div class="float-right">
											<div class="font-12 text-right">
												￥ {{item.spec.paramList[0].money}}
											</div>
											<div class="font-12 text-right">
												×{{group.order_info.user_spec[item.goods_id].goods_count}}
											</div>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单的每一项结束-->
							<div class="text-right font-14 one-line order-all-money padding-2">
								总计：￥{{group.money}}
							</div>
						</div>
						<!--代发货结束-->
					</div>
					<div v-if='model==4' class="two">
						<!--待收货开始-->
						<div class="order-all" v-if="group.state==2" v-for="(group,i) in order_list" @click="toOrderInfo(group)">
							<!--订单头部开始-->
							<div class="order-head">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="order-status border-right-1 font-12 text-center">
											{{group.state}}
											<!--{{order_state}}-->
										</div>
									</flexbox-item>
									<flexbox-item :span="10">
										<div class="font-12 one-line order-time">
											{{group.add_time}}
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单头部结束-->
							<!--订单的每一项开始-->
							<div class="order-item" v-for="(item,j) in group.order_info.goods">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="head-img text-center">
											<img :src="$getUrl(item.img_list[0].src)" />
										</div>
									</flexbox-item>
									<flexbox-item :span="8">
										<!--v-if="item['order_info']"-->
										<div class="font-12 two-line order-title">
											{{item.goods_title}}
										</div>
									</flexbox-item>
									<flexbox-item :span="2">
										<div class="float-right">
											<div class="font-12 text-right">
												￥ {{item.spec.paramList[0].money}}
											</div>
											<div class="font-12 text-right">
												×{{group.order_info.user_spec[item.goods_id].goods_count}}
											</div>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单的每一项结束-->
							<div class="text-right font-14 one-line order-all-money padding-2">
								总计：￥{{group.money}}
							</div>
						</div>
						<!--待收货结束-->
					</div>
					<div v-if='model==5' class="two">
						<!--交易成功开始-->
						<div class="order-all" v-if="group.state==3" v-for="(group,i) in order_list" @click="toOrderInfo(group)">
							<!--订单头部开始-->
							<div class="order-head">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="order-status border-right-1 font-12 text-center">
											{{group.state}}
											<!--{{order_state}}-->
										</div>
									</flexbox-item>
									<flexbox-item :span="10">
										<div class="font-12 one-line order-time">
											{{group.add_time}}
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单头部结束-->
							<!--订单的每一项开始-->
							<div class="order-item" v-for="(item,j) in group.order_info.goods">
								<flexbox :gutter="0">
									<flexbox-item :span="2">
										<div class="head-img text-center">
											<img :src="$getUrl(item.img_list[0].src)" />
										</div>
									</flexbox-item>
									<flexbox-item :span="8">
										<!--v-if="item['order_info']"-->
										<div class="font-12 two-line order-title">
											{{item.goods_title}}
										</div>
									</flexbox-item>
									<flexbox-item :span="2">
										<div class="float-right">
											<div class="font-12 text-right">
												￥ {{item.spec.paramList[0].money}}
											</div>
											<div class="font-12 text-right">
												×{{group.order_info.user_spec[item.goods_id].goods_count}}
											</div>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--订单的每一项结束-->
							<div class="text-right font-14 one-line order-all-money padding-2">
								总计：￥{{group.money}}
							</div>
						</div>
						<!--交易成功结束-->
					</div>
				</div>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Flexbox, FlexboxItem } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Flexbox,
			FlexboxItem
		},
		data() {
			return {
				model: 1,
				order_list: [],
				two: [],
				order_state: '',
				state: [{
						state: '0',
						title: "未支付",
						type: "info"
					},
					{
						state: '1',
						title: "未发货",
						type: "warning"
					},
					{
						state: '2',
						title: "已发货",
						type: ""
					},
					{
						state: '3',
						title: "已签收",
						type: "success"
					},
					{
						state: '4',
						title: "退款/售后",
						type: "danger"
					}
				]
			}
		},
		mounted() {
			if(this.$route.params["order_number"] == "1") {
				//点击待付款进来的
				this.model = 2;
			};
			if(this.$route.params["order_number"] == "2") {
				//点击待付款进来的
				this.model = 3;
			};
			if(this.$route.params["order_number"] == "3") {
				//点击待付款进来的
				this.model = 4;
			};
			if(this.$route.params["order_number"] == "4") {
				//点击待付款进来的
				this.model = 5;
			};
			//‘获取订单’ ajax请求开始
			this.$get(
				"order/getList", {},
				res => {
					this.order_list = res.msg;
					console.log(this.order_list);
				}
			);
			//‘获取订单’ ajax请求结束
		},
		methods: {
			setModel: function(type) {
				this.model = type;
			},
			//去订单详情页面
			toOrderInfo(group) {
				var order_id = group.order_id
				console.log("uuu", group)
				this.$router.push({
					path: "/orderInfo/orderInfo",
					name: "/orderInfo/orderInfo",
					params: {
						order_id: order_id
					}
				});
			},
		}
	}
</script>
<style>
	@import url("newOrder.css");
	@import url("../../assets/app.css");
</style>