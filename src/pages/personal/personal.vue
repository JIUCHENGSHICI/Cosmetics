<template>
	<div class="personal">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			个人主页
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div>
				<loading :show="show"></loading>
			</div>
			<div class="personal">
				<div class="personal-top">
					<div class="head text-center">
						<!--<img src="../../assets/ImgThree/right-top.jpg" />-->
						<img :src="head_url" />
					</div>
					<div class="personal-name text-center two-line font-white">
						{{user_name}}
					</div>
					<div class="personal-introduce text-center font-white font-12">
						{{user_info}}
					</div>
					<!--关注被赞动态开始-->
					<flexbox :gutter="0" wrap="wrap">
						<flexbox-item :span="4">
							<div class="text-center font-white one-line">
								<span>5</span>
								<div class="">
									被关注
								</div>
							</div>
						</flexbox-item>
						<flexbox-item :span="4">
							<div class="text-center font-white one-line">
								<span>4</span>
								<div class="">
									被转发
								</div>
							</div>
						</flexbox-item>
						<flexbox-item :span="4">
							<div class="text-center font-white one-line">
								<span>4</span>
								<div>
									动态
								</div>
							</div>
						</flexbox-item>
					</flexbox>
					<!--关注被赞动态结束-->
				</div>
				<!--社交card  下边开始-->
				<div class="panel" v-for="(group,j) in personalCard" @click="toSocialInfo">
					<!--头像名字和时间开始-->
					<div class="recommend-top">
						<flexbox :gutter="0">
							<flexbox-item :span="2.5">
								<div class="user-head">
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
						<div class="padding-5 one-line font-14">
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
							<flexbox :gutter="4" orient="horizontal">
								<flexbox-item :span="6" v-for="(item,i) in group.goods_list" @click.native.stop="toGoodsInfo(item)">
									<div class="shop" style="width: 150px;">
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
									<div class="handel comment">
										<i class="fa fa-share margin-right-3" @click="toComment"></i>
										<span class="font-14">下载图文</span>18
									</div>
								</flexbox-item>
								<div class="cube"></div>
								<flexbox-item :span="6">
									<div class="handel forward">
										<i class="fa fa-external-link margin-right-3" @click.stop="openForward"></i>
										<span class="font-14">分享</span>9
									</div>
								</flexbox-item>
							</flexbox>
						</div>
						<!--转发开始-->
						<popup v-model="open_forward">
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
				<!--下边结束-->
			</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Flexbox, FlexboxItem, Popup, Loading } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Flexbox,
			FlexboxItem,
			Popup,
			Loading
		},
		data() {
			return {
				is_master: true,
				open_forward: false,
				personalCard: [],
				show: false,
				user_name: '',
				user_info: '',
				head_url: ''
			}
		},
		mounted() {
			var user_info = JSON.parse(localStorage.user_info)
			if(user_info.user_type == 0) {
				this.is_master = true;
			}
			if(user_info.user_type != 0) {
				this.is_message = false;
			}

			var user_info = JSON.parse(localStorage.user_info);
			console.log("asd", user_info);
			this.user_name = user_info.user_name;
			this.user_info = user_info.user_info;
			this.head_url = this.$getUrl(user_info.user_head)
			this.update();
			//			console.log("个人主页", localStorage.user_info)
			//			if(localStorage.user_info) {
			//				var user_name = JSON.parse(localStorage.user_info).user_name;
			//				var user_info = JSON.parse(localStorage.user_info).user_name;
			//				this.user_name = user_name;
			//				this.user_info = user_info;
			//			} else {
			//				this.user_name = "未设置";
			//				this.user_info = "未设置";
			//			}
			console.log("传过来的user_id", this.$route.params.user_id);
		},
		methods: {
			update() {
				this.show = true;
				//获取列表
				this.$post(
					"dynamic/getList", {},
					res => {
						this.personalCard = res.msg;
						this.show = false;
						if(res.res >= 1) {}
						if(res < 0) {}
					}
				);
			},
			//点击商品去商品详情页面
			toGoodsInfo(item) {
				var goods_id = item.goods_id
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					params: {
						goods_id: goods_id
					}
				});
			},
			//去社交的详情页面
			toSocialInfo() {
				this.$router.push({
					path: "/socialInfo/socialInfo",
					name: '/socialInfo/socialInfo',
					params: {
						openComment: "2",
					}
				});
			},
			//点赞
			thumbs(item) {
				var dynamic_id = item.dynamic_id;
				//点赞的ajax开始
				this.$post(
					"dynamic/up", {
						dynamic_id: dynamic_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							item.is_thumbs_up == false;
							this.$vux.toast.show({
								text: "点赞成功",
								type: "text",
								position: "middle"
							});
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
				//点赞的ajax结束
			},
			//取消点赞
			cancel_thumbs(item) {
				var dynamic_id = item.dynamic_id;
				this.$post(
					"dynamic/delUp", {
						dynamic_id: dynamic_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							item.is_thumbs_up == true;
							this.$vux.toast.show({
								text: "已取消点赞",
								type: "text",
								position: "middle"
							});
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
			},
			//去评论,打开社交页面直接弹出评论框
			toComment() {
				this.$router.push({
					path: "/socialInfo/socialInfo",
					name: '/socialInfo/socialInfo',
					params: {
						openComment: "1",
					}
				});
			},
			toGoodsInfo() {
				this.$router.push({
					path: "/goodsInfo/goodsInfo",

				});
			},
			//打开转发
			openForward() {
				this.open_forward = true;
			},
			//点击转发里边的取消把转发关闭
			cancel() {
				this.open_forward = false;
			},
			//点击商品跳转商品详情页面
			toGoodsInfo(item) {
				var goods_id = item.goods_id
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: '/goodsInfo/goodsInfo',
					params: {
						goods_id: goods_id,
					}
				});
			},
		}
	}
</script>
<style>
	@import url("personal.css");
	@import url("../../assets/app.css");
</style>