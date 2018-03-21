<template>
	<div id="shopBag" class="shop-bag">
		<!--顶部导航栏开始-->
		<x-header class="" :left-options="{showBack: false}">
			购物袋
			<a v-show="show_confirm" slot="right" @click="toRelease">{{release_confirm}}</a>
			<a v-show="show_edit" slot="right" @click="toEdit">编辑</a>
			<a v-show="show_complete" slot="right" @click="toComplete">完成</a>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<swipeout class="bag-list">
				<!-- native -->
				<swipeout-item transition-mode="follow" class="bag-item" v-for="(item,index) in bag_list">
					<div slot="right-menu">
						<swipeout-button type="warn" @click.native="del(item,index,bag_list)">删除</swipeout-button>
					</div>
					<div slot="content">
						<flexbox :gutter="0">
							<flexbox-item :span="1" class="isActive">
								<check-icon :value.sync="item.isActive"></check-icon>
							</flexbox-item>
							<flexbox-item :span="2.5">
								<!--<img @click="toGoodsInfo(item)" src="http://shopimg.weimob.com/56030317/Goods/1801221431115784.jpg" class="bag-goods-head-img" alt="">-->
								<img @click="toGoodsInfo(item)" :src="$getUrl(item.img_list[0].src)" class="bag-goods-head-img" alt="">
							</flexbox-item>
							<flexbox-item :span="8.5">
								<flexbox>
									<flexbox-item :span="12" @click.native="toGoodsInfo(item)">
										<div class="bag-goods-title two-line font-14">{{item.goods_title}}</div>
									</flexbox-item>
								</flexbox>
								<flexbox :gutter="0">
									<flexbox-item :span="2" @click.native="toGoodsInfo(item)">
										<div class="bag-goods-money">
											<!--{{item.goods_money}}-->
											<!--v-if="item.user_spec.length>0"-->
											<span>
												￥{{item.user_spec.money}}
											</span>
										</div>
									</flexbox-item>
									<flexbox-item :span="10" class="text-right">
										<inline-x-number class="number" v-model="item.goods_count" :min="1" @on-change="goods_countChange(item)"></inline-x-number>
									</flexbox-item>
								</flexbox>
							</flexbox-item>
						</flexbox>
					</div>
				</swipeout-item>
			</swipeout>
			<div class="shop-bag-hint">
				<div class="">
					<i class="fa fa-check-circle"></i>
					<span class="font-12">正品保证，7天无理由退货</span>
				</div>
				<div class="">
					<i class="fa fa-check-circle"></i>
					<span class="font-12">正一贵就赔</span>
				</div>
			</div>
			<!--加购此商品的还在看 开始-->
			<div class="shop-recommend" v-for="(item,index) in bag_list">
				<flexbox :gutter="0">
					<flexbox-item :span="2">
						<div class="recommend-head">
							<img :src="$getUrl(item.img_list[0].src)" alt="">
						</div>
					</flexbox-item>
					<flexbox-item :span="10">
						<div class="recommend-hint font-12 one-line">加购此宝贝的人还在看</div>
					</flexbox-item>
				</flexbox>
				<!--左右两个的商品列表开始-->
				<flexbox wrap="wrap" :gutter="0" class="groom-list">
					<flexbox-item :span="6" v-for="(item,index) in goodsList">
						<goods-card class="groom-card" :goods="item"></goods-card>
					</flexbox-item>
				</flexbox>
				<!--左右两个的商品列表结束-->
			</div>
			<!--加购此商品的还在看 结束-->
			<div v-show="to_pay" class="fix-btn" :style="{'bottom':foxBottom+'px'}">
				<flexbox :gutter="0">

					<flexbox-item :span="3">
						<check-icon :value.sync="isAllselect">全选</check-icon>
					</flexbox-item>

					<flexbox-item :span="9" class="text-right">
						<span class="total">
							总计：{{total}}
						</span>
						<div class="fix-btn-item" @click="goToPay()">去结算</div>
					</flexbox-item>
				</flexbox>
			</div>
			<!--点击编辑的时候批量删除开始-->
			<div v-show="all_del" class="fix-btn" :style="{'bottom':foxBottom+'px'}">
				<flexbox :gutter="0">
					<flexbox-item :span="3">
						<check-icon :value.sync="isAllselect">全选</check-icon>
					</flexbox-item>
					<flexbox-item :span="9" class="text-right">
						<div class="fix-btn-item" @click="toAllDel()">删除</div>
					</flexbox-item>
				</flexbox>
			</div>
			<!--点击编辑的时候批量删除结束-->
		</view-box>

	</div>

</template>

