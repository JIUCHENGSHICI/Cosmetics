<template>
	<div class="coupon">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			优惠券
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="coupon-box">
				<div class="coupon-item" v-for="(item,index) in couponList">
					<flexbox :gutter="0">
						<flexbox-item :span="2.5">
							<div class="coupon-money font-red text-center">
								￥
								<span class="font-red font-25 font-weight">{{item.money}}</span>
							</div>
						</flexbox-item>
						<flexbox-item :span="7">
							<div class="coupon-content">
								<div class="coupon-title font-weight font-16 one-line font-weight">
									{{item.title}}
								</div>
								<div class="coupon-info font-12 font-gray">
									<ul>
										<li class="one-line">满{{item.full}}元可用</li>
										<li class="one-line">{{item.start_time}}至{{item.end_time}}</li>
										<li class="one-line">仅限于在线支付</li>
										<li class="one-line">仅用于{{item.use}}</li>
									</ul>
								</div>
							</div>
						</flexbox-item>
						<flexbox-item :span="2.5">
							<div class="font-12 text-center font-red">
								<span class="coupon-to-shop">进店使用</span>
							</div>
						</flexbox-item>
					</flexbox>
				</div>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Flexbox, FlexboxItem } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Flexbox,
			FlexboxItem
		},
		data() {
			return {
				couponList: [{
					money: 5,
					title: '案例的骄傲的垃圾大了肯德基啊',
					full: 78,
					start_time: '2017-01-02',
					end_time: '2018-02-03',
					use: '大宗11111'
				}, {
					money: 15,
					title: 'djdhkdajdalkdjaldjaldja',
					full: 258,
					start_time: '2017-07-02',
					end_time: '2018-08-03',
					use: '没打开来得及澳康达'
				}, {
					money: 78,
					title: '就老是打聚少离多坚实的洛杉矶代理商',
					full: 500,
					start_time: '2016-01-02',
					end_time: '2018-02-03',
					use: '你的客户打开'
				}]
			}
		}
	}
</script>
<style>
	@import url("coupon.css");
	@import url("../../assets/app.css");
</style>