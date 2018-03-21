<template>
	<div class="add-address">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			{{title}}
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<group label-width="4.5em" label-margin-right="2em" label-align="left">
				<x-input placeholder="请使用真实姓名" title="收货人" v-model="name"></x-input>
				<x-input placeholder="请输入手机号" title="手机号码" v-model="phone"></x-input>
				<x-address title="所在地区" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
				<x-textarea title="详细地址" v-model="detailed" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
			</group>
			<group class="margin-top-10" label-width="7em" label-margin-right="2em" label-align="justify">
				<x-switch title="设置为默认地址" v-model="isDefault"></x-switch>
			</group>
			<x-button v-if="this.$route.params['openEdit'] == '1'" @click.native="editInfo" class="margin-top-10" type="primary" action-type="button">编辑</x-button>
			<x-button v-else @click.native="postInfo" class="margin-top-10" type="primary" action-type="button">保存</x-button>
			<toast v-model="showToast">提交成功</toast>
		</view-box>
	</div>
</template>

<script>
	import {
		XButton,
		XHeader,
		ViewBox,
		Group,
		XInput,
		PopupPicker,
		ChinaAddressData,
		XAddress,
		XTextarea,
		XSwitch,
		Value2nameFilter as value2name,
		ChinaAddressV4Data,
		Toast
	} from "vux";
	export default {
		components: {
			Group,
			XInput,
			PopupPicker,
			XAddress,
			XTextarea,
			XSwitch,
			XHeader,
			ViewBox,
			XButton,
			Toast
		},
		data() {
			return {
				title: '新增收货地址',
				addressData: ChinaAddressData,
				addressValue: [],
				name: "",
				phone: "",
				detailed: "",
				isDefault: false,
				show: false,
				showToast: false,
			};
		},
		mounted() {
			var _this = this;
			if(this.$route.params["openEdit"] == "1") {
				this.title = '编辑地址';
				this.isShow = false;
				this.isHide = true;
				var address_id = this.$route.params["address_id"];
				var name = this.$route.params["name"];
				var phone = this.$route.params["phone"];
				var info = this.$route.params["info"];
				var region = this.$route.params["region"];
				this.name = name;
				this.phone = phone;
				this.detailed = info;
			}
		},
		methods: {
			getName(value) {
				return value2name(value, ChinaAddressV4Data)
			},
			//新增的保存地址
			postInfo() {
				//名字
				var name = this.name;
				//手机号
				var phone = this.phone;
				//所在地区
				var address = this.getName(this.addressValue);
				//详细地址
				var detailed = address + this.detailed;
				if(name.length <= 0) {
					this.$vux.toast.show({
						text: "请输入姓名",
						type: "text",
						position: "middle"
					});
					return false;
				}
				if(phone.length <= 0) {
					this.$vux.toast.show({
						text: "请输入手机号",
						type: "text",
						position: "middle"
					});
					return false;
				}
				if(!this.isPhone(phone)) {
					this.$vux.toast.show({
						text: "请输入正确手机号",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(address.length <= 0) {
					this.$vux.toast.show({
						text: "请选择地址",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(this.detailed.length <= 0) {
					this.$vux.toast.show({
						text: "请输入详细地址",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(this.isDefault == true) {
					var is_default = "1"
				} else {
					var is_default = "0"
				}
				this.$post(
					"address/add", {
						add: {
							people: name,
							phone: phone,
							region: address,
							info: detailed,
							is_default: is_default
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.showToast = true;
							var _this = this;
							setTimeout(function() {
								_this.$router.back(-1);
							}, 1000)
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
			//编辑的保存地址
			editInfo() {
				if(this.$route.params["openEdit"] == "1") {
					var address_id = this.$route.params["address_id"];
				}
				//名字
				var name = this.name;
				//手机号
				var phone = this.phone;
				//所在地区
				var address = this.getName(this.addressValue);
				//详细地址
				var detailed = address + this.detailed;
				if(name.length <= 0) {
					this.$vux.toast.show({
						text: "请输入姓名",
						type: "text",
						position: "middle"
					});
					return false;
				}
				if(phone.length <= 0) {
					this.$vux.toast.show({
						text: "请输入手机号",
						type: "text",
						position: "middle"
					});
					return false;
				}
				if(!this.isPhone(phone)) {
					this.$vux.toast.show({
						text: "请输入正确手机号",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(address.length <= 0) {
					this.$vux.toast.show({
						text: "请选择地址",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(this.detailed.length <= 0) {
					this.$vux.toast.show({
						text: "请输入详细地址",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(this.isDefault == true) {
					var is_default = "1"
				} else {
					var is_default = "0"
				}
				this.$post(
					"address/save", {
						save: {
							people: name,
							phone: phone,
							region: address,
							info: detailed,
							is_default: is_default
						},
						address_id: address_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.showToast = true;
							var _this = this;
							setTimeout(function() {
								_this.$router.back(-1);
							}, 1000)
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
			//手机号正则
			isPhone(str) {
				var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
				return reg.test(str);
				return true;
			},
		}
	};
</script>
<style>
	@import url("addAddress.css");
	@import url("../../assets/app.css");
</style>