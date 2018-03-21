<!--时间轴-->
<template>
	<div class="find">
		<!--推荐开始-->
		<div class="recommend">
			<!--v-for="(group,i) in recommendList" @click="toSocialInfo(group)"-->
			<div class="panel">
				<!--头像名字和时间开始-->
				<div class="recommend-top">
					<flexbox :gutter="0">
						<flexbox-item :span="2.5">
							<!--@click.stop="toPersonal"-->
							<div class="user-head">
								<img src="../../assets/ImgThree/right-top.jpg" />
							</div>
						</flexbox-item>
						<flexbox-item :span="9.5">
							<div class="user-name font-15 font-black one-line">
								<!--{{group.user_id}}-->
								132
							</div>
							<div class="publish-time font-12 font-gray one-line">
								<!--{{group.add_time}}-->
								456
							</div>
						</flexbox-item>
					</flexbox>
				</div>
				<!--头像名字和时间开结束-->
				<div class="content">
					<div class="one-line font-14">
						<!--{{group.dynamic_title}}-->
						title
					</div>
					<div class="content-words">
						<!--{{group.dynamic_content}}-->
						content
					</div>
					<div class="content-picture">
						<flexbox :gutter="0" wrap="wrap">
							<!--v-for="(item,j) in group.img_list"-->
							<flexbox-item :span="4">
								<div class="picture-box">
									<!--<img :src="$getUrl(item)" />-->
									<img src="../../assets/ImgThree/right-bottom.png" />
								</div>
							</flexbox-item>
						</flexbox>
					</div>
					<!--商品开始-->
					<!--<div class="shop-box">
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
					</div>-->
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
									<!--@click="toComment"-->
									<i class="fa fa-share margin-right-3"></i>
									<span class="font-12">下载图文</span>
									<span>
										<!--{{group.comment_amount}}-->12</span>
								</div>
							</flexbox-item>
							<div class="cube"></div>
							<flexbox-item :span="6">
								<div class="handel forward one-line">
									<!--@click.stop="openForward"-->
									<i class="fa fa-external-link margin-right-3"></i>
									<span class="font-12">分享</span>
									<span>
										<!--{{group.forward_amount}}-->123</span>
								</div>
							</flexbox-item>
						</flexbox>
					</div>
					<!--转发开始-->
					<!--<popup v-show="open_forward">
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
					</popup>-->
					<!--转发结束-->
				</div>
			</div>
		</div>

		<!--推荐结束-->
	</div>
</template>
<script>
	import { Flexbox, FlexboxItem, Popup } from "vux";
	export default {
		mounted() {},
		components: {
			Flexbox,
			FlexboxItem,
			Popup
		},
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style>
	@import url("find.css");
	@import url("../../assets/app.css");
</style>