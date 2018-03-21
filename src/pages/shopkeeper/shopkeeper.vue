<!--我是店主页面-->
<template>
	<div class="shopkeeper">
		<!--顶部导航栏开始-->
		<x-header class="" :left-options="{showBack: false}">
			我是店主
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<!--顶部店主信息  包括头像，名字 id 二维码 开始-->
			<div class="shopkeeper-top">
				<flexbox :gutter="0">
					<flexbox-item :span="2">
						<div class="shopkeeper-head">
							<img src="../../assets/ImgThree/left.jpg" />
						</div>
					</flexbox-item>
					<flexbox-item :span="5">
						<div class="shopkeeper-info">
							<div class="shopkeeper-name one-line font-weight font-14">
								Zane Fu Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ex adipisci fugiat pariatur soluta totam necessitatibus ea reprehenderit! Iste voluptas commodi quis. Illo reprehenderit delectus aliquam voluptates consectetur deleniti magnam.
							</div>
							<div class="shopkeeper-id one-line font-gray font-12">
								店铺序号:1278967360123465789798465132
							</div>
						</div>
					</flexbox-item>
					<flexbox-item :span="0">
						<div class="text-center">
							<div class="font-12 font-red">13</div>
							<div class="font-gray font-12">商品</div>
						</div>
					</flexbox-item>
					<flexbox-item :span="2">
						<div class="text-center">
							<div class="font-12 font-red">1</div>
							<div class="font-gray font-12">品牌</div>
						</div>
					</flexbox-item>
					<flexbox-item :span="1">
						<div class="text-center">
							<i class="fa fa-angle-right"></i>
						</div>
					</flexbox-item>
				</flexbox>
			</div>
			<!--顶部店主信息  包括头像，名字 id 二维码 结束-->
			<!--卡片开始-->
			<div class="card-box">
				<flexbox :gutter="5">
					<flexbox-item :span="11.5">
						<div class="card-item">
							<div class="text-center font-12 font-white">
								本月销售额（元）
							</div>
							<div class="text-center font-25 font-white">
								0.00
							</div>
							<div class="text-center font-12">
								<div class="card-hint font-white">
									销售额还差
									<span class="font-glod">1324</span>
									元即可获得奖励
									<i class="fa fa-angle-right"></i>
								</div>
							</div>
							<div class="card-bottom font-white">
								<flexbox :gutter="0">
									<flexbox-item :span="4">
										<div class="text-center">
											<div class="font-12 one-line">今日访问量</div>
											<div class="font-12">0</div>
										</div>
									</flexbox-item>
									<div class="cube1"></div>
									<flexbox-item :span="4">
										<div class="text-center">
											<div class="font-12 one-line">今日订单数</div>
											<div class="font-12">0</div>
										</div>
									</flexbox-item>
									<div class="cube2"></div>
									<flexbox-item :span="4">
										<div class="text-center">
											<div class="font-12 one-line">VIP人数</div>
											<div class="font-12">0</div>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
						</div>
					</flexbox-item>
					<flexbox-item :span="11.5">
						<div class="card-item">
							<div class="text-center font-12 font-white">
								累计收益（元）
							</div>
							<div class="profit">
								201.90
							</div>
							<div class="card-bottom font-white">
								<flexbox :gutter="0">
									<flexbox-item :span="4">
										<div class="text-center">
											<div class="font-12 one-line">待收收益</div>
											<div class="font-12">0.00</div>
										</div>
									</flexbox-item>
									<div class="cube1"></div>
									<flexbox-item :span="4">
										<div class="text-center">
											<div class="font-12 one-line">今日收益</div>
											<div class="font-12">0.00</div>
										</div>
									</flexbox-item>
									<div class="cube2"></div>
									<flexbox-item :span="4">
										<div class="text-center">
											<div class="font-12 one-line">本月收益</div>
											<div class="font-12">0.00</div>
										</div>
									</flexbox-item>
								</flexbox>
							</div>
						</div>
					</flexbox-item>
				</flexbox>
			</div>
			<!--卡片结束-->
			<!--邀请VIP 分享开店大礼包开始-->
			<div class="relative">
				<flexbox :gutter="0">
					<flexbox-item :span="6">
						<div class="">
							<flexbox :gutter="0">
								<flexbox-item :span="4">
									<div class="hint-head text-right">
										<img src="../../assets/ImgThree/left.png" />
									</div>
								</flexbox-item>
								<flexbox-item :span="8">
									<div class="one-line font-glod font-12 padding-left-5">邀请VIP</div>
								</flexbox-item>
							</flexbox>
						</div>
					</flexbox-item>
					<div class="cube"></div>
					<flexbox-item :span="6">
						<div class="">
							<flexbox :gutter="0">
								<flexbox-item :span="4">
									<div class="hint-head text-right">
										<img src="../../assets/ImgThree/left.png" />
									</div>
								</flexbox-item>
								<flexbox-item :span="8">
									<div class="one-line font-glod font-12 padding-left-5">分享开店大礼包</div>
								</flexbox-item>
							</flexbox>
						</div>
					</flexbox-item>
				</flexbox>
			</div>
			<!--邀请VIP 分享开店大礼包结束-->
			<div class="division"></div>
			<group>
				<cell :title="('订单中心')" :value="('查看全部订单')" @click.native="toOrder" is-link></cell>
			</group>
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
				<grid-item @click.native.stop="toFive">
					<img slot="icon" src="../../assets/user/five.png">
					<span class="grid-center">售后</span>
				</grid-item>
			</grid>
			<div class="division"></div>
			<grid>
				<grid-item @click.native.stop="toOne">
					<img slot="icon" src="../../assets/user/one.png">
					<span class="grid-center">地址管理</span>
				</grid-item>
				<grid-item @click.native.stop="toTwo">
					<img slot="icon" src="../../assets/user/two.png">
					<span class="grid-center">VIP管理</span>
				</grid-item>
				<grid-item @click.native.stop="toThree">
					<img slot="icon" src="../../assets/user/three.png">
					<span class="grid-center">业绩管理</span>
				</grid-item>
				<grid-item @click.native.stop="toFive">
					<img slot="icon" src="../../assets/user/five.png">
					<span class="grid-center">联系客服</span>
				</grid-item>
			</grid>
			<div class="division"></div>

			<!--云集课堂开始-->
			<group>
				<cell :title="('云集课堂')" :value="('查看全部课堂')" @click.native="toOrder" is-link></cell>
			</group>
			<!--云集课堂结束-->
			<div class="three-img">
				<flexbox :gutter="2">
					<flexbox-item :span="5">
						<div class="left-img" @click="toMessage(title1)">{{title1}}</div>
					</flexbox-item>
					<flexbox-item :span="5">
						<div class="left-img" @click="toMessage(title1)">{{title1}}</div>
					</flexbox-item>
					<flexbox-item :span="5">
						<div class="left-img" @click="toMessage(title1)">{{title1}}</div>
					</flexbox-item>
					<flexbox-item :span="5">
						<div class="left-img" @click="toMessage(title1)">{{title1}}</div>
					</flexbox-item>
					<flexbox-item :span="5">
						<div class="left-img" @click="toMessage(title1)">{{title1}}</div>
					</flexbox-item>
				</flexbox>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { GridItem, Grid, ViewBox, XHeader, Flexbox, FlexboxItem, Group, Cell } from 'vux'
	export default {
		components: {
			ViewBox,
			XHeader,
			Flexbox,
			FlexboxItem,
			Group,
			Cell,
			GridItem,
			Grid,
		},
		data() {
			return {
				title1: '新人手册',
				title2: '高手进阶',
				title3: '捕手风采'
			}
		},
		methods: {
			// 去提现页面
			toMember() {
				this.$router.push({
					path: "/cash/cash"
				});
			},
			// 去我的礼包（优惠券）页面
			toCoupon() {
				this.$router.push({
					path: "/coupon/coupon"
				});
			},
			// 去店铺管家页面
			toRefill() {
				this.$router.push({
					path: "/housekeeper/housekeeper"
				});
			},
			// 去我的客户页面
			toCull() {
				this.$router.push({
					path: "/customer/customer"
				});
			},
			// 去销售订单页面
			toPick() {
				this.$router.push({
					path: "/saleOrder/saleOrder"
				});
			},
			//点击新人手册,高手进阶捕手风采 进消息列表页面
			toMessage(title1) {
				this.$router.push({
					path: '/message/message',
					name: '/message/message',
					params: {
						title: title1
					}
				})
			},
		},
		mounted() {},
	}
</script>
<style>
	@import url("shopkeeper.css");
	@import url("../../assets/app.css");
</style>