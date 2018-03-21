<template>
	<div class="tel">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			帮助与客服
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<a href="tel:13864291005">
				<div class="tel-box">
					<flexbox :gutter="0">
						<flexbox-item :span="3">
							<div class="hint">
								客服电话
							</div>
						</flexbox-item>
						<flexbox-item :span="8">
							<div class="phone text-right">
								{{phone}}
							</div>
						</flexbox-item>
						<flexbox-item :span="1">
							<div class=" text-right">
								<i class="fa fa-angle-right"></i>
							</div>
						</flexbox-item>
					</flexbox>
				</div>
			</a>
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
				phone: 13864291005
			}
		}
	}
</script>
<style>
	@import url("tel.css");
	@import url("../../assets/app.css");
</style>