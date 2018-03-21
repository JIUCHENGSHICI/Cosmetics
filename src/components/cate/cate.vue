<!--首页的滚动字幕下边的分类-->
<template>
	<div>
		<grid>
			<grid-item @click.native="toGoodsList(title1)">
				<img slot="icon" src="../../assets/cate/one.png">
				<span class="grid-center">{{title1}}</span>
			</grid-item>
			<grid-item @click.native="toGoodsList(title12)">
				<img slot="icon" src="../../assets/cate/two.png">
				<span class="grid-center">{{title2}}</span>
			</grid-item>
			<grid-item @click.native="toGoodsList(title3)">
				<img slot="icon" src="../../assets/cate/three.png">
				<span class="grid-center">{{title3}}</span>
			</grid-item>
			<grid-item @click.native="toGoodsList(title4)">
				<img slot="icon" src="../../assets/cate/four.png">
				<span class="grid-center">{{title4}}</span>
			</grid-item>
			<grid-item @click.native="toClass">
				<img slot="icon" src="../../assets/cate/five.png">
				<span class="grid-center">{{title5}}</span>
			</grid-item>
		</grid>
	</div>
</template>
<script>
	import {
		Grid,
		GridItem,
	} from "vux";
	export default {
		mounted() {},
		components: {
			Grid,
			GridItem
		},
		data() {
			return {
				title1: '精选直供',
				title2: '甄选直订',
				title3: '共享续杯',
				title4: '会员福利',
				title5: '分类'
			};
		},
		methods: {
			//点击去精选直供
			toGoodsList(title1) {
				console.log("第一个", title1)
				this.$router.push({
					path: '/goodsList/goodsList',
					name: '/goodsList/goodsList',
					params: {
						title: title1
					}
				})
			},
			//			点击去甄选直订
			toPick() {
				console.log("去,甄选直订");
				this.$router.push({
					path: '/goodsList/goodsList'
				})
			},
			//			点击去共享续杯
			toRefill() {
				console.log("去,共享续杯");
				this.$router.push({
					path: '/goodsList/goodsList'
				})
			},
			//			点击去会员福利
			toMember() {
				console.log("去,会员福利");
				this.$router.push({
					path: '/goodsList/goodsList'
				})
			},
			//			点击去分类
			toClass() {
				console.log("去,分类");
				this.$router.push({
					path: '/class/class'
				})
			}
		},
	};
</script>

<style scoped>
	@import url("cate.css");
	@import url("../../assets/app.css");
</style>