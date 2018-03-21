<template>
	<div class="social-info">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			发现详情
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<!--加载层开始-->
			<div>
				<loading :show="show"></loading>
			</div>
			<!--加载层结束-->
			<div class="panel">
				<!--头像名字和时间开始-->
				<div class="recommend-top">
					<flexbox :gutter="0">
						<flexbox-item :span="2.5">
							<div class="user-head" @click="toPersonal">
								<img src="../../assets/ImgThree/right-top.jpg" />
							</div>
						</flexbox-item>
						<flexbox-item :span="7.5">
							<div class="user-name font-15 font-black one-line">
								{{dynamic_info.user_id}}
							</div>
							<div class="publish-time font-12 font-gray one-line">
								{{dynamic_info.add_time}}
							</div>
						</flexbox-item>
						<flexbox-item :span="2">
							<div class="">
								<div v-if="dynamic_info.is_thumbs_up==true" class="follow font-14" @click="follow(dynamic_info)">
									+关注
								</div>
								<div v-else class="follow font-12" @click="cancelFollow(dynamic_info)">
									取消关注
								</div>
							</div>
						</flexbox-item>
					</flexbox>
				</div>
				<!--头像名字和时间开结束-->
				<div class="content">
					<div class="font-14 one-line padding-5">
						{{dynamic_info.dynamic_title}}
					</div>
					<div class="content-words">
						{{dynamic_info.dynamic_content}}
					</div>
					<div class="content-picture">
						<flexbox :gutter="0" wrap="wrap">
							<flexbox-item :span="4" v-for="(item,j) in dynamic_info.img_list">
								<div class="picture-box">
									<img :src="$getUrl(item)" />
								</div>
							</flexbox-item>
						</flexbox>
					</div>
					<!--商品开始-->
					<div class="shop-box">
						<flexbox :gutter="4" orient="horizontal">
							<flexbox-item :span="6" v-for="(item,index) in dynamic_info.goods_list" @click.native.stop="toGoodsInfo(item)">
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
				</div>
				<!--<div class="comment-hint font-15">
					8条全部评论
				</div>-->
				<!--评论内容开始-->
				<!--<div class="comment-list" v-for="(item,index) in dynamic_info.comment_list">
					<div class="comment-panel">
						<flexbox :gutter="0">
							<flexbox-item :span="2">
								<div class="comment-user-head" @click="toPersonal(item)">
									<img :src="$getUrl(item.user_head)" />
								</div>
							</flexbox-item>
							<flexbox-item :span="10">
								<div class="user-name font-14 font-black one-line">
									{{item.user_name}}
								</div>
								<div class="publish-time font-12 font-gray one-line">
									{{item.add_time}}
								</div>
								<div class="publish-content font-12 bc-gray padding-2">
									<span class="font-black">{{item.user_name}}：</span>{{item.info}}
								</div>
								<div class="publish-replay font-12 padding-2">
									{{item.info}}
								</div>
							</flexbox-item>
						</flexbox>
					</div>
				</div>-->
				<!--评论内容结束-->
				<!--下边的三个开始-->
				<!--<div class="content-handel">
					<flexbox :gutter="0" wrap="wrap">
						<flexbox-item :span="4">
							<div class="handel fabulous">
								<i v-if="dynamic_info.is_thumbs_up==true" class="fa fa-thumbs-o-up margin-right-3" @click="thumbs(dynamic_info)"></i>
								<i v-else class="font-red fa fa-thumbs-o-up margin-right-3" @click="cancel_thumbs(dynamic_info)"></i> {{dynamic_info.is_show}}
							</div>
						</flexbox-item>
						<div class="cube1"></div>
						<flexbox-item :span="4">
							<div class="handel comment">
								<i class="fa fa-commenting-o margin-right-3" @click="openComment"></i>18
							</div>
						</flexbox-item>
						<div class="cube2"></div>
						<flexbox-item :span="4">
							<div class="handel forward">
								<i class="fa fa-external-link margin-right-3" @click="openForward"></i>9
							</div>
						</flexbox-item>
					</flexbox>
				</div>-->
				<div class="content-handel">
					<flexbox :gutter="0" wrap="wrap">
						<flexbox-item :span="6">
							<div class="handel comment">
								<i class="fa fa-share margin-right-3"></i>
								<span class="font-14">下载图文</span>18
							</div>
						</flexbox-item>
						<div class="cube"></div>
						<flexbox-item :span="6">
							<div class="handel forward">
								<i class="fa fa-external-link margin-right-3" @click="openForward"></i>
								<span class="font-14">分享</span>9
							</div>
						</flexbox-item>
					</flexbox>
				</div>
				<!--转发开始-->
				<popup v-model="open_forward">
					<div v-show="is_message">
						<div class="text-center font-16 font-weight font-red">
							赚{{dynamic_info.is_show}}
						</div>
						<div class="text-center font-14">
							只要你的好友通过你的链接购买此商品，你就能赚到至少
							<span class="font-red">{{dynamic_info.is_show}}</span>
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
							<div class="comment-item text-center" @click="toMicroShare">
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
					<div class="cancel text-center font-15 padding-5" @click="cancel">
						取消
					</div>
				</popup>
				<!--转发结束-->
				<!--下边的三个开始-->
			</div>

			<!--输入评论的弹框开始-->
			<div v-transfer-dom>
				<confirm v-model="comment_show" show-input :title="('请输入评论内容')" :input-attrs="{type: 'text'}" @on-confirm="onComment">
				</confirm>
			</div>
			<!--输入评论的弹框结束-->
		</view-box>
	</div>
