<!--轮播图组件-->
<template>
	<div>
		<swiper :list="swiperList" dots-position="center" loop auto></swiper>
	</div>
</template>

<script>
	import { Swiper } from 'vux'

	//	const baseList = [{
	//		url: 'javascript:',
	//		img: 'https://static.vux.li/demo/1.jpg',
	//	}, {
	//		url: 'javascript:',
	//		img: 'https://static.vux.li/demo/2.jpg',
	//	}, {
	//		url: 'javascript:',
	//		img: 'http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg',
	//		fallbackImg: 'https://static.vux.li/demo/3.jpg'
	//	}, {
	//		url: 'javascript:',
	//		img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1191122380,2498081419&fm=27&gp=0.jpg',
	//		fallbackImg: 'https://static.vux.li/demo/3.jpg'
	//	}]
	//	const urlList = baseList.map((item, index) => ({
	//		url: 'http://m.baidu.com',
	//		img: item.img,
	//		fallbackImg: item.fallbackImg,
	//	}))
	export default {
		components: {
			Swiper,
		},
		ready() {},
		data() {
			return {
				goods_info: {
					goods_id: "",
					goods_title: "",
					goods_money: 0,
					goods_stock: 0,
					spec: {
						"map": [],
						paramList: []
					},
					img_list: [],
					is_collection: false
				},
				swiperList: [],
			}
		},
		mounted() {
			this.update();
		},
		methods: {
			update() {
				//取轮播图开始
				this.$get(
					"carousel/getList", {},
					res => {
						if(res.res >= 1) {
							this.swiperList = res.msg;
							for(var i = 0; i < this.swiperList.length; i++) {
								this.swiperList[i].img = this.$getUrl(this.swiperList[i].src);
							}
						}
						if(res < 0) {}
					}
				);
				//取轮播图结束
			}
		},
	}
</script>

<style>
	@import url("swiper.css");
	@import url("../../assets/app.css");
</style>