<!--提现页面-->
<template>
	<div class="cash">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: ''}">
			<a slot="left"></a>
			提现
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="top-card">
				<div class="cash-point font-white font-14">
					可提现金额（元）
				</div>
				<div class="cash-money font-white font-18 one-line">
					0
				</div>
				<div class="cash-remark font-gray-white font-12 one-line">
					提现将于次月10日前转入您的银行卡
				</div>
			</div>
			<div class="bottom-cell">
				<group class="profit">
					<cell class="font-14" :title="('店铺收益')" :value="('6.08元')"></cell>
				</group>
				<group class="no-border">
					<cell class="font-14" :title="('任务奖励')" :value="('0元')" is-link></cell>
				</group>
				<group class="no-border margin-top-10">
					<cell class="font-14" :title="('已提现金额')" :value="('0元')" is-link></cell>
				</group>
				<group class="no-border margin-top-10">
					<cell class="font-14" :title="('提现信息补全')" :value="('')" is-link></cell>
				</group>
			</div>
			<div class="cash-btn">提现</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Group, Cell } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Group,
			Cell,
		},
		methods: {},
		data() {
			return {}
		}
	}
</script>

<style>
	@import url("cash.css");
	@import url("../../assets/app.css");
</style>