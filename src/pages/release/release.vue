<template>
	<div class="release">
		<!--顶部导航栏开始-->
		<x-header @on-click-back="toSocial" :left-options="{backText: '返回',preventGoBack:true}">
			<a slot="left"></a>
			发布动态
			<a slot="right" @click="release" class="font-12">发布</a>
		</x-header>
		<!--顶部导航栏结束-->
		<view-box>
			<div @click="qqq">
				打印
			</div>
			<div class="release-box">
				<group>
					<x-input v-model='release_title' title="标题" placeholder="请输入标题" novalidate placeholder-align="right"></x-input>
				</group>
				<group>
					<x-textarea v-model="release_text" :max="225" :placeholder="('分享购物晒单与使用心得')" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
				</group>
				<div class="add-box">
					<!--<div class="add">
						<div class="add-icon font-gray font-20 font-gray text-center">
							+
						</div>
						<div class="add-text font-gray font-12 text-center">
							添加图片
						</div>
					</div>-->
					<!--引入开始-->
					<!--<div id="app">
						<div class="hello">
							<div class="upload">
								<div class="upload_warp">
									<div class="upload_warp_left" @click="fileClick">
										<img src="../../assets/upload.png">
									</div>
								</div>
								<div class="upload_warp_text">
									选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}
								</div>
								<input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none" />
								<div class="upload_warp_img" v-show="imgList.length!=0">
									<div class="upload_warp_img_div" v-for="(item,index) of imgList">
										<div class="upload_warp_img_div_top">
											<div class="upload_warp_img_div_text">
												{{item.file.name}}
											</div>
											<img src="../../assets/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
										</div>
										<img :src="item.file.src">
									</div>
								</div>
							</div>
						</div>
					</div>-->
					<!--引入结束-->
					<!--<uploader :max="varmax" :images="images" size="small" :upload-url="$serverUpFile" :auto-upload="autoUpload">

					</uploader>-->
					<!--e了么-->
					<el-upload :action="this.$serverUpFile" :data="upLoadData" :on-success="handleAvatarSuccess" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisible">
						<img width="50%" :src="dialogImageUrl" alt="">
					</el-dialog>
					<!--e了么-->
				</div>
				<!--添加商品提示开始-->
				<group class="margin-top-half" @click.native="toShopBag">
					<cell :border-intent="false" :title="('添加商品')" :value="('')" is-link></cell>
				</group>
				<!--添加商品提示结束-->
				<div class="shop-box">
					<flexbox :gutter="4" orient="horizontal">
						<flexbox-item :span="6" v-for="(item,index) in shopList">
							<div class="shop-card">
								<flexbox :gutter="0">
									<flexbox-item :span="4">
										<div class="shop-img">
											<img :src="$getUrl(item.img_list[0].src)" />
										</div>
									</flexbox-item>
									<flexbox-item :span="8">
										<div class="shop-title two-line font-12">
											{{item.goods_title}}
										</div>
										<div class="float-right font-12" @click.stop="delShop(item,index,shopList)">
											×
										</div>
									</flexbox-item>
								</flexbox>
							</div>
						</flexbox-item>
					</flexbox>
				</div>
			</div>
			<!--提示开始-->
			<!--<div>
				<confirm v-model="show" :title="('提示')" @on-confirm="onConfirm">
					<p style="text-align:center;">{{ ('确定要删除该商品吗？') }}</p>
				</confirm>
			</div>-->
			<!--提示结束-->
		</view-box>
	</div>
</template>
<script>
	import { XHeader, ViewBox, Group, Cell, XTextarea, Flexbox, FlexboxItem, Confirm, ConfirmPlugin, XInput } from 'vux';
	import Vue from 'vue';
	import { Upload, Button, Dialog } from 'element-ui';
	Vue.use(Upload);
	Vue.use(Button);
	Vue.use(Dialog);
	//	import Uploader from 'vux-uploader'
	export default {
		components: {
			//Uploader,
			XHeader,
			ViewBox,
			Group,
			Cell,
			XTextarea,
			Flexbox,
			FlexboxItem,
			Confirm,
			ConfirmPlugin,
			XInput,
			Upload,
			Button,
			Dialog
		},
		data() {
			return {
				size: 0,
				release_text: '',
				release_title: '',
				show: false,
				img_list: [],
				shopList: [],
				goods_id_list: [],
				dialogImageUrl: '',
				dialogVisible: false,
				upLoadData: {
					user_id: localStorage.user_id,
					token: localStorage.token
				},
			}
		},
		mounted() {
			if(this.$route.params["openRelease"] == "5") {
				var shopList = this.$route.params["order"].goods_list;
				this.shopList = shopList;
			} else {
				this.shopList = [];
			}
			console.log("商品的id", this.bag_id_list);
		},
		methods: {
			onEvent(event) {
				console.log('on', event)
			},
			//点击发布输出
			release() {
				//发布标题
				var release_title = this.release_title;
				//发布文章内容
				var release_text = this.release_text;
				//图片列表
				var img_list = JSON.stringify(this.img_list);
				//商品列表 goods_id 数组 直接字符串
				for(var i = 0; i < this.shopList.length; i++) {
					var goods_id = this.shopList[i].goods_id;
					this.goods_id_list.push(goods_id);
				}
				var goods_list = JSON.stringify(this.goods_id_list);

				if(release_title.length <= 0) {
					this.$vux.toast.show({
						text: "请输入标题",
						type: "text",
						position: "middle"
					});
					return false;
				}
				if(release_text.length <= 0) {
					this.$vux.toast.show({
						text: "请输入发布内容",
						type: "text",
						position: "middle"
					});
					return false;
				}

				this.$post(
					"dynamic/add", {
						add: {
							dynamic_title: release_title,
							dynamic_content: release_text,
							img_list: img_list,
							goods_list: goods_list
						}
					},
					res => {
						console.log(res);
						if(res.res >= 1) {
							var _this = this;
							this.$vux.toast.show({
								text: "发布成功",
								type: "text",
								position: "middle"
							});
							setTimeout(function() {
								_this.$router.push({
									path: "/social",
								});
							}, 1000)
						}
						if(res < 0) {
							this.$vux.toast.show({
								text: "网络错误,请重试",
								type: "text",
								position: "middle"
							});
							return false;
						}
					}
				);
			},
			//点击叉号删除商品
			delShop(item, index, list) {
				list.splice(index, 1);
			},
			//点击去购物袋页面
			toShopBag() {
				console.log("123");
				this.$router.push({
					path: "/shopBag",
					name: "/shopBag",
					params: {
						openShopBag: "1",
						index: 2,
						isGoodsInfo: true
					}
				});
			},
			//点击返回要返回到社交页面
			toSocial() {
				this.$router.push({
					path: "/social",
				});
			},
			//e了么
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			qqq() {
				console.log(this.img_list);
			},
			handleAvatarSuccess(res, file) {
				console.log(res.msg.src);
				this.img_list.push(res.msg.src);
				//this.imageUrl = URL.createObjectURL(file.raw);
			},
		}
	}
</script>
<style>
	@import url("release.css");
	@import url("style.css");
	@import url("../../assets/app.css");
</style>