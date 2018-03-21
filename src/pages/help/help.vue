<!--帮助与客服-->
<template>
	<div class="help">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: ''}">
			帮助与客服
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<grid>
				<grid-item>
					<img slot="icon" src="../../assets/help/one.png">
					<span class="grid-center">自助退款</span>
				</grid-item>
				<grid-item>
					<img slot="icon" src="../../assets/help/two.png">
					<span class="grid-center">退款进度</span>
				</grid-item>
				<grid-item>
					<img slot="icon" src="../../assets/help/three.png">
					<span class="grid-center">问题反馈</span>
				</grid-item>
				<grid-item>
					<!--<img slot="icon" src="../../assets/shopkeeper/four.png">-->
					<span class="grid-center"></span>
				</grid-item>
			</grid>
			<flexbox :gutter="0" class="point-card">
				<flexbox-item :span="3">
					<div class="left">
						<img src="../../assets/help/four.png" />
						<div class="left-title font-14 one-line">
							购物下单
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="9">
					<div class="right">
						<div class="right-top font-14 one-line">多笔订单能否一起发货</div>
						<div class="right-bottom font-14 one-line">为什么要提供身份证信息</div>
					</div>
				</flexbox-item>
			</flexbox>

			<flexbox :gutter="0" class="point-card">
				<flexbox-item :span="3">
					<div class="left">
						<img src="../../assets/help/six.png" />
						<div class="left-title font-14 one-line">
							物流异常
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="9">
					<div class="right">
						<div class="right-top font-14 one-line">物流显示拍照签收，但商品没收到</div>
						<div class="right-bottom font-14 one-line">为何运输途中要我缴费</div>
					</div>
				</flexbox-item>
			</flexbox>

			<flexbox :gutter="0" class="point-card">
				<flexbox-item :span="3">
					<div class="left">
						<img src="../../assets/help/seven.png" />
						<div class="left-title font-14 one-line">
							售后问题
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="9">
					<div class="right">
						<div class="right-top font-14 one-line">为何拒绝我的售后申请</div>
						<div class="right-bottom font-14 one-line">退款金额 怎么计算</div>
					</div>
				</flexbox-item>
			</flexbox>
			<flexbox :gutter="0" class="point-card">
				<flexbox-item :span="3">
					<div class="left">
						<img src="../../assets/help/eight.png" />
						<div class="left-title font-14 one-line">
							其他问题
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="9">
					<div class="right">
						<div class="right-top font-14 one-line">如何获取优惠券</div>
						<div class="right-bottom font-14 one-line">我可以多张优惠券一起使用吗</div>
					</div>
				</flexbox-item>
			</flexbox>
			<flexbox :gutter="0" class="point-card">
				<flexbox-item :span="4">
					<div class="bottom-box">
						<flexbox :gutter="0">
							<flexbox-item :span="4">
								<div class="bottom-img">
									<img src="../../assets/help/nine.png" />
								</div>
							</flexbox-item>
							<flexbox-item :span="8" class="font-14">
								在线客服
							</flexbox-item>
						</flexbox>
					</div>
				</flexbox-item>
				<flexbox-item :span="4">
					<div class="bottom-box">
						<flexbox :gutter="0">
							<flexbox-item :span="4">
								<div class="bottom-img">
									<img src="../../assets/help/ten.png" />
								</div>
							</flexbox-item>
							<flexbox-item :span="8" class="font-14">
								客服热线
							</flexbox-item>
						</flexbox>
					</div>
				</flexbox-item>
				<flexbox-item :span="4">
					<div class="bottom-box">
						<div class="one-line font-14 text-center">
							8:30-24:00
						</div>
						<div class="one-line font-14 text-center">
							客服服务时间
						</div>
					</div>
				</flexbox-item>
			</flexbox>
		</view-box>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem, ViewBox, XHeader, Grid, GridItem } from 'vux'
	export default {
		components: {
			Flexbox,
			FlexboxItem,
			ViewBox,
			XHeader,
			Grid,
			GridItem
		},
		data() {
			return {

			}
		},
		methods: {}
	}
</script>

<style scoped>
	@import url("help.css");
	@import url("../../assets/app.css");
</style>