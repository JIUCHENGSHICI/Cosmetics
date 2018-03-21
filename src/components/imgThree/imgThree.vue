<!--三张图片列表-->
<template>
	<div class="img-three" v-if="goods">
		<flexbox :gutter="0" wrap="wrap">
			<!--左边的-->
			<flexbox-item :span="1/2">
				<div class="left-panel" v-if="goods['img_list']">
					<img :src="$getUrl(goods.img_list[0].src)" @click="toGoodsInfo(goods)" />
				</div>
			</flexbox-item>
			<!--右边的-->
			<flexbox-item :span="1/2">
				<div class="right-panel">
					<!--垂直无间隙的栅格-->
					<flexbox orient="vertical" :gutter="0">
						<flexbox-item>
							<div class="" v-if="goods['img_list']">
								<img :src="$getUrl(goods.img_list[0].src)" />
							</div>
						</flexbox-item>
						<flexbox-item>
							<div class="" v-if="goods['img_list']">
								<img :src="$getUrl(goods.img_list[0].src)" />
							</div>
						</flexbox-item>
					</flexbox>
					<!--垂直无间隙的栅格-->
				</div>
			</flexbox-item>
		</flexbox>
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
				list: []
			};
		},
		mounted() {
			this.update();
		},
		methods: {
			update() {},
			toGoodsInfo(goods) {
				var goods_id = goods.goods_id;
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: '/goodsInfo/goodsInfo',
					params: {
						goods_id: goods_id
					}
				});
			}
		}
	};
</script>

<style>
	@import url("imgThree.css");
	@import url("../../assets/app.css");
</style>