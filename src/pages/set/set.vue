<!--设置页面-->

<template>
	<div class="set">
		<x-header :left-options="{backText: '设置'}">
			<a slot="left"></a>
		</x-header>
		<view-box>
			<group>
				<cell :title="('个人信息')" @click.native="toUserSet" is-link></cell>
			</group>
			<group>
				<cell :title="('收货地址管理')" @click.native="toAddress" is-link></cell>
			</group>
			<group>
				<cell :title="('清除缓存')" :value="cache" @click.native="toClear"></cell>
			</group>
			<group>
				<cell :title="('关于我们')" @click.native="toOur" is-link></cell>
			</group>
			<div class="drop-out" @click="toLogin">
				退出当前账号
			</div>
			<!--清除缓存提示-->
			<toast v-model="clearToast" type="text" text="缓存已清除"></toast>
		</view-box>
	</div>
</template>
<script>
	import {
		Toast,
		XHeader,
		ViewBox,
		Group,
		Cell,
		Confirm,
		TransferDomDirective as TransferDom
	} from "vux";

	export default {
		name: "app",
		directives: {
			TransferDom
		},
		components: {
			XHeader,
			ViewBox,
			Group,
			Cell,
			Confirm,
			Toast
		},
		mounted() {},
		methods: {
			//清除缓存
			toClear() {
				this.clearToast = true;
				this.cache = "";
			},
			//点击去login页
			toLogin() {
				this.$router.push({
					path: "/login/login"
				});
			},
			toAddress() {
				this.$router.push({
					path: "/address/address"
				});
			},
			//  去关于我们页面
			toOur() {
				this.$router.push({
					path: "/about/about"
				});
			},
			//去用户设置页面
			toUserSet() {
				this.$router.push({
					path: "/userSet/userSet"
				});
			}
		},
		data() {
			return {
				//缓存
				cache: 5,
				//清除缓存的提示
				clearToast: false
			};
		}
	};
</script>

<style>
	@import url("set.css");
	@import url("../../assets/app.css");
</style>