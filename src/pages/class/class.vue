<template>
	<div class="class">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: ''}">
			<a slot="left"></a>
			<search @click.native="toSearch"></search>
		</x-header>
		<!--<div :class="[{'bc-white':model==(item.amount)}]" class="left-title" @click="setModel(item.amount)">
								{{item.title}}
							</div>-->
		<!--<div v-for="(item,index) in list" v-if='model==(item.amount)'>-->
		<!--顶部导航栏结束-->
		<view-box>
			<flexbox :gutter="0">
				<flexbox-item :span="3">
					<div class="left-height">
						<div class="class-box" v-for="(group,i) in class_list">
							<div class="class-left text-center">
								<!--@click="setModel(item.amount)"-->
								<!--:class="[{'bc-white':model==(item.amount)}]"-->
								<div :class="[{'bc-white':group.isOpen}]" class="left-item" @click="open(group,i,class_list)">
									{{group.class_title}}
								</div>
							</div>
						</div>
					</div>
				</flexbox-item>
				<flexbox-item :span="9">
					<div class="right-height">
						<div class="class-box" v-for="(group,i) in class_list">
							<div class="class-right">
								<!--v-if='model==(item.amount)'-->
								<div class="right-item" v-for="(item,j) in group.node" v-if="group.isOpen">
									<div class="point">
										<span>{{item.class_title}}</span>
									</div>
									<flexbox :gutter="0" wrap="wrap">
										<flexbox-item :span="4" @click.native.stop="toGoogsList()">
											<div class="shop text-center">
												<div class="shop-head">
													<img src="../../assets/scroller/two.png" />
												</div>
												<div class="shop-title one-line font-12">
													哈哈哈哈
												</div>
											</div>
										</flexbox-item>
									</flexbox>
								</div>
							</div>
						</div>
					</div>
				</flexbox-item>
			</flexbox>
		</view-box>
	</div>
</template>

<script>
	//	搜索组件
	import search from "../../components/search/search.vue";
	//	商品card
	import goodsCard from "../../components/goodsCard/goodsCard.vue";
	import { XHeader, ViewBox, Flexbox, FlexboxItem } from "vux";
	export default {
		components: {
			XHeader,
			ViewBox,
			search,
			Flexbox,
			FlexboxItem,
			goodsCard
		},
		methods: {
			toSearch() {
				this.$router.push({
					path: "/search/search"
				});
			},
			setModel: function(type) {
				this.model = type;
			},
			open(group, j, list) {
				console.log("798")
				for(var i = 0; i < list.length; i++) {
					list[i].isOpen = false;
				}
				group.isOpen = true;
			},
			toGoogsList() {
				this.$router.push({
					path: '/goodsList/goodsList',
					name: '/goodsList/goodsList',
					//					params: {
					//						title: title1
					//					}
				})
			}
		},
		mounted() {
			//			this.$get(
			//				this.$serverHome + "goods/getList", {
			//					page: this.currentPage,
			//					limit: this.pageSize
			//				},
			//				res => {
			//					console.log(res);
			//					this.goodsList = res.msg;
			//				}
			//			);
			this.$get(
				"class/getList", {},
				res => {
					console.log("classsss", res);
					for(var i = 0; i < res.msg.length; i++) {
						res.msg[i].isOpen = i == 0;
					}
					this.class_list = res.msg;
					console.log("class_list数组", this.class_list);
				}
			);

		},
		data() {
			return {
				model: 1,
				goodsList: [],
				list: {},
				title: [],
				kkk: [],
				class_list: [],
			};
		}
	};
</script>

<style>
	@import url("class.css");
	@import url("../../assets/app.css");
</style>