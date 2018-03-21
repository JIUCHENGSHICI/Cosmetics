<!--商品列表-->
<template>
	<div class="goods-list">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			{{title}}
			<a slot="left"></a>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<flexbox :gutter="0" wrap="wrap" class="groom-list">
				<flexbox-item :span="6" v-for="(item,index) in goodsList">
					<goods-card class="groom-card" :goods="item"></goods-card>
				</flexbox-item>
			</flexbox>
		</view-box>
	</div>
</template>

<script>
	//	商品card
	import goodsCard from '../../components/goodsCard/goodsCard.vue'
	import { Flexbox, FlexboxItem, ViewBox, XHeader } from 'vux'
	export default {
		components: {
			Flexbox,
			FlexboxItem,
			goodsCard,
			ViewBox,
			XHeader
		},
		data() {
			return {
				title: '',
				goodsList: [{}],
			}
		},
		mounted() {
			console.log("传过来的标题", this.$route.params["title"])
			this.title = this.$route.params["title"];
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
		},
		methods: {}
	}
</script>

<style scoped>
	@import url("goodsList.css");
	@import url("../../assets/app.css");
</style>