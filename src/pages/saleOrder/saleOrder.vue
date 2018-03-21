<!--销售订单页面-->
<template>
	<div class="sale-order">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: ''}">
			销售订单
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<search cancel-text="搜索" class="search-comp" @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
			<flexbox :gutter="0" class="switch-box">
				<flexbox-item :span="3">
					<div class="switch font-14" @click="setModel(1)" :class="[{'font-black':model==1}]">全部</div>
				</flexbox-item>
				<div class="cube1"></div>
				<flexbox-item :span="3">
					<div class="switch font-14" @click="setModel(2)" :class="[{'font-black':model==2}]">未结算</div>
				</flexbox-item>
				<div class="cube2"></div>
				<flexbox-item :span="3">
					<div class="switch font-14" @click="setModel(3)" :class="[{'font-black':model==3}]">已退款</div>
				</flexbox-item>
				<div class="cube3"></div>
				<flexbox-item :span="3">
					<div class="switch font-14" @click="setModel(4)" :class="[{'font-black':model==4}]">已结算</div>
				</flexbox-item>
			</flexbox>
			<!--全部 开始-->
			<div class="order-box" v-if='model==1'>
				<div class="vux-1px-t">
					<swipeout>
						<swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
							<div slot="right-menu">
								<swipeout-button @click.native="onButtonClick('delete')" type="warn">{{('删除')}}</swipeout-button>
							</div>
							<div slot="content" class="demo-content vux-1px-t">
								<!--内容 开始-->
								<div class="order-panel">
									<flexbox :gutter="0" class="">
										<flexbox-item :span="7">
											<div class="text-left one-line font-12">
												订单编号：11111111111111
											</div>
										</flexbox-item>
										<flexbox-item :span="5">
											<div class="text-right one-line font-12">
												2018-01-27 10:32:36
											</div>
										</flexbox-item>
									</flexbox>
									<flexbox :gutter="0" class="">
										<flexbox-item :span="9">
											<div class="">
												<panel :list="customerList"></panel>
											</div>
										</flexbox-item>
										<flexbox-item :span="3">
											<div class="font-14 text-right">已收货</div>
											<div class="font-14 text-right">￥6.08</div>
										</flexbox-item>
									</flexbox>
								</div>
								<!--内容 结束-->
							</div>
						</swipeout-item>
					</swipeout>
				</div>
			</div>
			<!--全部结束-->
			<!--未结算开始-->
			<div class="order-box" v-if='model==2'>
				<div class="vux-1px-t">
					<swipeout>
						<swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
							<div slot="right-menu">
								<swipeout-button @click.native="onButtonClick('delete')" type="warn">{{('删除')}}</swipeout-button>
							</div>
							<div slot="content" class="demo-content vux-1px-t">
								<!--内容 开始-->
								<div class="order-panel">
									<flexbox :gutter="0" class="">
										<flexbox-item :span="7">
											<div class="text-left one-line font-12">
												订单编号：222222222222
											</div>
										</flexbox-item>
										<flexbox-item :span="5">
											<div class="text-right one-line font-12">
												2018-01-27 10:32:36
											</div>
										</flexbox-item>
									</flexbox>
									<flexbox :gutter="0" class="">
										<flexbox-item :span="9">
											<div class="">
												<panel :list="customerList"></panel>
											</div>
										</flexbox-item>
										<flexbox-item :span="3">
											<div class="font-14 text-right">已收货</div>
											<div class="font-14 text-right">￥6.08</div>
										</flexbox-item>
									</flexbox>
								</div>
								<!--内容 结束-->
							</div>
						</swipeout-item>
					</swipeout>
				</div>
			</div>
			<!--未结算结束-->
			<!--已退款开始-->
			<div class="order-box" v-if='model==3'>
				<div class="vux-1px-t">
					<swipeout>
						<swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
							<div slot="right-menu">
								<swipeout-button @click.native="onButtonClick('delete')" type="warn">{{('删除')}}</swipeout-button>
							</div>
							<div slot="content" class="demo-content vux-1px-t">
								<!--内容 开始-->
								<div class="order-panel">
									<flexbox :gutter="0" class="">
										<flexbox-item :span="7">
											<div class="text-left one-line font-12">
												订单编号：3333333333333
											</div>
										</flexbox-item>
										<flexbox-item :span="5">
											<div class="text-right one-line font-12">
												2018-01-27 10:32:36
											</div>
										</flexbox-item>
									</flexbox>
									<flexbox :gutter="0" class="">
										<flexbox-item :span="9">
											<div class="">
												<panel :list="customerList"></panel>
											</div>
										</flexbox-item>
										<flexbox-item :span="3">
											<div class="font-14 text-right">已收货</div>
											<div class="font-14 text-right">￥6.08</div>
										</flexbox-item>
									</flexbox>
								</div>
								<!--内容 结束-->
							</div>
						</swipeout-item>
					</swipeout>
				</div>
			</div>
			<!--已退款结束-->
			<!--已结算开始-->
			<div class="order-box" v-if='model==4'>
				<div class="vux-1px-t">
					<swipeout>
						<swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
							<div slot="right-menu">
								<swipeout-button @click.native="onButtonClick('delete')" type="warn">{{('删除')}}</swipeout-button>
							</div>
							<div slot="content" class="demo-content vux-1px-t">
								<!--内容 开始-->
								<div class="order-panel">
									<flexbox :gutter="0" class="">
										<flexbox-item :span="7">
											<div class="text-left one-line font-12">
												订单编号：4444444444
											</div>
										</flexbox-item>
										<flexbox-item :span="5">
											<div class="text-right one-line font-12">
												2018-01-27 10:32:36
											</div>
										</flexbox-item>
									</flexbox>
									<flexbox :gutter="0" class="">
										<flexbox-item :span="9">
											<div class="">
												<panel :list="customerList"></panel>
											</div>
										</flexbox-item>
										<flexbox-item :span="3">
											<div class="font-14 text-right">已收货</div>
											<div class="font-14 text-right">￥6.08</div>
										</flexbox-item>
									</flexbox>
								</div>
								<!--内容 结束-->
							</div>
						</swipeout-item>
					</swipeout>
				</div>
			</div>
			<!--已结算结束-->
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Search, Flexbox, FlexboxItem, Panel, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
	export default {
		components: {
			ViewBox,
			XHeader,
			Search,
			Flexbox,
			FlexboxItem,
			Panel,
			Swipeout,
			SwipeoutItem,
			SwipeoutButton
		},
		methods: {
			onButtonClick(type) {
				alert('on button click ' + type)
			},
			handleEvents(type) {
				console.log('event: ', type)
			},
			setModel: function(type) {
				this.model = type;
			},
			setFocus() {
				this.$refs.search.setFocus()
			},
			resultClick(item) {
				window.alert('you click the result item: ' + JSON.stringify(item))
			},
			getResult(val) {
				console.log('on-change', val)
				this.results = val ? getResult(this.value) : []
			},
			onSubmit() {
				this.$refs.search.setBlur()
				this.$vux.toast.show({
					type: 'text',
					position: 'top',
					text: 'on submit'
				})
			},
			onFocus() {
				console.log('on focus')
			},
			onCancel() {
				console.log('点击了取消');
			}

		},
		data() {
			return {
				model: 1,
				results: [],
				value: '输入订单号、客户ID',
				customerList: [{
					src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					title: "共享护肤 王颖",
					desc: 'ID：1279573436',
					//点击上边的用户的信息  可以通过路径跳转页面,只需要配置下边的路径 也可以通过点击事件跳转页面
					//url: 'https://www.baidu.com/'
				}]
			}
		}
	}

	function getResult(val) {
		let rs = []
		for(let i = 0; i < 20; i++) {
			rs.push({
				title: `${val} result: ${i + 1} `,
				other: i
			})
		}
		return rs
	}
</script>

<style>
	@import url("saleOrder.css");
	@import url("../../assets/app.css");
</style>