</template>

<script>
	import $ from "../../../static/jquery.js";

	import { XHeader, ViewBox, Previewer, TransferDom, Flexbox, FlexboxItem, Confirm, Popup, TabbarItem, Tabbar, Loading } from 'vux'
	export default {
		directives: {
			TransferDom
		},
		components: {
			XHeader,
			ViewBox,
			Previewer,
			Flexbox,
			FlexboxItem,
			Confirm,
			Popup,
			TabbarItem,
			Tabbar,
			Loading
		},
		data() {
			return {
				is_message: true,
				//加载层
				show: false,
				//动态的id
				dynamic_id: '',
				//详情
				dynamic_info: {},
				commentList: [{
					name: '456',
					time: '2017-00-00',
					comment_content: '评论内容',
					replay_content: '回复内容'
				}, {
					name: '789',
					time: '2017-04-00',
					comment_content: '评论内容',
					replay_content: '回复内容'
				}],
				//这个是评论弹框
				comment_show: false,
				//这个是转发上滑
				open_forward: false,
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
			if(!this.$route.params["dynamic_id"]) {
				if(!localStorage.dynamic_id) {
					this.$router.go(-1);
					return;
				} else {
					this.dynamic_id = localStorage.dynamic_id;
				}
			} else {
				this.dynamic_id = this.$route.params["dynamic_id"];
			}
			localStorage.dynamic_id = this.dynamic_id;
			this.update();
		},
		methods: {
			update() {
				var _this = this;
				if(this.$route.params["openComment"] == "1") {
					_this.openComment();
				}
				var dynamic_id = this.$route.params.dynamic_id;
				this.show = true;
				//取详情的ajax
				this.$post(
					"dynamic/get", {
						dynamic_id: this.dynamic_id
					},
					res => {
						console.log("详情请求接口", res);
						if(res.res >= 1) {
							this.show = false;
							this.dynamic_info = res.msg;
						}
						if(res.res < 0) {

						}
					}
				);
			},
			//点赞
			thumbs(dynamic_info) {
				console.log(dynamic_id);
				var dynamic_id = this.dynamic_id;
				//点赞的ajax开始
				this.$post(
					"dynamic/up", {
						dynamic_id: dynamic_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							dynamic_info.is_thumbs_up == false;
							this.$vux.toast.show({
								text: "点赞成功",
								type: "text",
								position: "middle"
							});
						}
						if(res.res < 1) {
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
			cancel_thumbs(dynamic_info) {
				var dynamic_id = this.dynamic_id;
				this.$post(
					"dynamic/delUp", {
						dynamic_id: dynamic_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							dynamic_info.is_thumbs_up == true;
							this.$vux.toast.show({
								text: "已取消点赞",
								type: "text",
								position: "middle"
							});
						}
						if(res.res <= 0) {
							this.$vux.toast.show({
								text: "网络错误",
								type: "text",
								position: "middle"
							});
							return false;
						}
					}
				);
			},
			//点击商品跳转商品详情页面
			toGoodsInfo(item) {
				var goods_id = item.goods_id
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: '/goodsInfo/goodsInfo',
					params: {
						goods_id: goods_id,
						socialInfo: "1"
					}
				});
			},
			//打开评论框
			openComment() {
				this.comment_show = true;
			},
			//打开转发
			openForward() {
				this.open_forward = true;
			},
			//转发里边的点击取消
			cancel() {
				this.open_forward = false;
			},
			//验证评论  点击可以提交评论
			onComment(msg) {
				var _this = this;
				if(msg.length <= 0 || msg.length > 50) {
					this.$vux.toast.show({
						text: "请输入0-50个字符",
						type: "text",
						position: "middle"
					});
					return false;
				}
				var dynamic_id = this.dynamic_id
				//ajax提交评论的内容
				this.$post(
					"comment/add", {
						add: {
							dynamic_id: dynamic_id,
							info: msg
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.$vux.toast.show({
								text: "评论成功",
								type: "text",
								position: "middle"
							});
							this.$router.go(-1);
						}
						if(res < 0) {
							this.$vux.toast.show({
								text: "网络错误",
								type: "text",
								position: "middle"
							});
							return false;
						}
					}
				);
				if(msg) {
					console.log(msg);
					this.$vux.toast.show({
						text: "评论成功",
						type: "text",
						position: "middle"
					});
				}
			},
			//关注
			follow() {
				//this.is_follow = !this.is_follow;
				//this.follow = "已关注"
				//关注接口
				var link_id = this.dynamic_info.user_id;
				//关注的ajax开始
				this.$post(
					"dynamic/up", {
						link_id: link_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.dynamic_info.is_thumbs_up == false;
							this.$vux.toast.show({
								text: "关注成功",
								type: "text",
								position: "middle"
							});
						}
						if(res.res < 1) {
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
			//取消关注
			cancelFollow() {
				var link_id = this.dynamic_info.user_id;
				console.log("输出link_id", link_id);
				//				this.$post(
				//					"dynamic/delUp", {
				//						link_id: link_id
				//					},
				//					res => {
				//						console.log(res);
				//						if(res.res >= 1) {
				//							this.dynamic_info.is_thumbs_up == true;
				//							this.$vux.toast.show({
				//								text: "已取消关注",
				//								type: "text",
				//								position: "middle"
				//							});
				//						}
				//						if(res.res < 0) {
				//							this.$vux.toast.show({
				//								text: "网络错误",
				//								type: "text",
				//								position: "middle"
				//							});
				//						}
				//					}
				//				);
			},
			//去个人主页
			toPersonal(item) {
				var user_id = item.user_id;
				this.$router.push({
					path: "/personal/personal",
					name: '/personal/personal',
					params: {
						user_id: user_id
					}
				});
			},
			//分享功能（分享到微博）
			toMicroShare() {
				var sharesinastring = 'http://service.weibo.com/share/share.php?title=' + $("#title").val() + '&url=' + $("#url").val();
				window.location.href = sharesinastring;
			}
		},
	}
</script>
<style>
	@import url("socialInfo.css");
	@import url("../../assets/app.css");
</style>