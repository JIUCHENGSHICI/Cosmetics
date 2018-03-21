<template>
	<div class="login">
		<!--顶部导航栏开始-->
		<x-header :left-options="{showBack: false}">
			登录
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="login-box">
				<div class="top-img-box text-center">
					<img src="../../../build/logo.png" />
				</div>
				<div class="text-center font-16 font-white font-weight">
					DLDK SLDSDFD
				</div>
				<div class="login-bottom text-center">
					<div class="font-12 font-white font-white">
						登录同步微信账号数据
					</div>
					<div class="wx-login font-16 font-white" @click="wxLogin">
						<i class="fa fa-wechat"></i> 微信授权登录
					</div>
					<div class="font-14 font-white" @click="toPhoneLogin">
						手机号登录
						<i class="fa fa-angle-right"></i>
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
		},
		methods: {
			//跳转手机号登陆
			toPhoneLogin() {
				this.$router.push({
					path: "/phoneLogin/phoneLogin",
				});
			},
			//跳转微信登陆
			wxLogin() {
				console.log("去微信登陆")
				//				this.$router.push({
				//					path: "/phoneLogin/phoneLogin",
				//				});
			}
		}
	}
</script>
<style>
	@import url("login.css");
	@import url("../../assets/app.css");
</style>