<!--scroller左右拖动的组件-->
<template>
	<div class="scroller">
		<view-box>
			<swiper loop auto :show-dots="true" :list="swiperList" style="background: #fff;">
				<flexbox :gutter="0">
					<flexbox-item :span="3" @click.native="setModel(1)" :class="[{'font-red':model==1}]">
						<div class="text-center">
							<div class="time">11:00</div>
							<span class="font-12" :class="[{'axis-hint':model==1}]">抢购中</span>
						</div>
					</flexbox-item>
					<flexbox-item :span="3" @click.native="setModel(2)" :class="[{'font-red':model==2}]">
						<div class="text-center">
							<div class="time">11:00</div>
							<span class="font-12" :class="[{'axis-hint':model==2}]">抢购中</span>
						</div>
					</flexbox-item>
					<flexbox-item :span="3" @click.native="setModel(3)" :class="[{'font-red':model==3}]">
						<div class="text-center">
							<div class="time">11:00</div>
							<span class="font-12" :class="[{'axis-hint':model==3}]">抢购中</span>
						</div>
					</flexbox-item>
					<flexbox-item :span="3" @click.native="setModel(4)" :class="[{'font-red':model==4}]">
						<div class="text-center">
							<div class="time">11:00</div>
							<span class="font-12" :class="[{'axis-hint':model==4}]">抢购中</span>
						</div>
					</flexbox-item>
				</flexbox>
			</swiper>
			<div class="scroller-bottom">
				<div class="" v-if='model==1'>
					<div class="axis-img"></div>
				</div>
				<div class="" v-if='model==2'>
					<div class="axis-img"></div>
				</div>
				<div class="" v-if='model==3'>
					<div class="axis-img"></div>
				</div>
				<div class="" v-if='model==4'>
					<div class="axis-img"></div>
				</div>
			</div>
		</view-box>
	</div>
</template>

<script>
	import { Swiper, Flexbox, FlexboxItem, ViewBox } from 'vux'
	//	商品card
	import goodsCard from '../goodsCard/goodsCard.vue'
	const baseList = [{}, {}, {}, {}]
	const urlList = baseList.map((item, index) => ({
		url: 'http://m.baidu.com',
		img: item.img,
		fallbackImg: item.fallbackImg,
	}))
	export default {
		components: {
			Swiper,
			Flexbox,
			FlexboxItem,
			ViewBox,
			goodsCard
		},
		ready() {},
		methods: {
			setModel: function(type) {
				this.model = type;
			},
		},
		mounted() {
			//‘猜你喜欢’ ajax请求开始
			this.$get(
				this.$serverHome + "goods/getList", {
					page: this.currentPage,
					limit: this.pageSize
				},
				res => {
					this.list = res.msg;
				}
			);
			//‘猜你喜欢’ ajax请求结束
		},
		data() {
			return {
				model: 1,
				swiperList: urlList,
				list: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
			}
		}
	}
</script>

<style>
	@import url("scroller.css");
	@import url("../../assets/app.css");
</style>