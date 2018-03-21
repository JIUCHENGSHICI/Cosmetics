<!--个人信息设置页面-->
<template>
	<div class="user-set">
		<!--,preventGoBack:'true'-->
		<!--@on-click-back="back"-->
		<x-header :left-options="{backText: '个人信息'}">
			<a slot="left"></a>
			<a slot="right"></a>
		</x-header>
		<view-box>
			<group>
				<!--<cell :border-intent="false" :title="('头像')" :value="head" is-link class="user-set-head" @click.native="toSetHead">
					<img src="../../assets/pig1.jpg" />
				</cell>-->
				<flexbox :gutter="0">
					<flexbox-item :span="2">
						<div class="user-set-title">
							头像
						</div>
					</flexbox-item>
					<flexbox-item :span="9">
						<div class="user-set-up">
							<el-upload v-show="is_null_head" class="avatar-uploader" :data="upLoadData" :action="this.$serverUpFile" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
								<i v-else class="fa fa-plus-square"></i>
							</el-upload>
							<!--<img v-show="is_head" class="float-right" :src="user_head" alt="" />-->
						</div>
					</flexbox-item>
					<flexbox-item :span="1">
						<div class="user-set-icon text-right">
							<i class="fa fa-angle-right"></i>
						</div>
					</flexbox-item>
				</flexbox>
				<cell :border-intent="false" :title="('昵称')" :value="nickName" is-link @click.native="toSetNickName"></cell>
				<cell :border-intent="false" :title="('微信号')" :value="wxName" is-link @click.native="toSetWx"></cell>
				<cell :border-intent="false" :title="('个性签名')" :value="signName" is-link @click.native="toSetSign"></cell>
			</group>
			<br/>
			<group>
				<cell :border-intent="false" :title="('ID')" :value="IDName"></cell>
				<cell :border-intent="false" :title="('累计消费')" :value="money"></cell>
			</group>
			<!--修改昵称的弹框开始-->
			<div v-transfer-dom>
				<confirm v-model="nameShow" show-input :title="('修改昵称')" :input-attrs="{type: 'text'}" @on-confirm="onName">
				</confirm>
			</div>
			<!--修改昵称的弹框结束-->
			<!--修改微信号的弹框开始-->
			<div v-transfer-dom>
				<confirm v-model="wxShow" show-input :title="('修改微信号')" :input-attrs="{type: 'text'}" @on-confirm="onWx">
				</confirm>
			</div>
			<!--设置个性签名的弹框开始-->
			<div v-transfer-dom>
				<confirm v-model="signShow" show-input :title="('设置个性签名')" :input-attrs="{type: 'text'}" @on-confirm="onSign">
				</confirm>
			</div>
			<!--设置个性签名的弹框结束-->
			<toast v-model="nameToast" type="text" text="限2-16个字符"></toast>
			<toast v-model="success" type="text" text="修改成功"></toast>
			<toast v-model="fail" type="text" text="网络错误"></toast>
			<toast v-model="wxToast" type="text" text="最多28个字符"></toast>
			<toast v-model="signToast" type="text" text="最多26个字符"></toast>
		</view-box>
	</div>
