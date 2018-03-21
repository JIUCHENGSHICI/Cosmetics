// @ts-nocheck
require('font-awesome-webpack');
//require('babel-core/register');
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import MintUI from 'mint-ui'
import { ToastPlugin } from 'vux'
import { ConfirmPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(MintUI)

// @ts-nocheck
var Url = {};
Url.install = function(Vue, options) {
	var server = 'http://cosmetics.com/index.php/';
	//var server = 'http://120.78.162.200:12138/index.php/';
	var serverAdmin = server + 'Admin/';
	var serverHome = server + 'Home/';
	//获得处理过的地址，主要用于获得图片的地址
	Vue.prototype.$getUrl = function(url) {
		if(!url) {
			console.warn('【url为空】：' + url);
			return '';
		}
		//开始判断是不是http开头，如果是就不再添加头了
		var _url;
		if(url.indexOf('http') == -1) {
			_url = server + url;
		} else {
			_url = url;
		}
		//取出index.php
		_url = _url.replace('index.php/', '');
		return _url;

	}
	//服务器地址
	Vue.prototype.$server = server;
	Vue.prototype.$serverAdmin = serverAdmin;
	Vue.prototype.$serverHome = serverHome;
	//上传文件地址
	Vue.prototype.$serverUpFile = serverHome + "Use/upFile";
}
//起源插件
var Origin = {};
Origin.install = function(Vue, options) {

	Vue.prototype.$get = function(url, data, success, error) {

		if(data.token == null) {
			data.token = localStorage.token ? localStorage.token : '';
		}
		if(data.user_id == null) {
			data.user_id = localStorage.user_id ? localStorage.user_id : '';
		}

		if(url.indexOf("http") == -1) {
			//没有http
			url = this.$serverHome + url;
			//url = this.$serverAdmin + url;
		}
		//		data.isClient = true;
		$.ajax({
			url: url,
			type: 'get',
			data: data,
			//			xhrFields: {
			//				withCredentials: true
			//			},
			success(res) {
				try {
					res = JSON.parse(res);
				} catch(error) {
					console.error(url + '：接口出现错误！');
					console.error(error);
					console.error(res);
					if(error) {
						error(false, error);
					}
					return false;
				}

				//登录验证
				if(res.res == -992 || res.res == -991) {
					router.push({
						replace: true,
						path: '/login/login'
					});
				} else {
					if(success) {
						success(res);
					}
				}
			}
		});

	}

	Vue.prototype.$post = function(url, data, success, error) {
		if(data.token == null) {
			data.token = localStorage.token ? localStorage.token : '';
		}
		if(data.user_id == null) {
			data.user_id = localStorage.user_id ? localStorage.user_id : '';
		}
		if(url.indexOf("http") == -1) {
			//没有http
			url = this.$serverHome + url;
			//url = this.$serverAdmin + url;
		}
		//		data.isClient = true;
		$.ajax({
			url: url,
			type: 'post',
			data: data,
			//			xhrFields: {
			//				withCredentials: true
			//			},
			// crossDomain: true,
			success(res) {

				try {
					res = JSON.parse(res);
				} catch(error) {
					console.error(url + '：接口出现错误！');
					console.error(error);
					console.error(res);
					if(error) {
						error(false, error);
					}
					return false;
				}

				//登录验证
				if(res.res == -992 || res.res == -991) {
					//登录失败跳转登录页
					router.push({
						replace: true,
						path: '/login/login'
					});
				} else {
					if(success) {
						success(res);
					}
				}
			}

		});

	}

	Vue.prototype.$getTextCount = function(str) {
		if(str == null || str == undefined) {
			str = '';
		}
		return str.length;
	}

}
Vue.use(Origin)
Vue.use(Url)

// //首页通知滚动下边的分类	
// import cate from './components/cate/cate'
// //轮播组件
// import swiper from './components/swiper/swiper'
// //通知滚动
// import notice from './components/notice/notice'
// //左右滚动Scroller
// import scroller from './components/scroller/scroller'
// //商品card
// import goodsCard from './components/goodsCard/goodsCard'
// //三张图片的组件
// import imgThree from './components/imgThree/imgThree'
// //搜索组件
// import search from './components/search/search'
// //测试组件
import axis from './components/axis/axis'
//发现组件
import find from './components/find/find'

//个人中心(页面级)
const user = r => require.ensure([], () => r(require('./pages/user/user')));

//首页(页面级)
const index = r => require.ensure([], () => r(require('./pages/index/index')));

//用户设置页面(页面级)
const userSet = r => require.ensure([], () => r(require('./pages/userSet/userSet')));

//设置页面(页面级)
const set = r => require.ensure([], () => r(require('./pages/set/set')));

//商品详情页面(页面级)
const goodsInfo = r => require.ensure([], () => r(require('./pages/goodsInfo/goodsInfo')));

//商品列表(页面级)
const goodsList = r => require.ensure([], () => r(require('./pages/goodsList/goodsList')));

//我的收藏(页面级)
const collect = r => require.ensure([], () => r(require('./pages/collect/collect')));

//我的订单(页面级)
const order = r => require.ensure([], () => r(require('./pages/order/order')));

//我的订单(页面级)
const message = r => require.ensure([], () => r(require('./pages/message/message')));

//搜索页面(页面级)
const search = r => require.ensure([], () => r(require('./pages/search/search')));

//分类页面 class(页面级)
const classify = r => require.ensure([], () => r(require('./pages/class/class')));

//收货地址页面 (页面级)
const address = r => require.ensure([], () => r(require('./pages/address/address')));

//新增收货地址页面 (页面级)
const addAddress = r => require.ensure([], () => r(require('./pages/addAddress/addAddress')));

//社交页面 (页面级)
const social = r => require.ensure([], () => r(require('./pages/social/social')));

//反馈页面 (页面级)
const feedback = r => require.ensure([], () => r(require('./pages/feedback/feedback')));

//购物袋页面 (页面级)
const shopBag = r => require.ensure([], () => r(require('./pages/shopBag/shopBag.vue')));

//我是店主页面 (页面级)
const shopkeeper = r => require.ensure([], () => r(require('./pages/shopkeeper/shopkeeper')));

//提交订单(页面级)
const postOrder = r => require.ensure([], () => r(require('./pages/postOrder/postOrder')));

//赔款页面(页面级)
const indemnity = r => require.ensure([], () => r(require('./pages/indemnity/indemnity')));

//关于我们页面(页面级)
const about = r => require.ensure([], () => r(require('./pages/about/about')));

//提现页面(页面级)
const cash = r => require.ensure([], () => r(require('./pages/cash/cash')));

//店铺管家页面(页面级)
const housekeeper = r => require.ensure([], () => r(require('./pages/housekeeper/housekeeper')));

//客户管理页面(页面级)
const customer = r => require.ensure([], () => r(require('./pages/customer/customer')));

//销售订单页面(页面级)
const saleOrder = r => require.ensure([], () => r(require('./pages/saleOrder/saleOrder')));

//订单详情页面(页面级)
const orderInfo = r => require.ensure([], () => r(require('./pages/orderInfo/orderInfo')));

//地址选择页面(页面级)(从首页进去的)
const addressSwitch = r => require.ensure([], () => r(require('./pages/addressSwitch/addressSwitch')));

//社交详情页面(页面级)
const socialInfo = r => require.ensure([], () => r(require('./pages/socialInfo/socialInfo')));

//社交详情页面(页面级)
const personal = r => require.ensure([], () => r(require('./pages/personal/personal')));

//发布动态页面(页面级)
const release = r => require.ensure([], () => r(require('./pages/release/release')));

//发布动态页面(页面级)
const coupon = r => require.ensure([], () => r(require('./pages/coupon/coupon')));

//帮助与客服页面(页面级)
const tel = r => require.ensure([], () => r(require('./pages/tel/tel')));

//登陆页面(页面级)
const login = r => require.ensure([], () => r(require('./pages/login/login')));

//手机号登陆页面(页面级)
const phoneLogin = r => require.ensure([], () => r(require('./pages/phoneLogin/phoneLogin')));

//新订单页面(页面级)
const newOrder = r => require.ensure([], () => r(require('./pages/newOrder/newOrder')));

//我的下线页面(页面级)
const offline = r => require.ensure([], () => r(require('./pages/offline/offline')));

import $ from 'jquery';
const routes = [{
		path: '/',
		component: index,
		meta: {
			index: 0
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/index',
		name: '/index',
		component: index,
		meta: {
			index: 0
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/indemnity/indemnity',
		component: indemnity,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/about/about',
		component: about,
		meta: {
			index: 3
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/cash/cash',
		component: cash,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/housekeeper/housekeeper',
		component: housekeeper,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/customer/customer',
		component: customer,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/saleOrder/saleOrder',
		component: saleOrder,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/orderInfo/orderInfo',
		name: '/orderInfo/orderInfo',
		component: orderInfo,
		meta: {
			index: 3
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/addressSwitch/addressSwitch',
		component: addressSwitch,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/socialInfo/socialInfo',
		name: '/socialInfo/socialInfo',
		component: socialInfo,
		meta: {
			index: 2
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/personal/personal',
		name: '/personal/personal',
		component: personal,
		meta: {
			index: 3
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/release/release',
		name: '/release/release',
		component: release,
		meta: {
			index: 2
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/coupon/coupon',
		component: coupon,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/tel/tel',
		component: tel,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/login/login',
		component: login,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/phoneLogin/phoneLogin',
		component: phoneLogin,
		meta: {
			index: 2
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/newOrder/newOrder',
		name: '/newOrder/newOrder',
		component: newOrder,
		meta: {
			index: 2
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/offline/offline',
		name: '/offline/offline',
		component: offline,
		meta: {
			index: 1
		}, //meta对象的index用来定义当前路由的层级,由小到大,由低到高
	},
	{
		path: '/social',
		component: social,
		meta: {
			index: 0
		},
	},
	{
		path: '/shopBag',
		name: '/shopBag',
		component: shopBag,
		meta: {
			index: 0
		},
	},
	{
		path: '/postOrder',
		name: '/postOrder',
		component: postOrder,
		meta: {
			index: 1
		},
	},
	{
		path: '/order/order',
		name: '/order/order',
		component: order,
		meta: {
			index: 2
		},
	},
	{
		path: '/user',
		component: user,
		meta: {
			index: 0
		},
	},
	{
		path: '/shopkeeper',
		component: shopkeeper,
		meta: {
			index: 0
		},
	},
	{
		path: '/search/search',
		component: search,
		meta: {
			index: 6
		},
	},
	{
		path: '/feedback/feedback',
		component: feedback,
		meta: {
			index: 2
		},
	},

	{
		path: '/addAddress/addAddress',
		name: '/addAddress/addAddress',
		component: addAddress,
		meta: {
			index: 4
		},
	},
	{
		path: '/address/address',
		component: address,
		meta: {
			index: 3
		},
	},
	{
		path: '/class/class',
		component: classify,
		meta: {
			index: 1
		},
	},

	{
		path: '/message/message',
		name: '/message/message',
		component: message,
		meta: {
			index: 1
		},
	},
	{
		path: '/collect/collect',
		component: collect,
		meta: {
			index: 1
		},
	},
	{
		path: '/goodsList/goodsList',
		name: '/goodsList/goodsList',
		component: goodsList,
		meta: {
			index: 1
		},
	},
	{
		path: '/goodsInfo/goodsInfo',
		component: goodsInfo,
		meta: {
			index: 1
		},
	},
	{
		path: '/set/set',
		component: set,
		meta: {
			index: 2
		},
	},
	{
		path: '/userSet/userSet',
		component: userSet,
		meta: {
			index: 2
		},
	},
	{
		path: '/goodsInfo/goodsInfo',
		name: '/goodsInfo/goodsInfo',
		component: goodsInfo,
		meta: {
			index: 2
		},
	},
	{
		path: '/axis/axis',
		name: '/axis/axis',
		component: axis,
		meta: {
			index: 1
		},
	},
	{
		path: '/find/find',
		name: '/find/find',
		component: find,
		meta: {
			index: 1
		},
	}
]

const router = new VueRouter({
	routes,
	//	mode: 'abstract'
});
router.push('/index');

FastClick.attach(document.body)
Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
	router,
	render: h => h(App),
	mounted() {
		this.$get(
			"index/isLogin", {},
			res => {}
		);
	}
}).$mount('#app-box')