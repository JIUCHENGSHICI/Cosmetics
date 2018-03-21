<!--我的客户页面-->
<template>
	<div class="customer">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: ''}">
			我的客户
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<search cancel-text="搜索" class="search-comp" @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
			<group>
				<cell class="font-14" :title="('普通用户')" :value="('3人')" is-link></cell>
			</group>
			<group class="margin-top-10">
				<cell class="font-14" :title="('0人')" :value="('')"></cell>
			</group>
			<div class="customer-list">
				<panel :list="customerList"></panel>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Search, Group, Cell, Panel } from 'vux'
	export default {
		components: {
			ViewBox,
			XHeader,
			Search,
			Group,
			Cell,
			Panel
		},
		methods: {

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
				results: [],
				value: '限量版来袭',
				customerList: [{
					src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
					desc: '索拉卡大胜靠德讲述了第三季度老师讲的第三列第聚少离多聚少离多就是来得及但是到了事件代理事件代理数据都是劳动纪律说的就是劳动竞赛劳动竞赛来得及',
					//点击上边的用户的信息  可以通过路径跳转页面,只需要配置下边的路径 也可以通过点击事件跳转页面
					//url: 'https://www.baidu.com/'
				},{
					src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
					desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID',
					//点击上边的用户的信息  可以通过路径跳转页面,只需要配置下边的路径 也可以通过点击事件跳转页面
					//url: 'https://www.baidu.com/'
				},{
					src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
					desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID',
					//点击上边的用户的信息  可以通过路径跳转页面,只需要配置下边的路径 也可以通过点击事件跳转页面
					//url: 'https://www.baidu.com/'
				}, {
					src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
					title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
					desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID',
					//点击上边的用户的信息  可以通过路径跳转页面,只需要配置下边的路径 也可以通过点击事件跳转页面
					//url: 'https://www.baidu.com/'
				}, ]
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
				}</script>

<style>
	@import url("customer.css");
	@import url("../../assets/app.css");
</style>