<!--商品详情页面-->
<template>
	<div id="postOrder">

		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			提交订单
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<!--load层开始-->
			<div>
				<loading :show="show"></loading>
			</div>
			<!--load层结束-->
			<div :class="['addresss']" @click="isShowAddressList=true">

				<div v-if="isAddressEmpty" class="addresss-empty-info">
					<x-icon type="ios-plus-empty" size="30"></x-icon>
					<span>选择收货地址</span>
					<div class="float-right">
						<x-icon type="ios-arrow-right" size="30"></x-icon>
					</div>
				</div>
				<div v-if="!isAddressEmpty" class="address-info">
					<div style="width:90%;display: inline-block;">
						<div>
							<span class="address-people">
								收货人：{{defaultAddress.people}}
							</span>
							<span class="float-right">{{defaultAddress.phone}}</span>
						</div>
						<div class="one-line">{{defaultAddress.info}}</div>
					</div>

					<div style="width:10%;display: inline-block;fill:#aaa" class="text-right">

						<x-icon type="ios-arrow-right" size="30"></x-icon>

					</div>

				</div>

			</div>

			<div class="order-goods-list">
				<div class="order-goods-item">

					<div class="goods-info cell" v-for="(item,index) in goods_list">
						<flexbox :gutter="0">
							<flexbox-item :span="3">
								<img :src="$getUrl(item.img_list[0].src)" class="goods-head-img" alt="">
							</flexbox-item>
							<flexbox-item :span="7">
								<div class="goods-title two-line">
									{{item.goods_title}}
								</div>
							</flexbox-item>
							<flexbox-item :span="2">
								<div class="float-right text-right">
									<div class="goods-money">￥{{item.user_spec.money}}</div>
									<div class="goods-count">x{{item.goods_count}}</div>
								</div>
							</flexbox-item>
						</flexbox>

					</div>

					<div class="cell">
						发货方式：
						<span class="float-right">快递:25元</span>
					</div>
					<div class="cell">
						订单总计：
						<span class="float-right">￥{{total}}</span>
					</div>

				</div>
			</div>
			<!--优惠减免开始-->
			<div class="discount" @click="toCoupon">
				<flexbox :gutter="0">
					<flexbox-item :span="2">
						<div class="font-14">优惠券</div>
					</flexbox-item>
					<flexbox-item :span="5">
						<div class="font-12 font-gray">适用优惠券商品254元</div>
					</flexbox-item>
					<flexbox-item :span="4">
						<div class="font-12 font-gray text-right">暂无适用优惠券</div>
					</flexbox-item>
					<flexbox-item :span="1">
						<div class="font-12 font-gray text-center">
							<i class="fa fa-angle-right"></i>
						</div>
					</flexbox-item>
				</flexbox>
			</div>
			<!--优惠减免结束-->
			<!-- 支付方式 -->

			<div class="cell" style="border-top:solid 1px #ddd">
				<span>支付方式</span>
				<span class="float-right">{{payMethod}}</span>
			</div>
			<group title="选择支付方式">
				<radio :options="payMethodList" v-model="payMethod"></radio>
			</group>

		</view-box>

		<!-- 收货地址列表 -->
		<popup v-model="isShowAddressList">

			<div class="address-title text-center">
				<span class="address-title-item title">选择收货地址</span>
				<span class="close address-title-item" @click="isShowAddressList=false">
					<x-icon type="ios-close-empty" size="30"></x-icon>
				</span>
			</div>

			<div class="address-list">
				<div class="addresss-empty-icon text-center text-info" style="padding:10px 0" v-if="addressList.length<=0">
					没有收货地址，请添加一个地址。
				</div>
				<div class="address-list-item" :key="item.address_id" v-for="(item,index) in addressList" @click="selectAddress(item)">
					<div class="address-info">
						<div class="address-info-item">
							<span class="people">{{item.people}}</span>
							<span class="phone">{{item.phone}}</span>
						</div>
						<div class="address-info-item">
							<span class="location">{{item.info}}</span>
						</div>
					</div>
					<div class="tool">
						<div class="tool-item" @click.stop="edit(item,index,addressList)">
							<i class="fa fa-edit"></i> 编辑
						</div>
						<div class="tool-item" @click.stop="delAddress(item,index,addressList)">
							<i class="fa fa-trash-o"></i> 删除
						</div>
					</div>
					<div class="select" v-if="item.isActive">
						<i class="fa fa-check icon"></i>
					</div>
					<div class="is-default" v-if="item.is_default==1">默认</div>
				</div>
				<div class="address-add" @click="isShowAdd_Address=true">新增收货地址</div>

			</div>

		</popup>

		<!-- 新增收货地址 -->
		<popup v-model="isShowAdd_Address">

			<div class="add-address-panel">
				<!-- 姓名 -->
				<group>
					<x-input title="姓名" placeholder="(必填)" required v-model="editAddress.people"></x-input>
					<!-- 电话 -->
					<x-input title="联系电话" placeholder="(必填)" required v-model="editAddress.phone"></x-input>
					<!-- 省市区 -->
				</group>

				<group>
					<x-address title="选择地址" raw-value v-model="editAddress.location" :list="addressData"></x-address>
					<!-- 详细地址 -->
					<x-textarea title="详细地址" required placeholder="(必填)请填写详细地址" :max="255" v-model="editAddress.location_info" :rows="3"></x-textarea>
				</group>

				<group>
					<!-- 设为默认 -->
					<!--<x-switch title="设为默认收货地址" v-model="editAddress.is_default"></x-switch>-->
				</group>
				<div class="save-address">
					<x-button plain type="primary" @click.native="saveAddress(editAddress)" style="color:#000;border-color:#000;width:80%;margin-top:10px;">保存</x-button>
				</div>
			</div>

		</popup>

		<div class="fix-btn-box">

			<flexbox :gutter="0">

				<flexbox-item :span="12" class="text-right">
					<span class="total">合计：￥{{total}}</span>
					<div class="go-btn" @click="goToPayment()">去付款</div>
				</flexbox-item>

			</flexbox>

		</div>
	</div>
