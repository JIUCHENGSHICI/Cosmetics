<template>
	<div class="address-switch">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			地址选择
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<template>
				<div>
					<group>
						<x-address :show.sync="showAddress" @on-hide="logHide" title="请选择地址" v-model="value" raw-value :list="addressData" hide-district></x-address>
					</group>
				</div>
			</template>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Group,
			XAddress,
			XButton,
			Cell
		},
		data() {
			return {
				addressData: ChinaAddressV4Data,
				value: [],
				showAddress: true
			}
		},
		methods: {
			getName(value) {
				return value2name(value, ChinaAddressV4Data)
			},
			logHide(str) {
				var address = this.getName([this.value[0]])
				var address = address.replace("壮族自治区", "");
				var address = address.replace("回族自治区", "");
				var address = address.replace("维吾尔自治区", "");
				var address = address.replace("自治区", "");
				console.log("点击完成后打印", address);
				this.$router.push({
					path: "/index",
					name: '/index',
					params: {
						address: address
					}
				});
			},
		}
	}
</script>
<style>
	@import url("addressSwitch.css");
	@import url("../../assets/app.css");
</style>