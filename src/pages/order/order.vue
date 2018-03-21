<!--设置页面-->

<template>
	<div class="order">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			我的订单
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div>
				<loading :show="show"></loading>
			</div>
			<div class="container-fluid drag">
				<!--顶部的拖动导航开始-->
				<div id="topNav" class="swiper-container gallery-thumbs">
					<div class="swiper-wrapper swiper-bc">
						<div class="swiper-slide" :class="[{'active':isActive}]" data-index="1">
							<span>全部</span>
						</div>
						<div class="swiper-slide" :class="[{'active':isActive1}]" data-index="2">
							<span>待付款</span>
						</div>
						<div class="swiper-slide" :class="[{'active':isActive2}]" data-index="3">
							<span>代发货</span>
						</div>
						<div class="swiper-slide" :class="[{'active':isActive3}]" data-index="4">
							<span>待收货</span>
						</div>
						<div class="swiper-slide" :class="[{'active':isActive4}]" data-index="5">
							<span>交易成功</span>
						</div>
					</div>
				</div>
				<!--顶部的拖动导航结束-->
				<!--拖动导航对应的下边的内容开始-->
				<div class="swiper-container gallery-top">
					<div class="swiper-wrapper" style="height: 80vh">
						<div class="swiper-slide">
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
						<div class="swiper-slide">
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
						<div class="swiper-slide">
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
						<div class="swiper-slide">
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
						<div class="swiper-slide">
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
				<!--拖动导航对应的下边的内容结束-->
			</div>

		</view-box>
	</div>
</template>
<script>
	import $ from "../../../static/jquery.js";
	import Swiper from "../../../static/swiper.js";
	import { XHeader, ViewBox, Flexbox, FlexboxItem, Loading } from "vux";

	export default {
		name: "app",
		components: {
			XHeader,
			ViewBox,
			Flexbox,
			FlexboxItem,
			Loading
		},
		mounted() {
			if(this.$route.params["order_number"] == "1") {
				//点击待付款进来的
				this.isActive1 = true;
				this.isActive = false;
			};
			if(this.$route.params["order_number"] == "2") {
				//点击待付款进来的
				this.isActive2 = true;
				this.isActive = false;
			};
			if(this.$route.params["order_number"] == "3") {
				//点击待付款进来的
				this.isActive3 = true;
				this.isActive = false;
			};
			if(this.$route.params["order_number"] == "4") {
				//点击待付款进来的
				this.isActive4 = true;
				this.isActive = false;
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

			var galleryTop = new Swiper(".gallery-top", {
				spaceBetween: 10,
				onTransitionStart: function(swiper) {
					var id = swiper.activeIndex;
					console.log(id);
					$("#topNav  .active").removeClass("active");
					$("[data-index='" + (id + 1) + "']").addClass("active");
					mySwiper.slideTo(id - 1, 500);
				}
			});
			var mySwiper = new Swiper("#topNav", {
				freeMode: true,
				freeModeMomentumRatio: 0.5,
				slidesPerView: "auto"
			});
			var swiperWidth = mySwiper.container[0].clientWidth;
			var maxTranslate = mySwiper.maxTranslate();
			var maxWidth = -maxTranslate + swiperWidth / 2;
			$(".swiper-container").on("touchstart", function(e) {
				//				e.preventDefault()
			});
			$("#topNav .swiper-slide").on("click", function(e) {
				//				e.preventDefault();
				var id = $(this).attr("data-index");
				galleryTop.slideTo(id - 1, 0);
			});
			mySwiper.on("tap", function(swiper, e) {
				//				e.preventDefault();
				var slide = swiper.slides[swiper.clickedIndex];
				var slideLeft = slide.offsetLeft;
				var slideWidth = slide.clientWidth;
				var slideCenter = slideLeft + slideWidth / 2;
				// 被点击slide的中心点

				mySwiper.setWrapperTransition(300);

				if(slideCenter < swiperWidth / 2) {
					mySwiper.setWrapperTranslate(0);
				} else if(slideCenter > maxWidth) {
					mySwiper.setWrapperTranslate(maxTranslate);
				} else {
					var nowTlanslate = slideCenter - swiperWidth / 2;

					mySwiper.setWrapperTranslate(-nowTlanslate);
				}

				$("#topNav  .active").removeClass("active");

				$("#topNav .swiper-slide")
					.eq(swiper.clickedIndex)
					.addClass("active");
			});
		},
		methods: {
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
		},
		data() {
			return {
				isActive: true,
				isActive1: false,
				isActive2: false,
				isActive3: false,
				isActive4: false,
				show: false,
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
			};
		}
	};
</script>

<style>
	/*swiper的css*/
	
	@import url("../../assets/swiper.css");
	/*自己的css*/
	
	@import url("order.css");
	@import url("order-swiper.css");
	@import url("../../assets/app.css");
</style>