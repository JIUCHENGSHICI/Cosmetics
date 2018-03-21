<template>
	<div class="">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			订单详情
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="order-info">
				<div class="font-12 order-hint">
					<i class="fa fa-clock-o"></i> 提交订单后30:00内未付款，订单取消
				</div>
				<!--订单编号,下单时间 开始-->
				<div class="head">
					<div class="font-16 font-white">超时取消</div>
					<div class="font-12 one-line font-white">订单编号： {{order_info.express_number}}
					</div>
					<div class="font-12 one-line font-white">下单时间： {{order_info.add_time}}
					</div>
				</div>
				<!--订单编号,下单时间 开始-->
				<!--收货信息开始-->
				<div class="receipt-title padding-5 font-13">
					<i class="fa fa-map-marker"></i> 收货信息
				</div>
				<div class="receipt-info">
					<flexbox :gutter="0">
						<flexbox-item :span="6">
							<div class="font-13 one-line" v-if="order_info.order_info.address">
								{{order_info.order_info.address.people}}
							</div>
						</flexbox-item>
						<flexbox-item :span="6">
							<div class="font-13 one-line float-right" v-if="order_info.order_info.address">
								{{order_info.order_info.address.phone}}
							</div>
						</flexbox-item>
					</flexbox>
					<flexbox :gutter="0">
						<flexbox-item :span="12">
							<div class="font-13 one-line" v-if="order_info.order_info.address">
								{{order_info.order_info.address.info}}
							</div>
						</flexbox-item>
					</flexbox>
				</div>
				<!--收货信息结束-->
				<!--商品信息开始-->
				<div class="goods-info">
					<!--顶部的商品信息标题开始-->
					<div class="goods-info-title">
						<span class="font-14">商品信息</span>
						<!--<span class="font-12 one-line">品牌商杭州市发货（包邮）</span>-->
						<span class="font-12 one-line">5456465
							<!--{{order_info.edit_time}}-->
						</span>
					</div>
					<!--顶部的商品信息标题结束-->
					<!--商品的详细信息开始-->
					<!--v-for="(item,index) in order_info.order_info.goods"-->
					<div v-if="order_info.order_info.goods" class="order-item padding-2 border-bottom-1" v-for="(item,index) in order_info.order_info.goods">
						<flexbox :gutter="0">
							<flexbox-item :span="2">
								<div class="head-img text-center" v-if="item['img_list']">
									<img :src="$getUrl(item.img_list[0].src)" />
									<!--<img src="../../assets/ImgThree/left.jpg" />-->
								</div>
							</flexbox-item>
							<flexbox-item :span="8">
								<div class="font-12 two-line order-title" v-if="item.goods_title">
									{{item.goods_title}}
								</div>
							</flexbox-item>
							<flexbox-item :span="2">
								<div class="float-right">
									<div class="font-12 text-right">
										￥{{item.spec.paramList[0].money}}
									</div>
									<div class="font-12 text-right">
										×{{order_info.order_info.user_spec[item.goods_id].goods_count}}
									</div>
								</div>
							</flexbox-item>
						</flexbox>
					</div>
					<!--商品的详细信息结束-->
					<!--发货方式开始-->
					<div class="padding-5 font-13 border-bottom-1">
						<span class="">发货方式 </span>
						<span class="float-right">快递：0元
							<span>（包邮）</span>
						</span>
					</div>
					<!--发货方式结束-->
					<!--订单总计开始-->
					<div class="padding-5 font-13 border-bottom-1">
						<span class="">订单总计 </span>
						<span class="float-right">￥ {{order_info.money}}
						</span>
					</div>
					<!--订单总计结束-->
					<!--实付金额开始-->
					<div class="padding-5 font-13 border-bottom-1">
						<span class="">实付金额 </span>
						<span class="float-right">￥ {{order_info.money}}
						</span>
					</div>
					<!--实付金额结束-->
					<!--支付方式开始-->
					<div class="padding-5 font-13 border-bottom-1">
						<span class="">支付方式 </span>
						<span class="float-right">支付宝支付</span>
					</div>
					<!--支付方式结束-->
				</div>
				<!--商品信息结束-->

				<!--联系客服开始-->
				<div class="contact font-14 text-center padding-5">
					联系客服
				</div>
				<!--联系客服结束-->
			</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Flexbox, FlexboxItem, Group, Cell } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Flexbox,
			FlexboxItem,
			Group,
			Cell
		},
		data() {
			return {
				order_info: {
					order_number: 180202289339024,
					order_time: '2018-03-01 17:03',
				},
			}
		},
		mounted() {
			var order_id = this.$route.params.order_id;
			console.log(order_id);
			this.$get(
				"order/get", {
					order_id: order_id
				},
				res => {
					console.log("订单详情", res);
					if(res.res >= 1) {
						this.show = false;
						this.order_info = res.msg;
					}
					if(res.res < 0) {

					}
				}
			);
			//			this.order_info = this.$route.params.order;
			//			console.log(this.order_info);
		}
	}
</script>
<style>
	@import url("orderInfo.css");
	@import url("../../assets/app.css");
</style>