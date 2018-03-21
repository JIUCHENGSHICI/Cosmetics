<!--店铺管家-->
<template>
	<div class="housekeeper">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: ''}">
			店铺管家
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="housekeeper-box">
				<div class="housekeeper-card">
					<div class="housekeeper-head">
						<img src="../../assets/pig1.jpg" />
					</div>
					<div class="housekeeper-name">
						<span class="border-bottom">化妆品</span>
					</div>
					<flexbox :gutter="0" class="housekeeper-info">
						<flexbox-item :span="6">
							<div class="one-line text-center font-14">
								微信：qd80881234
							</div>
						</flexbox-item>
						<flexbox-item :span="6">
							<div class="one-line text-center font-14">
								ID：12735687091
							</div>
						</flexbox-item>
					</flexbox>
				</div>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { ViewBox, XHeader, Flexbox, FlexboxItem } from 'vux'
	export default {
		components: {
			ViewBox,
			XHeader,
			Flexbox,
			FlexboxItem
		},
		data() {
			return {

			}
		},
		methods: {}
	}
</script>

<style>
	@import url("housekeeper.css");
	@import url("../../assets/app.css");
</style>