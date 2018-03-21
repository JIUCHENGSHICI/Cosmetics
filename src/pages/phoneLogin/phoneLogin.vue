<template>
	<div class="phone-login">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			手机号登录
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div class="phone-login-box">
				<group>
					<x-input placeholder="请输入手机号" v-model="phone" :max="11" is-type="china-mobile"></x-input>
				</group>
				<flexbox :gutter="5">
					<flexbox-item :span="6.8">
						<div class="">
							<group title="">
								<x-input placeholder="请输入验证码" :max="4" v-model="code"></x-input>
							</group>
						</div>
					</flexbox-item>
					<flexbox-item :span="5">
						<div class="">
							<!--<div class="obtain text-center" @click="obtain">
								{{gain}}{{timeCount}}{{retransmission}}
							</div>-->
							<x-button class="obtain" :disabled='isGetCode' type="default" @click.native="obtain">{{gain}}{{timeCount}}{{retransmission}}</x-button>
						</div>
					</flexbox-item>
				</flexbox>
				<span class="font-14">测试验证码{{success_code}}</span>
				<div class="button">
					<x-button type="default" class="login-btn" @click.native="login">登录</x-button>
				</div>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Group, XInput, Cell, Flexbox, FlexboxItem, XButton } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Group,
			XInput,
			Cell,
			Flexbox,
			FlexboxItem,
			XButton
		},
		data() {
			return {
				phone: '',
				code: '',
				timeCount: '',
				retransmission: '',
				gain: '获取验证码',
				isGetCode: false,
				showBtn: true,
				success_code: ''
			}
		},
		mounted() {
			if(this.phone.length >= 1) {
				this.showBtn = false;
			} else {
				this.showBtn = true;
			}
		},
		watch: {
			showBtn() {
				if(this.phone.length >= 1) {
					console.log("123")
				} else {
					console.log("456")
				}
			}
		},
		methods: {
			//获取验证码
			obtain() {
				var _this = this;
				if(this.phone.length <= 0) {
					this.$vux.toast.show({
						text: "请输入手机号",
						type: "text",
						position: "middle"
					});
					return false;
				}
				if(this.phone.length > 11) {
					this.$vux.toast.show({
						text: "请输入正确手机号",
						type: "text",
						position: "middle"
					});
					return false;
				};
				this.gain = '';
				this.timeCount = 3;
				this.retransmission = 's后重发';
				this.isGetCode = true;
				var interval = setInterval(function(params) {
					_this.timeCount--;
					if(_this.timeCount <= 0) {
						_this.timeCount = '';
						_this.retransmission = '';
						_this.isGetCode = false;
						_this.gain = '获取验证码';
						clearInterval(interval);
					}
				}, 1000)
				this.$post(
					"index/getCode", {
						user_id: this.phone,
					},
					res => {
						console.log(res);
						console.log(res.msg);
						this.success_code = res.msg;
						if(res.res >= 1) {
							var _this = this;
							this.$vux.toast.show({
								text: "发送成功",
								type: "text",
								position: "middle"
							});
						}
						if(res.res < 0) {
							this.$vux.toast.show({
								text: "网络错误,请重试",
								type: "text",
								position: "middle"
							});
							return false;
						}
					}
				);
				//点击获取验证码把手机号提取
			},
			isPhone(str) {
				var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
				return reg.test(str);
				return true;
			},
			login() {
				var phone = this.phone;
				var code = this.code;
				if(phone.length <= 0) {
					this.$vux.toast.show({
						text: "请输入手机号",
						type: "text",
						position: "middle"
					});
					return false;
				}

				//				if(!this.isPhone(phone)) {
				//					this.$vux.toast.show({
				//						text: "请输入正确手机号",
				//						type: "text",
				//						position: "middle"
				//					});
				//					return false;
				//				};
				if(this.phone.length > 11) {
					this.$vux.toast.show({
						text: "请输入正确手机号",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(code.length <= 0) {
					this.$vux.toast.show({
						text: "请输入验证码",
						type: "text",
						position: "middle"
					});
					return false;
				};
				this.$post(
					"index/login", {
						user_id: phone,
						user_code: code
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							var _this = this;
							localStorage.user_id = phone;
							localStorage.token = res.token;
							this.$vux.toast.show({
								text: "登陆成功",
								type: "text",
								position: "middle"
							});
							setTimeout(function() {
								_this.$router.push({
									replace: true,
									path: '/index'
								});
							}, 1000);
							this.$get("user/getUserInfo", {
									field: ["user_name", "user_head", "user_type", "user_weixin", "user_info"]
								},
								_res => {
									console.log("------------", _res);
									if(_res.res >= 1) {
										localStorage.user_info = JSON.stringify(_res.msg);
										return;
									}
									this.$vux.toast.show({
										text: "用户信息获取失败，请重新登录",
										type: "text",
										position: "middle"
									});
								}
							);
						}
						if(res.res < 0) {
							this.$vux.toast.show({
								text: "登录失败,请重试",
								type: "text",
								position: "middle",
								width: '10em'
							});
							return false;
						}
					}
				);
			}
		}
	}
</script>
<style>
	@import url("phoneLogin.css");
	@import url("../../assets/app.css");
</style>