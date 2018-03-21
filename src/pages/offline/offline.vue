<template>
	<div class="offline">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			VIP列表
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<swiper></swiper>
			<swipeout>
				<swipeout-item v-for="(item,index) in list" transition-mode="follow">
					<div slot="right-menu">
						<swipeout-button type="warn" @click.native="del(item,index,list)">删除</swipeout-button>
					</div>
					<div slot="content">
						<div class="offline-item">
							<flexbox :gutter="0">
								<flexbox-item :span="2">
									<div class="head">
										<img src="../../assets/user.png" />
									</div>
								</flexbox-item>
								<flexbox-item :span="10">
									<div class="phone font-14 one-line">手机号码：{{item.phone}}</div>
									<div class="time font-12 font-gray one-line">注册时间：{{item.time}}</div>
								</flexbox-item>
							</flexbox>
						</div>
					</div>
				</swipeout-item>
			</swipeout>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Flexbox, FlexboxItem, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
	//	轮播图组件
	import swiper from "../../components/swiper/swiper.vue";
	export default {
		name: "app",
		components: {
			XHeader,
			ViewBox,
			swiper,
			Flexbox,
			FlexboxItem,
			Swipeout,
			SwipeoutItem,
			SwipeoutButton
		},
		data() {
			return {
				list: [{
					head: '',
					phone: '13864291005',
					time: '2017.02.01'
				}, {
					head: '',
					phone: '15065480632',
					time: '2017.08.05'
				}, {
					head: '',
					phone: '17621879643',
					time: '2017.07.12'
				}, {
					head: '',
					phone: '14544447999',
					time: '2017.07.01'
				}, ]
			}
		},
		methods: {
			del(item, index, list) {
				this.$vux.confirm.show({
					title: '确定要删除吗？',
					// 组件除show外的属性
					onCancel() {},
					onConfirm() {
						list.splice(index, 1);
					}
				})
			}
		}
	}
</script>
<style>
	@import url("offline.css");
	@import url("../../assets/app.css");
</style>