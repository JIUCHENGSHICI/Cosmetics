<!--商品详情页面-->
<template>
	<div class="feedback">
		<!--顶部导航栏开始-->
		<x-header :left-options="{backText: '返回'}">
			<a slot="left"></a>
			意见与反馈
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<group title="请选择反馈类型">
				<radio :options="feedList" v-model="feedMethod"></radio>
			</group>
			<group>
				<x-textarea v-model="feedback_text" :max="255" :placeholder="('请输入您的意见或建议')" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
			</group>
			<x-button @click.native="toSubmit" class="margin-top-50" type="primary" action-type="button">提交</x-button>
		</view-box>
	</div>
</template>

<script>
	import { XHeader, ViewBox, Group, XTextarea, XButton, Radio } from 'vux'
	export default {
		components: {
			XHeader,
			ViewBox,
			Group,
			XTextarea,
			XButton,
			Radio
		},
		data() {
			return {
				feedback_text: '',
				feedList: ["bug反馈", "意见反馈", "ui问题", "其他"],
				feedMethod: "bug反馈",
			}
		},
		methods: {
			onEvent(event) {
				console.log('on', event)
			},
			//提交意见
			toSubmit() {
				var feedback_text = this.feedback_text
				console.log(feedback_text);
				console.log(this.feedMethod);
				if(this.feedMethod == "bug反馈") {
					var feedback_type = 0
				}
				if(this.feedMethod == "意见反馈") {
					var feedback_type = 1
				}
				if(this.feedMethod == "ui问题") {
					var feedback_type = 2
				}
				if(this.feedMethod == "其他") {
					var feedback_type = 3
				}
				if(feedback_text.length <= 0) {
					this.$vux.toast.show({
						text: "请输入内容",
						type: "text",
						position: "middle"
					});
					return false;
				}
				this.$post(
					"feedback/add", {
						add: {
							feedback_type: feedback_type,
							feedback_info: feedback_text
						}
					},
					res => {
						console.log(res);
						if(res = 1) {
							this.$vux.toast.show({
								text: "提交成功",
								type: "text",
								position: "middle"
							});
							var _this = this;
							setTimeout(function() {
								_this.$router.back(-1);
							}, 1500)
						}
						if(res != 1) {
							this.$vux.toast.show({
								text: "网络错误",
								type: "text",
								position: "middle"
							});
						}

					}
				);

			}
		}
	}
</script>

<style>
	@import url("feedback.css");
	@import url("../../assets/app.css");
</style>