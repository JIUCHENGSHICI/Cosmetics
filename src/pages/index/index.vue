<template>
	<div id="app" class="index">
		<!--顶部导航栏开始-->
		<x-header class="index-header" :left-options="{showBack: false}">
			<!--邮件-->
			<a v-show="is_message" slot="left" @click="toMessage">
				<i class="fa fa-envelope-o"></i>
			</a>
			<!--小人-->
			<a v-show="is_personal" slot="left" @click="toOffline">
				<i class="fa fa-user-o"></i>
			</a>
			<router-link to="/search/search">
				<!-- @click.native="toSearch" -->
				<search></search>
			</router-link>
			<a slot="right" @click="toAddressSwitch" class="one-line">{{address}}</a>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<!--<scroller ref="scrollerEvent" lock-x height="2000px" @on-scroll="onScroll">
			</scroller>-->
			<div class="container-fluid drag a-k">
				<div v-show="is_go_top" class="fk" @click="goTop">
					<i class="fa fa-chevron-up"></i>
				</div>
				<!--顶部的拖动导航开始-->
				<div id="topNav" class="swiper-container gallery-thumbs">
					<div class="swiper-wrapper swiper-bc">
						<!--:data-index="item.dataIndex"-->
						<!--:class="item.active"-->
						<!--:class="[{'font-white':group.isOpen}]"-->
						<div class="swiper-slide" :class="[{'active':group.isOpen}]" :data-index="group.dataIndex" @click="openNav(group,i,navList)" v-for="(group,i) in navList">
							<span>{{group.class_title}}</span>
						</div>
					</div>
				</div>
				<!--顶部的拖动导航结束-->
				<!--拖动导航对应的下边的内容开始-->
				<div class="swiper-container gallery-top">
					<div class="swiper-wrapper bottom-height">
						<div class="bottom" v-for="(group,i) in navList">
							<div class="swiper-slide" v-for="(item,j) in group.node" v-if="group.isOpen">
								<mt-loadmore :top-method="loadTop" :max-distance="150" ref="loadmore" @top-status-change="handleTopChange">
									<!--下拉刷新内容开始-->
									<!--提示文字  开始-->
									<div v-if="group.hide==false" class="point">
										<span>{{item.class_title}}</span>
									</div>
									<!--提示文字  结束-->
									<div v-if="group.show==true">
										<!--轮播图组件-->
										<swiper></swiper>
										<!--通知组件 往上边滚动-->
										<notice @click.native="toFind"></notice>
										<!--通知组件的下边的 五个分类-->
										<cate></cate>
										<!--时间轴开始-->
										<!--<axis></axis>-->
										<!--<timeline></timeline>-->
										<!--时间轴结束-->
										<!--左右切换的选项卡两个卡片-->
										<!--<div class="two-switch">
											<flexbox :gutter="0" wrap="wrap">
												<flexbox-item :span="1/2">
													<div class="switch" @click="setModel(1)">
														<span :class="[{'border-bottom':model==1}]" class="switch-text">限时抢购</span>
													</div>
												</flexbox-item>
												<div class="cube"></div>
												<flexbox-item :span="1/2">
													<div class="switch" @click="setModel(2)">
														<span :class="[{'border-bottom':model==2}]" class="switch-text">下期预购</span>
													</div>
												</flexbox-item>
											</flexbox>
										</div>-->
										<!--可以左右拖动的组件，商品card三个-->
										<scroller class="scroller top-scroller"></scroller>
										<!--<scroller v-if='model==2' class="scroller top-scroller"></scroller>-->
										<!--<cate v-if='model==2'></cate>-->
										<img-three class="img-three" v-for="(item,index) in goodsList" :goods="item"></img-three>
										<!--提示文字  开始-->
										<div class="point">
											<span>超值热卖</span>
										</div>
										<!--提示文字  结束-->
										<!--页面上的长图   开始-->
										<div class="img-box" v-if="item['img_list']" v-for="(item,index) in goodsList">
											<img :src="$getUrl(item.img_list[0].src)" @click="toGoodsInfo(item)" />
										</div>
										<!--页面上的长图   结束-->
										<!--提示文字  开始-->
										<div class="point">
											<span>猜你喜欢</span>
										</div>
										<!--提示文字  结束-->
									</div>
									<!--左右两个的商品列表开始-->
									<flexbox wrap="wrap" :gutter="0" class="groom-list">
										<flexbox-item :span="6" v-for="(item,index) in goodsList">
											<goods-card class="groom-card" :goods="item"></goods-card>
										</flexbox-item>
									</flexbox>
									<!--左右两个的商品列表结束-->
									<!--下拉刷新内容结束-->
									<div slot="top" class="mint-loadmore-top">
										<!--v-show="topStatus !== 'loading'"-->
										<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
											<div class="is-hint">
												<flexbox :gutter="1">
													<flexbox-item :span="6">
														<div class="text-right">
															<span class="font-12">正品保证</span>
														</div>
													</flexbox-item>
													<flexbox-item :span="6">
														<div class="">
															<i class="fa fa-podcast"></i>
														</div>
													</flexbox-item>
												</flexbox>
												<flexbox :gutter="1">
													<flexbox-item :span="6.5">
														<div class="text-right">
															<i class="fa fa-podcast"></i>
														</div>
													</flexbox-item>
													<flexbox-item :span="5.5">
														<div class="">
															<span class="font-12">七天放心退</span>
														</div>
													</flexbox-item>
												</flexbox>
												<flexbox :gutter="1">
													<flexbox-item :span="6">
														<div class="text-right">
															<span class="font-12">全球精选</span>
														</div>
													</flexbox-item>
													<flexbox-item :span="6">
														<div class="">
															<i class="fa fa-podcast"></i>
														</div>
													</flexbox-item>
												</flexbox>
											</div>
											<span>↓</span>
										</span>
										<span v-show="topStatus === 'loading'">Loading...</span>
										<!--<span v-show="topStatus === 'drop'">释放更新</span>-->
									</div>
								</mt-loadmore>
							</div>
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
	import loadmore from "../../../static/loadmore.js";

	import Vue from 'vue';
	import { Loadmore } from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);
	//	1.顶部导航栏2.下边的内容的容器 34.栅格
	//	import MintUI from 'mint-ui'
	//	Vue.use(MintUI)
	import {
		XHeader,
		ViewBox,
		Flexbox,
		FlexboxItem,
		Scroller,
		Tab,
		TabItem,
		Search,
		Icon,
	} from "vux";
	//	轮播图组件
	import swiper from "../../components/swiper/swiper.vue";
	//	通知组件  往上滚动
	import notice from "../../components/notice/notice.vue";
	//	通知组件的下边的 五个分类
	import cate from "../../components/cate/cate.vue";
	//	时间轴
	//	import timeline from "../../components/timeLine/timeLine.vue";
	import axis from "../../components/axis/axis.vue";
	//	商品card
	import goodsCard from "../../components/goodsCard/goodsCard.vue";
	//	三张图片
	import imgThree from "../../components/imgThree/imgThree.vue";
	//	搜索组件
	import search from "../../components/search/search.vue";
	//		左右可以拖动的组件
	//	import scroller from "../../components/scroller/scroller.vue";
	import scroller from '../../components/scroller/scroller.vue'

	export default {
		name: "app",
		components: {
			XHeader,
			ViewBox,
			swiper,
			notice,
			cate,
			//timeline,
			axis,
			Flexbox,
			FlexboxItem,
			goodsCard,
			Scroller,
			imgThree,
			Tab,
			TabItem,
			search,
			Icon,
			scroller
		},
		mounted() {
			//			var gotop = $(".swiper-wrapper");
			//			for(var i = 0; i < gotop.length; i++) {
			//				console.log("lai", gotop[i].scrollTop);
			//				if(gotop[i].scrollTop > 10) {
			//					this.is_go_top = true;
			//				}
			//			}
			//			if($(".swiper-wrapper") = 0) {
			//				this.is_go_top = false;
			//			}
			var user_info = JSON.parse(localStorage.user_info)
			if(user_info.user_type == 0) {
				this.is_message = true;
				this.is_personal = false;
			}
			if(user_info.user_type != 0) {
				this.is_message = false;
				this.is_personal = true;
			}
			this.update();
			this.nav();
			//‘猜你喜欢’ ajax请求开始
			this.$get(
				this.$serverHome + "goods/getList", {
					page: this.currentPage,
					limit: this.pageSize
				},
				res => {
					this.goodsList = res.msg;
				}
			);
			//‘猜你喜欢’ ajax请求结束
			//‘导航栏’ ajax请求开始
			/*
			this.$get(
				"", {},
				res => {
					console.log(res);
				}
			);
			*/
			//‘导航栏’ ajax请求结束
		},
		methods: {
			goTop() {
				var gotop = $(".swiper-wrapper");
				for(var i = 0; i < gotop.length; i++) {
					gotop[i].scrollTop = 0;
				}
			},
			gotop2(el) {
				var $top = $('<div class="fk"></div>');
				var $el = $(el);
				$el.each(function() {
					var $this = $(this);
					console.log($this);
					var $top_c = $('<div class="fk"><i class="am-gotop-icon am-icon-chevron-up"></i></div>');
					$this.append($top_c);
					$(document).on("click", $top_c, function() {
						$this.animate({
							scrollTop: 0
						}, 300);
					});
					$this.scroll(function() {
						if($this.scrollTop() > 100) {
							$top_c.css("opacity", "1");
							//				$top_c.css("transform", "none");
						} else {
							$top_c.css("opacity", "0");
						}

					})
				});

			},
			//下拉刷新
			loadTop() {
				//... // 加载更多数据
				this.onTopLoaded();
				this.update();
				this.$vux.toast.show({
					text: "刷新成功",
					type: "text",
					position: "middle"
				});
				//this.$refs.loadmore.onTopLoaded();
			},
			onTopLoaded: function onTopLoaded() {
				var this$1 = this;
				this.translate = 0;
				setTimeout(function() {
					this$1.topStatus = 'pull';
				}, 200);
			},
			handleTopChange(status) {
				this.topStatus = status;
			},
			//拖动导航
			drag() {
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
			//点击去我的下线页面
			toOffline() {
				this.$router.push({
					path: "/offline/offline",
					name: '/offline/offline'
				});
			},
			//点击切换
			openNav(group, j, list) {
				for(var i = 0; i < list.length; i++) {
					list[i].isOpen = false;
				}
				group.isOpen = true;
				console.log(j);
			},
			//点击去商品详情页面
			toGoodsInfo(item) {
				var goods_id = item.goods_id;
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: '/goodsInfo/goodsInfo',
					params: {
						goods_id: goods_id
					}
				});
			},
			setModel: function(type) {
				this.model = type;
			},
			toSearch() {
				this.$router.push({
					replace: true,
					path: "/search"
				});
			},
			//去我的消息页面
			toMessage() {
				this.$router.push({
					path: "/message/message"
				});
			},
			//去测试页面
			toAddressSwitch() {
				this.$router.push({
					path: "/addressSwitch/addressSwitch"
				});
			},
			update() {
				//选择地址
				//console.log("传过来的地址", this.$route.params['address']);
				//this.address = this.$route.params['address'];
				if(!this.$route.params["address"]) {
					if(!localStorage.address) {
						localStorage.address = "北京市";
						return;
					} else {
						this.address = localStorage.address;
					}
				} else {
					this.address = this.$route.params["address"];
				}
				localStorage.address = this.address;
			},
			nav() {
				this.$get(
					"class/getList", {},
					res => {
						for(var i = 0; i < res.msg.length; i++) {
							res.msg[i].isOpen = i == 0;

							res.msg[0].show = i == 1;

							res.msg[i].hide = i == 0;
							res.msg[0].hide = i == 1;
							res.msg[i].dataIndex = i + 1;
						}
						this.navList = res.msg;
						this.drag();
					}
				);
			},
			toFind() {
				this.$router.push({
					path: "/find/find"
				});
			}
		},
		data() {
			return {
				is_hint: false,
				distance: 70,
				pull_text: '系',
				topStatus: '',
				allLoaded: false,
				is_message: true,
				is_personal: false,
				address: "上海",
				model: 1,
				navList: [],
				goodsList: [{}],
				scroll: '',
				is_go_top: true
			};
		},
	};
</script>
<style>
	/*swiper的css*/
	
	@import url("../../assets/swiper.css");
	/*自己的css*/
	
	@import url("index.css");
	/*自己的关于拖动导航的css*/
	
	@import url("index-swiper.css");
	@import url("../../assets/app.css");
	@import url("mint-ui.css");
</style>