</template>

<script>
	import {
		XHeader,
		ViewBox,
		FlexboxItem,
		Flexbox,
		Radio,
		Group,
		Popup,
		XInput,
		XSwitch,
		XAddress,
		XTextarea,
		XButton,
		Loading,
		ChinaAddressV4Data,
		Value2nameFilter as value2name,
	} from "vux";

	import $ from "jquery";

	export default {
		name: "postOrder",
		components: {
			XHeader,
			ViewBox,
			FlexboxItem,
			Flexbox,
			Radio,
			Group,
			Popup,
			XInput,
			XSwitch,
			XAddress,
			XTextarea,
			XButton,
			Loading
		},
		data() {
			return {
				//load层
				show: false,
				//是否显示收货列表
				isShowAddressList: false,
				//是否显示 新增 or 编辑 收货地址面板
				isShowAdd_Address: false,
				//地址数据
				addressData: ChinaAddressV4Data,
				//新的收货地址信息
				editAddress: {
					//地址的id
					address_id: "",
					//联系人姓名
					people: "",
					//联系人手机号
					phone: "",
					//地址的数组
					location: [],
					//填写的详细信息
					location_info: "",
					//是否设置为默认项
					is_default: false
				},
				//商品列表
				goods_list: [],
				//支付方式列表
				payMethodList: ["在线支付", "微信"],
				//当前支付方式
				payMethod: "在线支付",
				//收货地址列表
				addressList: [],
				//默认 & 当前选中的收货地址列表
				defaultAddress: null
			};
		},

		methods: {
			//跳转优惠券页面
			toCoupon() {
				this.$router.push({
					path: "/coupon/coupon",
				});
			},
			//去支付
			goToPayment() {
				// 提交订单，这里开始支付。
				//组装订单
				//判断有没有选择收货地址：
				//				if(!this.defaultAddress) {
				//					this.$vux.toast.show({
				//						text: "请选择一个收货地址！",
				//						type: "text",
				//						position: "middle",
				//						width: "12em"
				//					});
				//					return;
				//				}
				var bag_id = [];
				for(var i = 0; i < this.goods_list.length; i++) {
					var item = this.goods_list[i];
					bag_id.push(
						item.bag_id
					)
				}
				console.log(bag_id);
				//load层
				this.show = true;
				var address_id = this.defaultAddress.address_id;
				//‘提交订单数据’ ajax请求开始
				this.$post(
					"order/add", {
						bag_id: bag_id,
						address_id: address_id
						//address: this.defaultAddress
					},
					res => {
						console.log(res);
						this.show = false;
						if(res = 1) {
							this.$vux.toast.show({
								text: "提交成功",
								type: "text",
								position: "middle"
							});
						}
						if(res != 1) {
							this.$vux.toast.show({
								text: "网络错误",
								type: "text",
								position: "middle"
							});
						}

					}
				);
				//‘提交订单数据’ ajax请求结束
				//				var goods_list = [];
				//				for(let i = 0; i < this.goods_list.length; i++) {
				//					const item = this.goods_list[i];
				//					goods_list.push({
				//						goods_id: item.goods_id,
				//						goods_count: item.goods_count
				//					});
				//				}
				//
				//				var order = {
				//					goods_list: goods_list,
				//					address: this.defaultAddress
				//				};
				//				console.log(order);
			},
			//删除地址
			update() {
				//获取收货地址的列表
				this.$post(
					"address/getList", {},
					res => {
						console.log(res);
						this.addressList = res.msg;
					}
				);
			},
			delAddress(item, index, list) {
				/*
				if(confirm("确定删除吗？", "提示")) {
					console.log("删除");
					list.splice(index, 1);
					if(item === this.defaultAddress) {
						this.defaultAddress = {};
					}
				}
				*/
				this.$post("address/del", {
						address_id: item.address_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							list.splice(index, 1);
							this.$vux.toast.show({
								text: "删除成功",
								type: "text",
								position: "middle"
							});
						}
						if(res.res < 1) {
							this.$vux.toast.show({
								text: "删除失败",
								type: "text",
								position: "middle"
							});
						}

					})
			},
			//编辑地址
			edit(item, index, list) {
				var address_id = item.address_id;
				var name = item.people;
				var phone = item.phone;
				var info = item.info;
				var region = item.region;
				this.$router.push({
					path: "/addAddress/addAddress",
					name: '/addAddress/addAddress',
					params: {
						openEdit: "1",
						address_id: address_id,
						name: name,
						phone: phone,
						info: info,
						region: region
					}
				});

			},
			//选择一个地址
			selectAddress(item) {
				console.log("选择的", item)
				for(let i = 0; i < this.addressList.length; i++) {
					this.addressList[i].isActive = false;
				}
				var address_id = item.address_id
				item.isActive = true;
				this.defaultAddress = item;
			},
			getName(value) {
				return value2name(value, ChinaAddressV4Data)
			},
			//手机号正则
			isPhone(str) {
				var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
				return reg.test(str);
				return true;
			},
			//保存 ro 新增 收货地址
			saveAddress(editAddress) {
				var name = this.editAddress.people;
				var phone = this.editAddress.phone;
				var address = this.getName(this.editAddress.location);
				var info = address + this.editAddress.location_info;
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
				if(this.editAddress.location_info.length <= 0) {
					this.$vux.toast.show({
						text: "请输入详细地址",
						type: "text",
						position: "middle"
					});
					return false;
				};
				if(this.editAddress.is_default == true) {
					var is_default = "1"
				} else {
					var is_default = "0"
				}
				//ajax提交地址信息
				this.$post(
					"address/add", {
						add: {
							people: name,
							phone: phone,
							region: address,
							info: info,
							is_default: is_default
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							this.$vux.toast.show({
								text: "保存成功",
								type: "text",
								position: "middle"
							});
							//保存成功之后 模态框消失
							this.isShowAdd_Address = false;
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
				//判断用户输入是否正确
				//判断姓名是否为空

				//				if(editAddress.people.length <= 0) {
				//					this.$vux.toast.show({
				//						text: "请输入姓名！",
				//						type: "text",
				//						position: "middle"
				//					});
				//					return;
				//				}
				//
				//				if(editAddress.phone.length <= 0) {
				//					this.$vux.toast.show({
				//						text: "请输入联系电话！",
				//						type: "text",
				//						position: "middle",
				//						width: "12em"
				//					});
				//					return;
				//				}
				//
				//				if(editAddress.location.length <= 0) {
				//					this.$vux.toast.show({
				//						text: "请选择一个地址！",
				//						type: "text",
				//						position: "middle",
				//						width: "12em"
				//					});
				//					return;
				//				}
				//				if(editAddress.location_info.length <= 0) {
				//					this.$vux.toast.show({
				//						text: "请输入详细的地址！",
				//						type: "text",
				//						position: "middle",
				//						width: "12em"
				//					});
				//					return;
				//				}

				//上传地址信息
			}
		},
		mounted() {
			this.update();
			if(!this.$route.params["order"]) {
				this.$router.back(-1);
				return;
			}
			//			for(let i = 1; i <= 12; i++) {
			//				var item = {
			//					address_id: Math.random(),
			//					people: "张三" + i,
			//					location: "上海市黄浦军校上海市黄浦军校上海市黄浦军校" + i,
			//					phone: "1101201213" + i,
			//					isActive: i == 1,
			//					is_default: i == 1
			//				};
			//				this.addressList.push(item);
			//			}

			this.goods_list = this.$route.params.order.goods_list;
			this.$nextTick(() => {});
		},

		watch: {},
		computed: {
			total() {
				var money = 0;
				for(let i = 0; i < this.goods_list.length; i++) {
					let item = this.goods_list[i];
					money += item.user_spec.money * item.goods_count;
				}
				money = money.toFixed(2);
				this.totalMoney = money;
				return money;
			},
			// 是否为空
			isAddressEmpty() {
				if(this.addressList.length <= 0) {
					return true;
				}
				for(let i = 0; i < this.addressList.length; i++) {
					if(this.addressList[i].is_default) {
						this.defaultAddress = this.addressList[i];
						return false;
					}
				}
				return true;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "postOrder.scss";
</style>