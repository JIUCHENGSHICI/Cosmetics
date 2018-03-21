<!--商品详情页面-->
<template>
	<div id="goodsInfo" class="goods-info">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<span @click="setModel(1)" class="font-14"><i v-if='model==1' class="fa fa-map-marker"></i>商品</span>
			&nbsp;&nbsp;
			<span @click="setModel(2)" class="font-14"><i v-if='model==2' class="fa fa-map-marker"></i>素材</span>
			<template slot="right" v-if='model==1'>
				<i :class="['heart fa',{'fa-heart-o':!goods_info.is_collection,'fa-heart':goods_info.is_collection}]" @click="collection"></i> &nbsp;
				<i class="fa fa-mail-forward font-white" @click="openGoodsForward"></i>
			</template>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<!--商品详情开始-->
			<div v-if='model==1'>
				<div>
					<loading :show="show"></loading>
				</div>
				<swiper :list="headImgList" dots-position="center" :aspect-ratio="100/100"></swiper>
				<!--<swiper :list="$getUrl(goods_info.img_list.src)" dots-position="center" :aspect-ratio="100/100"></swiper>-->
				<!--基本信息-->
				<div class="goods-basic-info">
					<div class="goods-title">
						{{goods_info.goods_title}}
					</div>
					<div class="goods-money">
						￥
						<span v-if="spec==null || spec['money']==null">
							<span v-if="goods_info.spec.paramList.length>0">
								{{goods_info.spec.paramList[0].money}}
							</span>
						</span>
						<span v-if="spec!=null && spec['money']!=null">
							{{spec.money}}
						</span>
					</div>
				</div>

				<div class="panel" @click="isSpec=true">
					<!--v-if="!spec"-->
					<template>
						<span>请选择规格</span>
					</template>
					<!--<template v-else>
					已选择： {{spec.title}}
				</template>-->
				</div>
				<!-- 商品详情 -->
				<!--logo开始-->
				<div class="logo">
					<flexbox :gutter="0">
						<flexbox-item :span="2">
							<div class="shop-logo">
								<img src="../../assets/logo.png" />
							</div>
						</flexbox-item>
						<flexbox-item :span="10">
							<div class="logo-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti labore aspernatur earum quaerat placeat beatae assumenda ipsa laborum blanditiis officiis sapiente et cupiditate distinctio ducimus facere voluptate sit! Beatae dolores.</div>
						</flexbox-item>
					</flexbox>
				</div>
				<!--logo结束-->
				<!--新加入开始-->
				<div class="">
					<!--<group class="margin-top-half">
					<cell :border-intent="false" :title="('我的收藏')" :value="('')" @click.native="toCollection" is-link></cell>
				</group>-->
					<div class="member one-line" @click="toIndemnity">
						<div class="font-12 display-inline member-label">贵就赔</div>
						<span class="font-14">该商品会员购买可享一贵就赔服务</span>
						<i class="float-right fa fa-angle-right" style="line-height: 22px;"></i>
					</div>
				</div>
				<!--新加入结束-->
				<div class="goods-content" v-html="goods_info.goods_content"></div>
			</div>
			<!--商品详情结束-->
			<!--素材容器开始-->
			<div v-if='model==2'>
				<div class="panel" v-for="(group,i) in recommendList" @click="toSocialInfo(group)">
					<!--头像名字和时间开始-->
					<div class="recommend-top">
						<flexbox :gutter="0">
							<flexbox-item :span="2.5">
								<div class="user-head" @click.stop="toPersonal">
									<img src="../../assets/ImgThree/right-top.jpg" />
								</div>
							</flexbox-item>
							<flexbox-item :span="9.5">
								<div class="user-name font-15 font-black one-line">
									{{group.user_id}}
								</div>
								<div class="publish-time font-12 font-gray one-line">
									{{group.add_time}}
								</div>
							</flexbox-item>
						</flexbox>
					</div>
					<!--头像名字和时间开结束-->
					<div class="content">
						<div class="one-line font-14">
							{{group.dynamic_title}}
						</div>
						<div class="content-words">
							{{group.dynamic_content}}
						</div>
						<div class="content-picture">
							<flexbox :gutter="0" wrap="wrap">
								<flexbox-item :span="4" v-for="(item,j) in group.img_list">
									<div class="picture-box">
										<img :src="$getUrl(item)" />
									</div>
								</flexbox-item>
							</flexbox>
						</div>
						<!--商品开始-->
						<div class="shop-box">
							<flexbox :gutter="8" orient="horizontal">
								<flexbox-item :span="6" v-for="(item,j) in group.goods_list" @click.native.stop="toGoodsInfo(item)">
									<div class="shop-item">
										<flexbox :gutter="0">
											<flexbox-item :span="4">
												<div class="shop-head">
													<img :src="$getUrl(item.img_list[0].src)" />
												</div>
											</flexbox-item>
											<flexbox-item :span="8">
												<div class="shop-title two-line font-12">
													{{item.goods_title}}
												</div>
											</flexbox-item>
										</flexbox>
									</div>
								</flexbox-item>
							</flexbox>
						</div>
						<!--商品结束-->
						<div class="content-handel">
							<flexbox :gutter="0" wrap="wrap">
								<flexbox-item :span="6">
									<div class="handel comment one-line">
										<i class="fa fa-share margin-right-3"></i>
										<span class="font-12">下载图文</span>
										<span>{{group.comment_amount}}</span>
									</div>
								</flexbox-item>
								<div class="cube"></div>
								<flexbox-item :span="6">
									<div class="handel forward one-line">
										<i class="fa fa-external-link margin-right-3" @click.stop="openForward"></i>
										<span class="font-12">分享</span>
										<span>{{group.forward_amount}}</span>
									</div>
								</flexbox-item>
							</flexbox>
						</div>
						<!--转发开始-->
						<popup v-show="open_forward">
							<div v-show="is_master">
								<div class="text-center font-16 font-weight font-red">
									赚{{group.is_show}}
								</div>
								<div class="text-center font-14">
									只要你的好友通过你的链接购买此商品，你就能赚到至少
									<span class="font-red">{{group.is_show}}</span>
									元的利润哦~
								</div>
							</div>
							<flexbox :gutter="0" wrap="wrap">
								<flexbox-item :span="4">
									<div class="comment-item text-center">
										<i class="fa fa-wechat"></i>
										<div class="comment-title">
											微信
										</div>
									</div>
								</flexbox-item>
								<flexbox-item :span="4">
									<div class="comment-item text-center">
										<i class="fa fa-qq"></i>
										<div class="comment-title">
											QQ
										</div>
									</div>
								</flexbox-item>
								<flexbox-item :span="4">
									<div class="comment-item text-center">
										<i class="fa fa-chrome"></i>
										<div class="comment-title">
											微博
										</div>
									</div>
								</flexbox-item>
								<flexbox-item :span="4">
									<div class="comment-item text-center">
										<i class="fa fa-gg"></i>
										<div class="comment-title">
											商品二维码
										</div>
									</div>
								</flexbox-item>
								<flexbox-item :span="4">
									<div class="comment-item text-center">
										<i class="fa fa-gg"></i>
										<div class="comment-title">
											商品链接
										</div>
									</div>
								</flexbox-item>
							</flexbox>
							<div class="cancel text-center font-15 padding-5" @click.stop="cancel">
								取消
							</div>
						</popup>
						<!--转发结束-->
					</div>
				</div>
			</div>
			<!--素材容器结束-->
		</view-box>

		<!-- 规格面板 -->

		<popup v-model="isSpec">

			<div class="goods-select">

				<div class="goods-basic-info">
					<!--<img src="http://shopimg.weimob.com/56030317/Goods/1801221431115784.jpg" class="goods-head-img">-->
					<!--<div v-if="goods_info.img_list>0">-->
					<!--<img :src="$getUrl(goods_info.img_list[0].src)" class="goods-head-img">-->
					<!--</div>-->
					<div class="goods-info">
						<div class="goods-money">
							￥
							<span v-if="spec==null || spec['money']==null">
								<span v-if="goods_info.spec.paramList.length>0">
									{{goods_info.spec.paramList[0].money}}
								</span>
							</span>
							<span v-if="spec!=null && spec['money']">
								{{spec.money}}
							</span>
						</div>
						<div class="goods-stock">
							<template v-if="!spec">
								<span>请选择规格：</span>
							</template>
							<template v-else>
								<div>
									库存
									<span v-if="spec==null || spec['stock']==null">
										<span v-if="goods_info.spec.paramList.length>0">
											{{goods_info.spec.paramList[0].stock}}
										</span>
									</span>
									<span v-if="spec!=null && spec['stock']">
										{{spec.stock}}
									</span>
									件
								</div>
							</template>

						</div>

					</div>

				</div>

				<div class="select-view">

					<div class="spec-select">

						<span class="title">
							规格：
						</span>

						<!--<checker type="checkbox" :radio-required="true" v-model="spec" default-item-class="spec-select-item" selected-item-class="spec-select-item-selected" disabled-item-class="spec-select-item-disabled">-->

						<div class="title" v-for="(group,i) in goods_info.spec.spec">
							<span>{{group.title}}</span>

							<checker type="radio" @on-change="setSpec()" :radio-required="true" v-model="spec[group.title]" default-item-class="spec-select-item" selected-item-class="spec-select-item-selected" disabled-item-class="spec-select-item-disabled">
								<checker-item :value="item" @on-item-click="onSpecClick" v-for="(item,j) in group.node" v-if="item.check">
									{{item.title}}
								</checker-item>
							</checker>
						</div>

						<!--</checker>-->

					</div>
					<!-- 数量 -->

					<div class="num-select">

						<flexbox>

							<flexbox-item>

								<span class="title">
									数量：
								</span>

							</flexbox-item>

							<flexbox-item class="text-right">

								<inline-x-number :fillable="false" v-model="goods_count" :min="1"></inline-x-number>

							</flexbox-item>

						</flexbox>

					</div>
				</div>

				<div class="add-goods-btn-box" @click="addShopBag()">
					<div class="add-goods-btn">加入购物车</div>
				</div>

				<div class="goods-select-close" @click="isSpec=false">
					<x-icon type="ios-close-empty" size="35"></x-icon>
				</div>
			</div>
		</popup>
		<!--商品详情的转发开始-->
		<!--转发开始-->
		<popup v-show="open_goods_forward">
			<flexbox :gutter="0" wrap="wrap">
				<flexbox-item :span="4">
					<div class="comment-item text-center" @click="goodsShareWx">
						<i class="fa fa-wechat"></i>
						<div class="comment-title">
							微信
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="4">
					<div class="comment-item text-center">
						<i class="fa fa-qq"></i>
						<div class="comment-title">
							QQ
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="4">
					<div class="comment-item text-center" @click="goodsShareMicro">
						<i class="fa fa-chrome"></i>
						<div class="comment-title">
							微博
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="4">
					<div class="comment-item text-center">
						<i class="fa fa-gg"></i>
						<div class="comment-title">
							商品二维码
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="4">
					<div class="comment-item text-center">
						<i class="fa fa-gg"></i>
						<div class="comment-title">
							商品链接
						</div>
					</div>
				</flexbox-item>
			</flexbox>
			<div class="cancel text-center font-15 padding-5" @click.stop="cancel">
				取消
			</div>
		</popup>
		<!--转发结束-->
		<!--商品详情的转发结束-->
		<div class="fix-btn-box" v-if='model==1'>

			<flexbox :gutter="0">

				<flexbox-item :span="3" @click.native="collection()">

					<!--<i :class="['heart fa',{'fa-heart-o':!goods_info.is_collection,'fa-heart':goods_info.is_collection}]"></i>-->
					<!--把之前的收藏的图标变成了联系客服-->
					<i :class="['heart fa',{'fa-heart-o':!goods_info.is_collection,'fa-heart':goods_info.is_collection}]"></i>
				</flexbox-item>

				<flexbox-item :span="3" class="shop-bag-box">

					<router-link :to="{ path: '/shopBag',name:'/shopBag', params: { index: 2 ,isGoodsInfo:true}}" class="shop-bag-link">
						<i class="fa fa-shopping-cart shop-bag-icon"></i>
						<badge :text="bag_num" class="shop-bag-num"></badge>
					</router-link>

				</flexbox-item>

				<flexbox-item :span="6" @click.native="addShopBag()">
					<div class="add-goods-btn">加入购物车</div>
				</flexbox-item>

			</flexbox>
		</div>
	</div>