<script>
	import {
		ViewBox,
		XHeader,
		CheckIcon,
		Flexbox,
		FlexboxItem,
		InlineXNumber,
		Swipeout,
		SwipeoutItem,
		SwipeoutButton,
		XButton,
		Loading
	} from "vux";
	//	商品card
	import goodsCard from "../../components/goodsCard/goodsCard.vue";
	import $ from "jquery";

	export default {
		name: "shopBag",
		components: {
			ViewBox,
			XHeader,
			CheckIcon,
			Flexbox,
			FlexboxItem,
			InlineXNumber,
			Swipeout,
			SwipeoutItem,
			SwipeoutButton,
			XButton,
			Loading,
			goodsCard
		},
		data() {
			return {
				bag_list: [],
				totalMoney: 0,
				foxBottom: 0,
				isAllselect: false,
				release_confirm: '',
				show_confirm: false,
				show_edit: true,
				show_complete: false,
				to_pay: true,
				all_del: false,
				del_goods_id: [],
				goodsList: []
			};
		},
		methods: {
			//点击编辑之后
			toEdit() {
				this.show_edit = false;
				this.show_complete = true;

				this.to_pay = false;
				this.all_del = true;
			},
			//点击完成之后
			toComplete() {
				this.show_edit = true;
				this.show_complete = false;

				this.to_pay = true;
				this.all_del = false;
			},
			//点击删除(是批量删除的删除)
			toAllDel() {
				var list = this.getSelectItem();
				if(list.length <= 0) {
					//请选择要结算的商品！
					this.$vux.toast.show({
						text: "请选择要删除的商品！",
						type: "text",
						position: "middle",
						width: "12em"
					});
					return;
				}
				var order = {
					goods_list: list
				};
				for(var i = 0; i < order.goods_list.length; i++) {
					this.del_goods_id.push(order.goods_list[i].goods_id);
				}
				console.log("要删除的", this.del_goods_id);
				//this.bag_list.splice();
				//批量删除ajax开始
				/*
				this.$post("bag/del", {
						bag_id: this.del_goods_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							list.splice(index, 1);
						}
						if(res.res < 0) {

						}
					})
					*/
				//批量删除ajax结束

			},
			buildList(list) {
				for(let i = 0; i < list.length; i++) {
					list[i].isActive = false;
					list[i].goods_count = parseInt(list[i].goods_count);
				}
				this.bag_list = list;
				console.log(this.bag_list)
			},
			toGoodsInfo(item) {
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: "/goodsInfo/goodsInfo",
					params: {
						goods: item
					}
				});
			},
			goods_countChange(item) {
				console.log(item);
				this.$post(
					"bag/save", {
						where: {
							bag_id: item.bag_id
						},
						save: {
							goods_count: item.goods_count
						}
					},
					res => {
						console.log(res);
						if(res.res < 0) {
							this.$vux.toast.show({
								text: "修改失败,请重试",
								type: "text",
								position: "middle"
							});
						}
					}
				);
			},
			goToPay() {
				var list = this.getSelectItem();
				if(list.length <= 0) {
					//请选择要结算的商品！
					this.$vux.toast.show({
						text: "请选择要结算的商品！",
						type: "text",
						position: "middle",
						width: "12em"
					});
					return;
				}
				var order = {
					goods_list: list
				};
				this.$router.push({
					path: "/postOrder",
					name: "/postOrder",
					params: {
						order: order
					}
				});
			},

			getSelectItem() {
				var list = [];
				for(let i = 0; i < this.bag_list.length; i++) {
					let item = this.bag_list[i];
					if(item.isActive) {
						list.push(item);
					}
				}
				return list;
			},
			//删除
			del(item, index, list) {
				this.$post("bag/del", {
						bag_id: item.bag_id
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							list.splice(index, 1);
						}
						if(res.res < 0) {

						}
					})
			},
			//从发布动态页面进来之后点击确认之后携带信息返回
			toRelease() {
				var list = this.getSelectItem();
				if(list.length <= 0) {
					//请选择要结算的商品！
					this.$vux.toast.show({
						text: "请选择要发布的商品！",
						type: "text",
						position: "middle",
						width: "12em"
					});
					return;
				}
				var order = {
					goods_list: list
				};
				this.$router.push({
					path: "/release/release",
					name: "/release/release",
					params: {
						openRelease: '5',
						order: order
					}
				});
			}
		},
		watch: {
			isAllselect() {
				for(let i = 0; i < this.bag_list.length; i++) {
					this.bag_list[i].isActive = this.isAllselect;
				}
			}
		},
		computed: {
			total() {
				var money = 0;
				var list = this.getSelectItem();
				for(let i = 0; i < list.length; i++) {
					let item = list[i];
					//money += item.goods_money * item.goods_count;
					money += item.user_spec.money * item.goods_count;
				}
				money = money.toFixed(2);
				this.totalMoney = money;
				return money;
			}
		},
		mounted() {
			//推荐请求商品列表开始
			this.$get(
				this.$serverHome + "goods/getList", {
					page: this.currentPage,
					limit: this.pageSize
				},
				res => {
					console.log(res);
					this.goodsList = res.msg;
				}
			);
			//推荐请求商品列表结束
			//‘请求购物袋数据’ ajax请求开始
			this.$post(
				"bag/getList", {
					page: this.currentPage,
					limit: this.pageSize
				},
				res => {
					if(res.res >= 1) {
						this.buildList(res.msg)
					}
				}
			);
			//‘请求购物袋数据’ ajax请求结束
			if(this.$route.params["isGoodsInfo"]) {
				this.foxBottom = 0;
			} else {
				this.foxBottom = 50;
			}
			//如果是从发布动态点进来的
			if(this.$route.params["openShopBag"] == "1") {
				this.release_confirm = "确认";
				this.show_confirm = true;
				this.show_edit = false;
				this.show_complete = false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "shopBag.scss";
</style>
<style>
	.number .vux-number-selector {
		padding: 0 !important;
	}
	
	.number .vux-number-input {
		padding: 0 !important;
		font-size: 14px;
	}
</style>