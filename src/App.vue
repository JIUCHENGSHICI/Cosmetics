<template>
	<!--style="max-width: 640px;margin: auto;overflow: hidden;"-->
	<div id="app" class="app">
		<transition :name="transitionName">
			<router-view :class="['router-view',{'router-view-full':isFull}]"></router-view>
		</transition>
		<tabbar class="bottom-nav" v-if='isShowNav'>

			<tabbar-item selected :link="{replace: true,path: '/index'}">

				<span slot="icon" class="fa fa-home fa-fw"></span>
				<span slot="label">首页</span>

			</tabbar-item>

			<tabbar-item :link="{replace: true,path: '/social'}">

				<span slot="icon" class="fa fa-eye"></span>
				<span slot="label">社交</span>

			</tabbar-item>

			<tabbar-item :link="{replace: true,path: '/shopBag'}">

				<span slot="icon" class="fa fa-shopping-cart"></span>
				<span slot="label">购物袋</span>

			</tabbar-item>

			<tabbar-item :link="{replace: true,path: '/user'}">

				<span slot="icon" class="fa fa-user"></span>
				<span slot="label">个人中心</span>

			</tabbar-item>

			<tabbar-item v-show="is_master" :link="{replace: true,path: '/shopkeeper'}">
				<span slot="icon" class="fa fa-globe" style="font-size: 20px;"></span>
				<span slot="label">我是店主</span>
			</tabbar-item>

		</tabbar>
	</div>
</template>

<script>
	import { Flexbox, FlexboxItem, Grid, GridItem, Tabbar, TabbarItem } from "vux";

	export default {
		data() {
			return {
				is_master: true,
				transitionName: "slide-right",
				isFull: false,
				isShowNav: true
			};
		},
		mounted() {
			var user_info = JSON.parse(localStorage.user_info)
			if(user_info.user_type == 0) {
				this.is_master = true;
			}
			if(user_info.user_type != 0) {
				this.is_message = false;
			}
		},
		methods: {
			toPage() {
				alert(1);
			}
		},
		components: {
			Flexbox,
			FlexboxItem,
			Grid,
			GridItem,
			Tabbar,
			TabbarItem
		},
		watch: {
			$route(to, from) {
				var to_index = -1;
				var from_index = -1;
				console.log(this.$route);
				if(to.params["index"] != null) {
					to_index = to.params["index"];
				} else {
					to_index = to.meta.index;
				}
				if(from.params["index"] != null) {
					from_index = from.params["index"];
				} else {
					from_index = from.meta.index;
				}

				if(to_index == from_index) {
					this.transitionName = "";
					return;
				}

				if(to_index != 0) {
					this.isFull = true;
					setTimeout(() => {
						this.isShowNav = !this.isFull;
					}, 300);
				} else {
					this.isFull = false;
					this.isShowNav = !this.isFull;
				}

				//如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if(to_index > from_index) {
					//设置动画名称
					this.transitionName = "slide-left";
				} else {
					this.transitionName = "slide-right";
				}
			}
		},
		computed: {}
	};
</script>

<style>
	@import url("assets/app.css");
</style>

<style lang="less">
	@import "~vux/src/styles/reset.less";
	body {
		background-color: #fbf9fe;
	}
	
	.router-view {
		position: absolute;
		width: 100%;
		bottom: 50px;
		top: 0;
		background-color: #ffffff;
		left: 0;
	}
	
	.router-view-full {
		position: absolute;
		bottom: 0;
		top: 0;
		right: 0;
		left: 0;
		padding: 0;
		margin: 0;
		overflow: hidden;
	}
	/*// 页面切换动画*/
	
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all 0.3s;
		position: absolute;
		z-index: 502;
	}
	
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition: all 0.3s;
		position: absolute;
	}
	
	.slide-right-enter {
		z-index: -1;
		// transform: translateX(-100%);
		// left: -100%;
		/*// opacity: 0;*/
		/*// left: -100%;*/
	}
	
	.slide-right-leave-active {
		// transform: translateX(100%);
		left: 100%;
		/*// left: 100%;*/
	}
	
	.slide-left-enter {
		// transform: translateX(100%);
		left: 100%;
		/*// left: 100%;*/
	}
	
	.slide-left-leave-active {
		z-index: -1;
		// transform: translateX(-100%);
		// left: -100%;
		/*// opacity: 0;*/
		/*// left: -100%;*/
	}
	/*添加样式*/
	/*底部导航栏*/
	
	.weui-tabbar.bottom-nav {
		background: #16242D;
	}
	/*底部导航栏字体图标的大小*/
	
	.bottom-nav .fa {
		font-size: 22px;
	}
	/*个人中心的图标变小点*/
	
	.bottom-nav .fa .fa-user-o {
		font-size: 20px;
	}
	/*底部导航栏的图标下边的字体的大小变得小一点*/
	
	.bottom-nav .weui-tabbar__label span {
		font-size: 12px !important;
	}
	/*选中的样式改变  字体变成白色的 */
	/*改变图标选中时候的颜色*/
	
	.bottom-nav .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
		color: #fff;
	}
	/*改变蚊子选中时的颜色*/
	
	.bottom-nav .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
		color: #fff !important;
	}
</style>