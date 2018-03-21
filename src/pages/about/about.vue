<template>
	<div class="about">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			关于我们
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="about-box">
				<div class="about-panel"></div>
				<div class="about-top">
					<div class="about-img">
						<img src="../../../build/logo.png" />
					</div>
					<div class="about-english-name font-14">
						HUA ZHUAG PIN
					</div>
					<div class="about-china-name font-18 font-weight">
						化妆品
					</div>
				</div>
				<div class="about-bottom">
					<div class="padding-bottom-10 text-center font-16">
						检查新版本
					</div>
					<div class="padding-bottom-10 text-center font-14">
						V3.1.0
					</div>
					<div class="text-center font-12">
						Copyright&copy;2018 WisdomWorks Co.,Ltd
					</div>
					<div class="padding-bottom-10 text-center font-12">
						All Right Reserved
					</div>
				</div>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox
		},
		data() {
			return {}
		}
	}
</script>
<style>
	@import url("about.css");
	@import url("../../assets/app.css");
</style>