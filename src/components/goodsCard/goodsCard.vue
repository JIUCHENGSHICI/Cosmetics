<!--商品列表-->
<template>
	<div>
		<div class="panel" v-if="goods">
			<div class="goods-card" @click="toGoodsInfo">
				<!--上边的图片  容器-->
				<div class="goods-img-box" v-if="goods['img_list']">
					<img :src="$getUrl(goods.img_list[0].src)">
				</div>
				<!--下边的文本  容器-->
				<div class="goods-text-box">
					<!--商品的标题-->
					<div class="goods-title">
						{{ goods.goods_title }}
					</div>
					<!--商品的价格容器-->
					<div class="goods-price">
						<!--现价-->
						<span class="new-goods-price" v-if="goods['spec']">￥{{goods.spec.paramList[0].money}}</span>
						<!--原价-->
						<strike class="old-goods-price" v-if="goods['spec']">￥{{goods.spec.paramList[0].money}}</strike>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem } from "vux";
	export default {
		components: {
			Flexbox,
			FlexboxItem
		},
		props: ['goods'],
		data() {
			return {
				
			};
		},
		methods: {
			toGoodsInfo() {
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: '/goodsInfo/goodsInfo',
					params: {
						goods_id: this.goods.goods_id
					},
					query: {
						goods_id: this.goods.goods_id
					}
				});
			}
		}
	};
</script>

<style>
	@import url("goodsCard.css");
	@import url("../../assets/app.css");
</style>