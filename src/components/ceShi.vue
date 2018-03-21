<template>
	<div class="search">
		<view-box>
			<search class="search-comp" @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top top="46px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
			<flexbox :gutter="0" wrap="wrap" class="groom-list">
				<flexbox-item :span="1/2">
					<goods-card class="groom-card"></goods-card>
				</flexbox-item>
				<flexbox-item :span="1/2">
					<goods-card class="groom-card"></goods-card>
				</flexbox-item>
				<flexbox-item :span="1/2">
					<goods-card class="groom-card"></goods-card>
				</flexbox-item>
				<flexbox-item :span="1/2">
					<goods-card class="groom-card"></goods-card>
				</flexbox-item>
				<flexbox-item :span="1/2">
					<goods-card class="groom-card"></goods-card>
				</flexbox-item>
				<flexbox-item :span="1/2">
					<goods-card class="groom-card"></goods-card>
				</flexbox-item>
				<flexbox-item :span="1/2">
					<goods-card class="groom-card"></goods-card>
				</flexbox-item>
			</flexbox>
		</view-box>
	</div>
</template>

<script>
	//	import goodsCard from '../../components/goodsCard/goodsCard.vue'
	import goodsCard from './goodsCard/goodsCard.vue'
	import { Search, ViewBox, Flexbox, FlexboxItem } from 'vux'
	export default {
		components: {
			Search,
			goodsCard,
			ViewBox,
			Flexbox,
			FlexboxItem
		},
		methods: {
			setFocus() {
				this.$refs.search.setFocus()
			},
			resultClick(item) {
				window.alert('you click the result item: ' + JSON.stringify(item))
			},
			getResult(val) {
				console.log('on-change', val)
				this.results = val ? getResult(this.value) : []
			},
			onSubmit() {
				this.$refs.search.setBlur()
				this.$vux.toast.show({
					type: 'text',
					position: 'top',
					text: 'on submit'
				})
			},
			onFocus() {
				console.log('on focus')
			},
			onCancel() {
				console.log('点击了取消')
			}
		},
		data() {
			return {
				results: [],
				value: '限量版来袭'
			}
		}
	}

	function getResult(val) {
		let rs = []
		for(let i = 0; i < 20; i++) {
			rs.push({
				title: `${val} result: ${i + 1} `,
				other: i
			})
		}
		return rs
	}
</script>
<style>
	/*更改原有样式*/
	
	.search .vux-search-box.vux-search-fixed {
		top: 0px !important;
	}
	
	.search .groom-list {
		margin-top: 44px !important;
	}
	
	.search .search-comp {
		position: fixed !important;
	}
	
	.search .weui-search-bar__box .weui-search-bar__input {
		color: #DDDDDD;
	}
</style>