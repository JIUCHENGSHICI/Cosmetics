<template>
	<div class="about">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			会员省钱
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="indemnity-box">
				<div class="head-img">
					<span class="hint">会员省钱  一贵就赔</span>
				</div>
				<div class="introduce">
					<div class="title font-16 font-black">
						一贵就赔规则介绍
					</div>
					<div class="info">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio natus laborum dolorem harum velit doloribus illum veritatis quod assumenda deleniti sunt eaque nihil quos eos perspiciatis fuga magni a. Cupiditate?
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
	@import url("indemnity.css");
	@import url("../../assets/app.css");
</style>