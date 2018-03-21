<!--首页的滚动字幕下边的分类-->
<template>
	<div class="time-line">
		<view-box>
			<div class="container-fluid drag">
				<!--顶部的拖动导航开始-->
				<div id="timeNav" class="swiper-container gallery-thumbs">
					<div class="swiper-wrapper">
						<div class="swiper-slide active" data-index="1">
							<div class="">21:00</div>
							<span class="hint">昨日精选</span>
						</div>
						<div class="swiper-slide" data-index="2">
							<div class="">09:00</div>
							<span class="hint">抢购中</span>
						</div>
						<div class="swiper-slide" data-index="3">
							<div class="">10:00</div>
							<span class="hint">抢购中</span>
						</div>
						<div class="swiper-slide" data-index="4">
							<div class="">11:00</div>
							<span class="hint">预热中</span>
						</div>
						<div class="swiper-slide" data-index="5">
							<div class="">12:00</div>
							<span class="hint">预热中</span>
						</div>
					</div>
				</div>
				<!--顶部的拖动导航结束-->
				<!--拖动导航对应的下边的内容开始-->
				<div class="swiper-container gallery-top">
					<div class="swiper-wrapper" style="height: 80vh">
						<div class="swiper-slide">
							<div class="time-line-img text-center">
								<img src="../../assets/ImgThree/right-bottom.jpg" />
							    <div class="triangle"></div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="time-line-img">
								<img src="../../assets/ImgThree/right-top.jpg" />
								<div class="triangle"></div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="time-line-img">
								<img src="../../assets/user.png" />
								<div class="triangle"></div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="time-line-img">
								<img src="../../assets/ImgThree/right-bottom.jpg" />
								<div class="triangle"></div>
							</div>
						</div>
						<div class="swiper-slide">
							<div class="time-line-img">
								<img src="../../assets/ImgThree/right-bottom.jpg" />
								<div class="triangle"></div>
							</div>
						</div>
					</div>
				</div>
				<!--拖动导航对应的下边的内容结束-->
			</div>
		</view-box>
	</div>
</template>
<script>
	import $ from "../../../static/jquery.js";
	import Swiper from "../../../static/swiper.js";
	import { XHeader, ViewBox } from "vux";
	export default {
		mounted() {
			this.nav();
		},
		components: {
			XHeader,
			ViewBox
		},
		data() {
			return {};
		},
		methods: {
			nav() {
				var galleryTop = new Swiper(".gallery-top", {
					spaceBetween: 10,
					onTransitionStart: function(swiper) {
						var id = swiper.activeIndex;
						console.log(id);
						$("#timeNav  .active").removeClass("active");
						$("[data-index='" + (id + 1) + "']").addClass("active");
						mySwiper.slideTo(id - 1, 500);
					}
				});
				var mySwiper = new Swiper("#timeNav", {
					freeMode: true,
					freeModeMomentumRatio: 0.5,
					slidesPerView: "auto"
				});
				var swiperWidth = mySwiper.container[0].clientWidth;
				var maxTranslate = mySwiper.maxTranslate();
				var maxWidth = -maxTranslate + swiperWidth / 2;
				$(".swiper-container").on("touchstart", function(e) {
					//				e.preventDefault()
				});
				$("#timeNav .swiper-slide").on("click", function(e) {
					//				e.preventDefault();
					var id = $(this).attr("data-index");
					galleryTop.slideTo(id - 1, 0);
				});
				mySwiper.on("tap", function(swiper, e) {
					//				e.preventDefault();
					var slide = swiper.slides[swiper.clickedIndex];
					var slideLeft = slide.offsetLeft;
					var slideWidth = slide.clientWidth;
					var slideCenter = slideLeft + slideWidth / 2;
					// 被点击slide的中心点
					mySwiper.setWrapperTransition(300);
					if(slideCenter < swiperWidth / 2) {
						mySwiper.setWrapperTranslate(0);
					} else if(slideCenter > maxWidth) {
						mySwiper.setWrapperTranslate(maxTranslate);
					} else {
						var nowTlanslate = slideCenter - swiperWidth / 2;

						mySwiper.setWrapperTranslate(-nowTlanslate);
					}

					$("#timeNav  .active").removeClass("active");

					$("#timeNav .swiper-slide")
						.eq(swiper.clickedIndex)
						.addClass("active");
				});
			}
		},
	};
</script>

<style scoped>
	@import url("../../assets/swiper.css");
	@import url("../../assets/app.css");
	@import url("timeLine.css");
	@import url("swiper.css");
</style>