<template>
	<div class="social">
		<!--顶部导航栏开始-->
		<x-header class="" :left-options="{showBack: false}">
			<a slot="left" @click="toMessage">
				<i class="fa fa-envelope-o"></i>
			</a>
			社交
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div>
				<loading :show="show"></loading>
			</div>
			<div class="social-box">
				<!--<div class="space-btn" @click="spaceChange">显示间隔</div>-->
				<!--<div class="space">间隔</div>-->
				<div style="height:44px;">
					<sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
						<tab :line-width="1">
							<tab-item selected @click.native="setModel(1)">推荐</tab-item>
							<tab-item @click.native="setModel(2)">关注</tab-item>
						</tab>
					</sticky>
				</div>
				<!--推荐开始-->
				<div class="recommend" v-if='model==1'>
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
								<flexbox :gutter="4" orient="horizontal">
									<flexbox-item :span="6" v-for="(item,j) in group.goods_list" @click.native.stop="toGoodsInfo(item)">
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
							<!--<div class="content-handel">
								<flexbox :gutter="0" wrap="wrap">
									<flexbox-item :span="4">
										<div class="handel fabulous one-line">
											<i v-if="group.is_thumbs_up==true" class="fa fa-thumbs-o-up margin-right-3" @click.stop="thumbs(group)"></i>
											<i v-else class="fa font-red fa-thumbs-o-up margin-right-3" @click.stop="cancel_thumbs(group)"></i>
											<span>{{group.is_show}}</span>
										</div>
									</flexbox-item>
									<div class="cube1"></div>
									<flexbox-item :span="4">
										<div class="handel comment one-line">
											<i class="fa fa-commenting-o margin-right-3" @click="toComment"></i>
											<span>{{group.comment_amount}}</span>
										</div>
									</flexbox-item>
									<div class="cube2"></div>
									<flexbox-item :span="4">
										<div class="handel forward one-line">
											<i class="fa fa-external-link margin-right-3" @click.stop="openForward"></i>
											<span>{{group.forward_amount}}</span>
										</div>
									</flexbox-item>
								</flexbox>
							</div>-->
							<div class="content-handel">
								<flexbox :gutter="0" wrap="wrap">
									<flexbox-item :span="6">
										<div class="handel comment one-line">
											<i class="fa fa-share margin-right-3" @click="toComment"></i>
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
										<div class="comment-item text-center" @click="wx">
											<i class="fa fa-wechat"></i>
											<div class="comment-title">
												微信
											</div>
										</div>
									</flexbox-item>
									<flexbox-item :span="4">
										<div class="comment-item text-center" @click="qq">
											<i class="fa fa-qq"></i>
											<div class="comment-title">
												QQ
											</div>
										</div>
									</flexbox-item>
									<flexbox-item :span="4">
										<div class="comment-item text-center" @click="friend">
											<i class="fa fa-chrome"></i>
											<div class="comment-title">
												微博
											</div>
										</div>
									</flexbox-item>
									<flexbox-item :span="4">
										<div class="comment-item text-center" @click="copy">
											<i class="fa fa-gg"></i>
											<div class="comment-title">
												商品二维码
											</div>
										</div>
									</flexbox-item>
									<flexbox-item :span="4">
										<div class="comment-item text-center" @click="copy">
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

				<!--推荐结束-->
				<!--关注开始-->
				<div class="follow" v-if='model==2'>
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
									<flexbox-item :span="4">
										<div class="picture-box">
											<img src="../../assets/pig1.jpg" />
										</div>
									</flexbox-item>
								</flexbox>
							</div>
							<!--商品开始-->
							<div class="shop-box">
								<flexbox :gutter="4" orient="horizontal">
									<flexbox-item :span="6" v-for="(item,j) in group.goods_list" @click.native.stop="toGoodsInfo(item)">
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
									<flexbox-item :span="4">
										<div class="handel fabulous one-line">
											<!--<i class="fa fa-thumbs-o-up margin-right-3" :class="{'font-red': group.is_thumbs}" @click.stop="thumbs"></i>-->
											<i v-if="group.is_thumbs_up==true" class="fa fa-thumbs-o-up margin-right-3" @click.stop="thumbs(group)"></i>
											<i v-else class="fa font-red fa-thumbs-o-up margin-right-3" @click.stop="cancel_thumbs(group)"></i>
											<span>{{group.is_show}}</span>
										</div>
									</flexbox-item>
									<div class="cube1"></div>
									<flexbox-item :span="4">
										<div class="handel comment one-line">
											<i class="fa fa-commenting-o margin-right-3" @click="toComment"></i>
											<span>{{group.comment_amount}}</span>
										</div>
									</flexbox-item>
									<div class="cube2"></div>
									<flexbox-item :span="4">
										<div class="handel forward one-line">
											<i class="fa fa-external-link margin-right-3" @click.stop="openForward"></i>
											<span>{{group.forward_amount}}</span>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
						</div>
					</div>
				</div>
				<!--关注结束-->
				<div class="to-release" @click="toRelease">
					<i class="fa fa-pencil"></i>
				</div>
			</div>
			<!--组件-->
			<find></find>
		</view-box>
	</div>