</template>

<script>
	import {
		XHeader,
		ViewBox,
		Swiper,
		Popup,
		XSwitch,
		Group,
		Cell,
		CheckerItem,
		Checker,
		InlineXNumber,
		FlexboxItem,
		Flexbox,
		Badge,
		Loading,
	} from "vux";

	import $ from "jquery";

	export default {
		name: "godosInfo",
		components: {
			XHeader,
			ViewBox,
			Swiper,
			Popup,
			XSwitch,
			Group,
			Cell,
			CheckerItem,
			Checker,
			InlineXNumber,
			FlexboxItem,
			Flexbox,
			Badge,
			Loading
		},
		data() {
			return {
				model: 1,
				show: true,
				add: [],
				isSpec: false,
				spec: null,
				goods_count: 1,
				goods_id: '',
				bag_num: 0,
				goods_info: {
					goods_id: "",
					goods_title: "",
					goods_money: 0,
					goods_stock: 0,
					spec: {
						"map": [],
						paramList: []
					},
					img_list: [],
					is_collection: false,
				},
				mapList: [],
				headImgList: [],
				recommendList: [],
				open_forward: false,
				is_master: true,
				open_goods_forward: false,
				test: ''
			};
		},

		methods: {
			setModel: function(type) {
				this.model = type;
			},
			//去赔款页面
			toIndemnity() {
				console.log("去赔款页面");
				this.$router.push({
					path: "/indemnity/indemnity"
				});
			},
			onSpecClick() {},
			setSpec() {
				var spec = this.spec;
				for(var i = 0; i < this.goods_info.spec.paramList.length; i++) {
					var item = this.goods_info.spec.paramList[i];
					var is = true;
					for(var x in item.params) {
						if(spec[x] == undefined) {
							is = false;
						} else {
							if(item.params[x] != spec[x].title) {
								is = false;
							}
						}
					}
					if(is) {
						spec.money = item.money;
						spec.stock = item.stock;
					}

				}
				this.spec = spec;

			},
			addShopBag() {
				this.setSpec();
				console.log(this.spec);
				if(!this.spec['money']) {
					this.$vux.toast.show({
						text: "请选择规格",
						type: "text",
						position: "middle"
					});
					return;
				}
				//组装数据
				//规格

				//‘加入购物袋’ ajax请求开始
				this.$post(
					"bag/add", {
						add: {
							spec: this.spec,
							goods_id: this.goods_info.goods_id,
							goods_count: this.goods_count,
						}
					},
					res => {
						if(res.res >= 1) {
							this.$vux.toast.show({
								text: "添加成功",
								type: "text",
								position: "middle"
							});
							this.isSpec = false;
							this.bag_num = res.bag_num;
						}
						if(res.res < 0) {
							this.$vux.toast.show({
								text: "网络错误",
								type: "text",
								position: "middle"
							});
						}

					}
				);
				//‘加入购物袋’ ajax请求结束
			},
			collection() {
				//收藏的ajax开始
				this.$post(
					"collection/change", {
						goods_id: this.goods_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							if(res.msg == 1) {
								this.goods_info.is_collection = true;
								this.$vux.toast.show({
									text: "收藏成功",
									type: "text",
									position: "middle"
								});
							}
							if(res.msg == 0) {
								this.goods_info.is_collection = false;
								this.$vux.toast.show({
									text: "已取消收藏",
									type: "text",
									position: "middle"
								});
							}
						}

					}
				);

			},
			update() {
				console.log(this.$route.params);
				//ajax
				this.$get(
					"goods/get", {
						goods_id: this.goods_id
					},
					res => {
						//ajax请求完之后去掉load层
						this.show = false;
						if(res.res >= 1) {
							// this.order_id;
							this.bag_num = res.bag_num;
							this.goods_info = res.msg;

							this.spec = {};
							for(var i = 0; i < this.goods_info.spec.spec; i++) {
								this.spec[this.goods_info.spec.spec[i].title] = [];
							}

							for(var i = 0; i < this.goods_info.img_list.length; i++) {
								this.goods_info.img_list[i].img = this.$getUrl(this.goods_info.img_list[i].src);
							}
							this.headImgList = this.goods_info.img_list;
							console.log(res);
						}
						if(res.res < 0) {
							//订单不存在
						}
					}
				);
			},
			dynamic() {
				//获取推荐列表
				this.$post(
					"dynamic/getList", {},
					res => {
						console.log("获取过来的动态列表", res);
						this.recommendList = res.msg;
						this.show = false;
						if(res.res >= 1) {}
						if(res < 0) {}
					}
				);
			},
			openForward() {
				this.open_forward = true;
			},
			//打开商品详情的分享
			openGoodsForward() {
				this.open_goods_forward = true;
			},
			cancel() {
				this.open_forward = false;
				this.open_goods_forward = false;
			},
			//商品详情的微博分享
			goodsShareMicro() {
				//微博分享
				//				var sharesinastring = 'http://service.weibo.com/share/share.php?title=' + $(".goods-title").val() + '&url=' + $("#url").val();
				//				window.location.href = sharesinastring;
				//qq分享
				//				var sharesinastring = 'http://connect.qq.com/widget/shareqq/index.html?title=' + $(".goods-title").val() + '&summary=' + $("#url").val() + '&url=' + $("#url").val() + '&site="满艺网"';
				//				window.location.href = sharesinastring;
				//				复制地址
				console.log(window.location.href);
				console.log(window);
				var href_address = window.location.href;
				window.clipboardData.setData("Text", href_address);
			},
			//商品详情里边的点击进行微信分享
			goodsShareWx() {

			},
			//点击进去动态详情
			toSocialInfo(group) {
				var dynamic_id = group.dynamic_id;
				this.$router.push({
					path: "/socialInfo/socialInfo",
					name: '/socialInfo/socialInfo',
					params: {
						openComment: "2",
						dynamic_id: dynamic_id
					}
				});
			},
			//去个人主页
			toPersonal() {
				this.$router.push({
					path: "/personal/personal",
					name: '/personal/personal',
				});
			},
		},
		mounted() {
			var str = window.location.href;
			var str_after = str.split("=")[1];
			console.log("获取的商品id", str_after);
			this.is_material = false;
			if(!this.$route.params["goods_id"]) {
				if(!localStorage.goods_id) {
					this.$router.go(-1);
					return;
				} else {
					this.goods_id = localStorage.goods_id;
				}
			} else {
				this.goods_id = this.$route.params["goods_id"];
			}
			localStorage.goods_id = this.goods_id;
			this.update();
			this.dynamic();
		},
		watch: {
			spec() {
				this.setSpec();
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "goodsInfo.scss";
</style>

<style>
	@import url("../../assets/app.css");
</style>
<style lang="scss">
	.goods-content {
		width: 100%;
		overflow: hidden;
		img {
			max-width: 100% !important;
		}
		* img {
			max-width: 100% !important;
		}
	}
</style>