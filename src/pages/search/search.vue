<template>
	<div class="search">
		<view-box>
			<div>
				<loading :show="show"></loading>
			</div>
			<search class="search-comp" @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
			<!--搜索出来的样式  开始-->
			<flexbox :gutter="0" wrap="wrap" class="groom-list">
				<flexbox-item :span="6" v-for="(item,index) in goodsList">
					<goods-card class="groom-card" :goods="item"></goods-card>
				</flexbox-item>
			</flexbox>
			<!--搜索出来的样式  结束-->
		</view-box>
	</div>
</template>

<script>
	import goodsCard from "../../components/goodsCard/goodsCard.vue";
	import { Search, ViewBox, Flexbox, FlexboxItem, Loading } from "vux";
	export default {
		components: {
			Search,
			goodsCard,
			ViewBox,
			Flexbox,
			FlexboxItem,
			Loading
		},
		methods: {
			setFocus() {
				this.$refs.search.setFocus();
			},
			resultClick(item) {
				window.alert("you click the result item: " + JSON.stringify(item));
			},
			getResult(val) {
				//随时更新输入的数据
				console.log("输入了", val);
			},
			onSubmit() {
				//当回车的时候搜索触发load层,ajax请求结束之后load关闭
				var _this = this;
				//this.show = true;
				var value = this.value;
				console.log("最终输入的字是：", value);
				this.$post(
					"goods/query", {
						key: value,
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							_this.show = false;
						}
						if(res < 0) {

						}

					}
				);
			},
			onFocus() {
				console.log("on focus");
			},
			onCancel() {
				console.log("点击了取消");
				//返回index页面
				this.$router.go(-1);
			}
		},
		data() {
			return {
				show: false,
				results: [],
				value: "限量版来袭",
				goodsList: []
			};
		},
		mounted() {
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
		}
	};
</script>
<style>
	@import url("search.css");
	@import url("../../assets/app.css");
</style>