</template>

<script>
	import find from "../../components/find/find.vue";
	import { Tab, TabItem, Sticky, ViewBox, XHeader, Panel, Flexbox, FlexboxItem, Previewer, TransferDom, Popup, Loading } from 'vux'
	export default {
		directives: {
			TransferDom
		},
		components: {
			Tab,
			TabItem,
			Sticky,
			ViewBox,
			XHeader,
			Panel,
			Flexbox,
			FlexboxItem,
			Previewer,
			TransferDom,
			Popup,
			Loading,
			find
		},
		data() {
			return {
				is_master: true,
				model: 1,
				show: false,
				showSpace: false,
				//这个是打开转发
				open_forward: false,
				recommendList: [],
				followList: [{
					user_name: '关注君',
					publish_time: '2017-03-04',
					content: 'lorem dndksdjsknskfnkdfndkfnke',
					//点赞数量
					thumbs_amount: 15
				}, {
					user_name: '啦啦啦',
					publish_time: '2017-05-06',
					content: '小女生了看电视了肯德基是来看待聚少离多即使恐龙',
					//点赞数量
					thumbs_amount: 70
				}, {
					user_name: '好好好',
					publish_time: '2017-05-06',
					content: 'lsdskldjslkdjsldjsldkjslkdjslkdjsldjslkd',
					//点赞数量
					thumbs_amount: 7
				}]
			}
		},
		mounted() {
			this.update();
			var user_info = JSON.parse(localStorage.user_info)
			if(user_info.user_type == 0) {
				this.is_master = true;
			}
			if(user_info.user_type != 0) {
				this.is_message = false;
			}
		},
		methods: {
			setModel: function(type) {
				this.model = type;
			},
			update() {
				this.show = true;
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
			spaceChange() {
				this.showSpace = !this.showSpace
				this.$nextTick(() => {
					this.$refs.sticky.bindSticky()
				})
			},
			//去我的消息页面
			toMessage() {
				this.$router.push({
					path: "/message/message",
				});
			},
			//点赞
			thumbs(list) {
				var dynamic_id = list.dynamic_id;
				console.log("点赞的id", dynamic_id);
				//点赞的ajax开始
				this.$post(
					"dynamic/up", {
						dynamic_id: dynamic_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							list.is_thumbs_up == false;
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
			cancel_thumbs(list) {
				var dynamic_id = list.dynamic_id;
				console.log("取消点赞的id", dynamic_id);
				this.$post(
					"dynamic/delUp", {
						dynamic_id: dynamic_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							list.is_thumbs_up == true;
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
			//取消点赞
			//去社交的详情页面 不打开消息评论 
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
			//去详情页面直接打开评论
			toComment() {
				this.$router.push({
					path: "/socialInfo/socialInfo",
					name: '/socialInfo/socialInfo',
					params: {
						openComment: "1",
					}
				});
			},
			//点击商品区商品详情
			toGoodsInfo(item) {
				var goods_id = item.goods_id
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: '/goodsInfo/goodsInfo',
					params: {
						goods_id: goods_id
					}
				});
			},
			//转发 请求接口
			openForward() {
				this.open_forward = true;
			},
			wx() {
				console.log("点击微信转发");
			},
			qq() {
				console.log("点击QQ转发");
			},
			friend() {
				console.log("点击朋友圈转发");
			},
			copy() {
				console.log("点击复制链接");
			},
			//转发里边的点击取消
			cancel() {
				this.open_forward = false;
			},
			//点击头像去个人主页
			toPersonal() {
				this.$router.push({
					path: "/personal/personal",
					name: '/personal/personal',
					//					params: {
					//						openComment: "1",
					//					}
				});
			},
			//去发布动态页面
			toRelease() {
				this.$router.push({
					path: "/release/release",
				});
			}
		},
	}
</script>
<style>
	@import url("social.css");
	@import url("../../assets/app.css");
</style>