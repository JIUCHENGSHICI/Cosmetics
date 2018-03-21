<!--时间轴-->
<template>
	<div class="axis">
		<div class="axis-top">
			<div class="axis-item text-center" @click="setModel(1)" :class="[{'font-red':model==1}]">
				<div class="time">11:00</div>
				<span class="font-12 axis-hint" :class="[{'border-bottom':model==1}]">抢购中</span>
			</div>
			<div class="axis-item text-center" @click="setModel(2)" :class="[{'font-red':model==2}]">
				<div class="time">12:00</div>
				<span class="font-12 axis-hint" :class="[{'border-bottom':model==2}]">抢购中</span>
			</div>
			<div class="axis-item text-center" @click="setModel(3)" :class="[{'font-red':model==3}]">
				<div class="time">13:00</div>
				<span class="font-12 axis-hint" :class="[{'border-bottom':model==3}]">抢购中</span>
			</div>
			<div class="axis-item text-center" @click="setModel(4)" :class="[{'font-red':model==4}]">
				<div class="time">14:00</div>
				<span class="font-12 axis-hint" :class="[{'border-bottom':model==4}]">抢购中</span>
			</div>
			<div class="axis-item text-center" @click="setModel(5)" :class="[{'font-red':model==5}]">
				<div class="time">15:00</div>
				<span class="font-12 axis-hint" :class="[{'border-bottom':model==5}]">抢购中</span>
			</div>
			<div class="axis-item text-center" @click="setModel(6)" :class="[{'font-red':model==6}]">
				<div class="time">16:00</div>
				<span class="font-12 axis-hint" :class="[{'border-bottom':model==6}]">抢购中</span>
			</div>
		</div>
		<div class="axis-bottom">
			<div class="" v-if='model==1'>
				<div class="axis-img">
					<img src="../../assets/ImgThree/right-bottom.jpg" />
				</div>
			</div>
			<div class="" v-if='model==2'>
				<div class="axis-img">
					<img src="../../assets/ImgThree/right-top.jpg" />
				</div>
			</div>
			<div class="" v-if='model==3'>
				<div class="axis-img">
					<img src="../../assets/ImgThree/right-bottom.jpg" />
				</div>
			</div>
			<div class="" v-if='model==4'>
				<div class="axis-img">
					<img src="../../assets/ImgThree/right-top.jpg" />
				</div>
			</div>
			<div class="" v-if='model==5'>
				<div class="axis-img">
					<img src="../../assets/ImgThree/right-bottom.jpg" />
				</div>
			</div>
			<div class="" v-if='model==6'>
				<div class="axis-img">
					<img src="../../assets/ImgThree/right-top.jpg" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {} from "vux";
	export default {
		mounted() {},
		components: {},
		data() {
			return {
				model: 1
			};
		},
		methods: {
			setModel: function(type) {
				this.model = type;
			},
		},
	};
</script>

<style>
	@import url("axis.css");
	@import url("../../assets/app.css");
</style>
<style scoped>
	.axis-top {
		width: 100%;
		/*white-space: nowrap;*/
		background: #DDDDDD;
		overflow-x: auto;
	}
	
	.axis .axis-item {
		display: inline-block;
	}
	
	.axis .time {
		font-size: 25px;
	}
	
	.axis .border-bottom {
		border-bottom: 2px solid #f00;
	}
	/*下边的图片*/
	
	.axis .axis-img img {
		width: 100%;
		height: 170px;
	}
</style>