</template>
<script>
	import { Flexbox, FlexboxItem, Toast, XHeader, ViewBox, Group, Cell, Confirm, TransferDomDirective as TransferDom } from "vux"

	import Vue from 'vue';
	import { Upload, Button, Dialog } from 'element-ui';
	Vue.use(Upload);
	Vue.use(Button);
	Vue.use(Dialog);
	import Uploader from 'vux-uploader'
	export default {
		name: 'app',
		directives: {
			TransferDom
		},
		components: {
			XHeader,
			ViewBox,
			Group,
			Cell,
			Confirm,
			Toast,
			Uploader,
			Flexbox,
			FlexboxItem,
		},
		data() {
			return {
				user_head: '',
				is_null_head: true,
				is_head: true,
				upLoadData: {
					user_id: localStorage.user_id,
					token: localStorage.token
				},
				head_img: [],
				imageUrl: '',
				varmax: 1,
				images: [],
				uploadUrl: 'use/upFile',
				autoUpload: true,
				//头像
				head: '',
				//昵称
				nickName: '',
				//微信名
				wxName: '',
				//个性签名
				signName: '',
				//ID名字
				IDName: '15065',
				//累计消费
				money: '0' + '元',
				//修改名字的弹框
				nameShow: false,
				//修改微信名字的弹框
				wxShow: false,
				//个性签名设置的弹框
				signShow: false,
				//名字格式不正确提示2-16
				nameToast: false,
				//修改成功提示
				success: false,
				//网络错误的提示
				fail: false,
				//微信长度提示---28
				wxToast: false,
				//个性签名的提示
				signToast: false
			};
		},
		mounted() {
			this.$get("user/getUserInfo", {
					field: ["user_name", "user_head", "user_info", "user_weixin"]
				},
				_res => {
					this.nickName = _res.msg.user_name;
					this.wxName = _res.msg.user_weixin;
					this.signName = _res.msg.user_info;
					console.log("ppp", _res);
					var user_info = JSON.parse(localStorage.user_info);
					this.user_head = this.$getUrl(user_info.user_head);
					if(_res.res >= 1) {
						localStorage.user_info = JSON.stringify(_res.msg);
						return;
					}
				}
			);
			var user_info = JSON.parse(localStorage.user_info);
			var nickName = user_info.user_name;
			var wxName = user_info.user_weixin;
			var signName = user_info.user_info;
			this.nickName = nickName;
			this.wxName = wxName;
			this.signName = signName;
		},
		methods: {
			handleAvatarSuccess(res, file) {
				console.log("头像res", res.msg.src);
				//				var user_info = JSON.parse(localStorage.user_info);
				//				user_info.user_head = res.msg.src;
				this.$post(
					"user/save", {
						save: {
							user_head: res.msg.src,
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							console.log("===", res);
							var user_info = JSON.parse(localStorage.user_info);
							user_info.user_head = res.msg.src;
							this.$vux.toast.show({
								text: "上传成功",
								type: "text",
								position: "middle"
							});
						}
						if(res < 0) {
							this.$vux.toast.show({
								text: "网络错误,请重试",
								type: "text",
								position: "middle"
							});
						}
					}
				);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;
				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			toSetHead() {
				console.log("去设置用户头像");
				//设置头像的ajax
				/*
				this.$post(
					"user/save", {
						save: {
							user_name: msg,
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.$vux.toast.show({
								text: "修改成功",
								type: "text",
								position: "middle"
							});
						}
						if(res < 0) {
							this.$vux.toast.show({
								text: "网络错误,请重试",
								type: "text",
								position: "middle"
							});
						}

					}
				);
				*/
			},
			//点击去设置昵称
			toSetNickName() {
				console.log("去设置昵称");
				this.nameShow = true;
			},
			//设置昵称
			onName(msg) {
				var _this = this;
				if(msg.length < 2 || msg.length > 16) {
					_this.nameToast = true;
					return false;
				}
				//设置昵称的ajax
				this.$post(
					"user/save", {
						save: {
							user_name: msg,
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							_this.nickName = msg;
							localStorage.nickName = msg;
							var user_info = JSON.parse(localStorage.user_info);
							user_info.user_name = msg;
							console.log("哈哈哈", localStorage.user_info)
							this.$vux.toast.show({
								text: "修改成功",
								type: "text",
								position: "middle"
							});
						}
						if(res < 0) {
							this.$vux.toast.show({
								text: "网络错误,请重试",
								type: "text",
								position: "middle"
							});
						}
					}
				);
			},
			//			点击去设置微信名
			toSetWx() {
				this.wxShow = true;
			},
			//			修改微信名称
			onWx(msg) {
				var _this = this;
				if(msg.length > 28) {
					_this.wxToast = true;
					return false;
				}
				this.$post(
					"user/save", {
						save: {
							user_weixin: msg,
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							_this.wxName = msg;
							localStorage.wxName = msg;
							localStorage.user_info.user_weixin = msg;
							this.$vux.toast.show({
								text: "修改成功",
								type: "text",
								position: "middle"
							});
						}
						if(res < 0) {
							this.$vux.toast.show({
								text: "网络错误,请重试",
								type: "text",
								position: "middle"
							});
						}

					}
				);
			},
			//点击去设置个性签名
			toSetSign() {
				this.signShow = true;
			},
			//设置个性签名
			onSign(msg) {
				var _this = this;
				if(msg.length > 26) {
					_this.signToast = true;
					return false;
				}
				this.$post(
					"user/save", {
						save: {
							user_info: msg,
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							_this.signName = msg;
							localStorage.signName = msg;
							localStorage.user_info.user_info = msg;
							this.$vux.toast.show({
								text: "修改成功",
								type: "text",
								position: "middle"
							});
						}
						if(res < 0) {
							this.$vux.toast.show({
								text: "网络错误,请重试",
								type: "text",
								position: "middle"
							});
						}

					}
				);
			},
			//返回上一页
			back() {}
		},
	};
</script>

<style>
	@import url("userSet.css");
	@import url("../../assets/app.css");
</style>