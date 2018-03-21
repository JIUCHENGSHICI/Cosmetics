<!--通知组件  滚动的字幕-->
<template>
	<div>
		<group class="notice-box">
			<cell :title="('NOTICE')" class="notice-panel">
				<marquee>
					<marquee-item v-for="(item,index) in list" @click.native="toInfo(list)">{{item.goods_title}}</marquee-item>
				</marquee>
			</cell>
		</group>
	</div>
</template>

<script>
	import { Group, Cell, Marquee, MarqueeItem } from 'vux'
	export default {
		components: {
			Marquee,
			MarqueeItem,
			Group,
			Cell
		},
		mounted() {
			setTimeout(() => {
				this.asyncCount = 5
			}, 1000);
			this.update();
		},
		methods: {
			//点击每一个去详情
			toInfo(list) {
				var goods_id = list.goods_id;
				this.$router.push({
					path: "/goodsInfo/goodsInfo",
					name: '/goodsInfo/goodsInfo',
					params: {
						goods_id: goods_id
					}
				});
			},
			update() {
				this.$get(
					this.$serverHome + "goods/getList", {
						page: this.currentPage,
						limit: this.pageSize
					},
					res => {
						//console.log("滚动消息", res);
						this.list = res.msg;
					}
				);
			}
		},
		data() {
			return {
				asyncCount: 0,
				list: []
			}
		}
	}
</script>

<style>
	@import url("notice.css");
	@import url("../../assets/app.css");
</style>