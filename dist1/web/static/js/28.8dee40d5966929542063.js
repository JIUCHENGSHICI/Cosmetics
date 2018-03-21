webpackJsonp([28],{

/***/ "aRdD":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.personal-top {\r\n\tbackground: #000;\r\n\twidth: 100%;\r\n\theight: 200px;\n}\n.head {\r\n\tpadding: 8px 0;\n}\n.head img {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tborder-radius: 50%;\n}\n.user-head img {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\n}\r\n\r\n/*复制*/\n.content-words {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 6;\r\n\t-webkit-box-orient: vertical;\r\n\tpadding: 0 5px;\n}\r\n\r\n/*图片样式*/\n.picture-box {\r\n\tpadding: 5px;\n}\n.picture-box img {\r\n\twidth: 100%;\r\n\theight: 93.33px;\n}\r\n\r\n/*最下边的三个*/\n.handel {\r\n\ttext-align: center;\n}\n.content-handel {\r\n\tposition: relative;\n}\n.cube1 {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\ttop: 50%;\r\n\tleft: 33.33%;\r\n\theight: 50%;\r\n\tmargin: auto;\r\n\twidth: 1px;\r\n\tbackground-color: #aaaaaa;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\n}\n.cube2 {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\ttop: 50%;\r\n\tleft: 66.66%;\r\n\theight: 50%;\r\n\tmargin: auto;\r\n\twidth: 1px;\r\n\tbackground-color: #aaaaaa;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\n}\n.recommend-top {\r\n\tpadding-top: 5px;\r\n\tpadding-left: 5px;\r\n\tpadding-right: 5px;\n}\n.user-head img {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\n}\n.red {\r\n\tcolor: #f00;\n}\n.black {\r\n\tcolor: #000;\n}\r\n\r\n/*转发开始*/\n.comment-item {\r\n\tpadding: 7px 0;\n}\n.comment-item i {\r\n\tfont-size: 22px;\n}\n.cancel {\r\n\tborder-top: 1px solid #DDDDDD;\n}\r\n\r\n/*转发结束*/\n.margin-right-3 {\r\n\tmargin-right: 3px;\n}\n.shop-box {\r\n\tpadding: 0 5px;\r\n\toverflow-x: auto;\r\n\twidth: auto;\r\n\theight: 52px;\n}\n.shop {\r\n\tbackground: #DDDDDD;\r\n\tdisplay: inline-block;\n}\n.shop-head {\r\n\tpadding-top: 5px;\r\n\tpadding-left: 5px;\n}\n.shop-head img {\r\n\twidth: 40px;\r\n\theight: 40px;\n}\r\n\r\n/*商品开始*/\n.shop-box {\r\n\tpadding: 0 5px;\r\n\toverflow-x: auto;\r\n\twidth: auto;\r\n\theight: 52px;\n}\n.shop {\r\n\tbackground: #DDDDDD;\r\n\tdisplay: inline-block;\n}\n.shop-head {\r\n\tpadding-top: 5px;\r\n\tpadding-left: 5px;\n}\n.shop-head img {\r\n\twidth: 40px;\r\n\theight: 40px;\n}\r\n\r\n/*商品结束*/\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/personal/personal.vue"],"names":[],"mappings":";AACA;CACC,iBAAiB;CACjB,YAAY;CACZ,cAAc;CACd;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB;AACD;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB;;AAED,MAAM;AACN;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B,eAAe;CACf;;AAED,QAAQ;AACR;CACC,aAAa;CACb;AACD;CACC,YAAY;CACZ,gBAAgB;CAChB;;AAED,UAAU;AACV;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,mBAAmB;CACnB,eAAe;CACf,SAAS;CACT,aAAa;CACb,YAAY;CACZ,aAAa;CACb,WAAW;CACX,0BAA0B;CAC1B,oCAAoC;CACpC,4BAA4B;CAC5B;AACD;CACC,mBAAmB;CACnB,eAAe;CACf,SAAS;CACT,aAAa;CACb,YAAY;CACZ,aAAa;CACb,WAAW;CACX,0BAA0B;CAC1B,oCAAoC;CACpC,4BAA4B;CAC5B;AACD;CACC,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB;AACD;CACC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;;AAED,QAAQ;AACR;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,8BAA8B;CAC9B;;AAED,QAAQ;AACR;CACC,kBAAkB;CAClB;AACD;CACC,eAAe;CACf,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb;AACD;CACC,oBAAoB;CACpB,sBAAsB;CACtB;AACD;CACC,iBAAiB;CACjB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ,aAAa;CACb;;AAED,QAAQ;AACR;CACC,eAAe;CACf,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb;AACD;CACC,oBAAoB;CACpB,sBAAsB;CACtB;AACD;CACC,iBAAiB;CACjB,kBAAkB;CAClB;AACD;CACC,YAAY;CACZ,aAAa;CACb;;AAED,QAAQ;AACR;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,eAAe;CACf;AACD;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,gCAAgC;CAChC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;;AAED,WAAW;AACX;;CAEC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,aAAa;CACb;AACD;CACC,gCAAgC;CAChC;AACD;CACC,sBAAsB;CACtB","file":"personal.vue","sourcesContent":["\n.personal-top {\r\n\tbackground: #000;\r\n\twidth: 100%;\r\n\theight: 200px;\n}\n.head {\r\n\tpadding: 8px 0;\n}\n.head img {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tborder-radius: 50%;\n}\n.user-head img {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\n}\r\n\r\n/*复制*/\n.content-words {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 6;\r\n\t-webkit-box-orient: vertical;\r\n\tpadding: 0 5px;\n}\r\n\r\n/*图片样式*/\n.picture-box {\r\n\tpadding: 5px;\n}\n.picture-box img {\r\n\twidth: 100%;\r\n\theight: 93.33px;\n}\r\n\r\n/*最下边的三个*/\n.handel {\r\n\ttext-align: center;\n}\n.content-handel {\r\n\tposition: relative;\n}\n.cube1 {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\ttop: 50%;\r\n\tleft: 33.33%;\r\n\theight: 50%;\r\n\tmargin: auto;\r\n\twidth: 1px;\r\n\tbackground-color: #aaaaaa;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\n}\n.cube2 {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\ttop: 50%;\r\n\tleft: 66.66%;\r\n\theight: 50%;\r\n\tmargin: auto;\r\n\twidth: 1px;\r\n\tbackground-color: #aaaaaa;\r\n\t-webkit-transform: translateY(-50%);\r\n\ttransform: translateY(-50%);\n}\n.recommend-top {\r\n\tpadding-top: 5px;\r\n\tpadding-left: 5px;\r\n\tpadding-right: 5px;\n}\n.user-head img {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\n}\n.red {\r\n\tcolor: #f00;\n}\n.black {\r\n\tcolor: #000;\n}\r\n\r\n/*转发开始*/\n.comment-item {\r\n\tpadding: 7px 0;\n}\n.comment-item i {\r\n\tfont-size: 22px;\n}\n.cancel {\r\n\tborder-top: 1px solid #DDDDDD;\n}\r\n\r\n/*转发结束*/\n.margin-right-3 {\r\n\tmargin-right: 3px;\n}\n.shop-box {\r\n\tpadding: 0 5px;\r\n\toverflow-x: auto;\r\n\twidth: auto;\r\n\theight: 52px;\n}\n.shop {\r\n\tbackground: #DDDDDD;\r\n\tdisplay: inline-block;\n}\n.shop-head {\r\n\tpadding-top: 5px;\r\n\tpadding-left: 5px;\n}\n.shop-head img {\r\n\twidth: 40px;\r\n\theight: 40px;\n}\r\n\r\n/*商品开始*/\n.shop-box {\r\n\tpadding: 0 5px;\r\n\toverflow-x: auto;\r\n\twidth: auto;\r\n\theight: 52px;\n}\n.shop {\r\n\tbackground: #DDDDDD;\r\n\tdisplay: inline-block;\n}\n.shop-head {\r\n\tpadding-top: 5px;\r\n\tpadding-left: 5px;\n}\n.shop-head img {\r\n\twidth: 40px;\r\n\theight: 40px;\n}\r\n\r\n/*商品结束*/\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "cIuR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-header/index.vue + 3 modules
var x_header = __webpack_require__("OVFY");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/view-box/index.vue + 3 modules
var view_box = __webpack_require__("utzS");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox.vue + 3 modules
var flexbox = __webpack_require__("EsTV");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox-item.vue + 3 modules
var flexbox_item = __webpack_require__("Ris4");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/popup/index.vue + 4 modules
var popup = __webpack_require__("bWFG");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/loading/index.vue + 3 modules
var loading = __webpack_require__("3CVM");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/personal/personal.vue








/* harmony default export */ var personal = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Popup: popup["a" /* default */],
    Loading: loading["a" /* default */]
  },
  data() {
    return {
      open_forward: false,
      personalCard: [],
      show: false,
      user_name: '',
      user_info: ''
    };
  },
  mounted() {
    this.update();

    console.log("传过来的user_id", this.$route.params.user_id);
  },
  methods: {
    update() {
      this.show = true;

      this.$post("dynamic/getList", {}, res => {
        this.personalCard = res.msg;
        this.show = false;
        if (res.res >= 1) {}
        if (res < 0) {}
      });
    },

    toGoodsInfo(item) {
      var goods_id = item.goods_id;
      this.$router.push({
        path: "/goodsInfo/goodsInfo",
        params: {
          goods_id: goods_id
        }
      });
    },

    toSocialInfo() {
      this.$router.push({
        path: "/socialInfo/socialInfo",
        name: '/socialInfo/socialInfo',
        params: {
          openComment: "2"
        }
      });
    },

    thumbs(item) {
      var dynamic_id = item.dynamic_id;

      this.$post("dynamic/up", {
        dynamic_id: dynamic_id
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          item.is_thumbs_up == false;
          this.$vux.toast.show({
            text: "点赞成功",
            type: "text",
            position: "middle"
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    cancel_thumbs(item) {
      var dynamic_id = item.dynamic_id;
      this.$post("dynamic/delUp", {
        dynamic_id: dynamic_id
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          item.is_thumbs_up == true;
          this.$vux.toast.show({
            text: "已取消点赞",
            type: "text",
            position: "middle"
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    toComment() {
      this.$router.push({
        path: "/socialInfo/socialInfo",
        name: '/socialInfo/socialInfo',
        params: {
          openComment: "1"
        }
      });
    },
    toGoodsInfo() {
      this.$router.push({
        path: "/goodsInfo/goodsInfo"

      });
    },

    openForward() {
      this.open_forward = true;
    },

    cancel() {
      this.open_forward = false;
    },

    toGoodsInfo(item) {
      var goods_id = item.goods_id;
      this.$router.push({
        path: "/goodsInfo/goodsInfo",
        name: '/goodsInfo/goodsInfo',
        params: {
          goods_id: goods_id
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/personal/personal.vue








/* harmony default export */ var personal_personal = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Popup: popup["a" /* default */],
    Loading: loading["a" /* default */]
  },
  data() {
    return {
      open_forward: false,
      personalCard: [],
      show: false,
      user_name: '',
      user_info: ''
    };
  },
  mounted() {
    this.update();

    console.log("传过来的user_id", this.$route.params.user_id);
  },
  methods: {
    update() {
      this.show = true;

      this.$post("dynamic/getList", {}, res => {
        this.personalCard = res.msg;
        this.show = false;
        if (res.res >= 1) {}
        if (res < 0) {}
      });
    },

    toGoodsInfo(item) {
      var goods_id = item.goods_id;
      this.$router.push({
        path: "/goodsInfo/goodsInfo",
        params: {
          goods_id: goods_id
        }
      });
    },

    toSocialInfo() {
      this.$router.push({
        path: "/socialInfo/socialInfo",
        name: '/socialInfo/socialInfo',
        params: {
          openComment: "2"
        }
      });
    },

    thumbs(item) {
      var dynamic_id = item.dynamic_id;

      this.$post("dynamic/up", {
        dynamic_id: dynamic_id
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          item.is_thumbs_up == false;
          this.$vux.toast.show({
            text: "点赞成功",
            type: "text",
            position: "middle"
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    cancel_thumbs(item) {
      var dynamic_id = item.dynamic_id;
      this.$post("dynamic/delUp", {
        dynamic_id: dynamic_id
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          item.is_thumbs_up == true;
          this.$vux.toast.show({
            text: "已取消点赞",
            type: "text",
            position: "middle"
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误",
            type: "text",
            position: "middle"
          });
        }
      });
    },

    toComment() {
      this.$router.push({
        path: "/socialInfo/socialInfo",
        name: '/socialInfo/socialInfo',
        params: {
          openComment: "1"
        }
      });
    },
    toGoodsInfo() {
      this.$router.push({
        path: "/goodsInfo/goodsInfo"

      });
    },

    openForward() {
      this.open_forward = true;
    },

    cancel() {
      this.open_forward = false;
    },

    toGoodsInfo(item) {
      var goods_id = item.goods_id;
      this.$router.push({
        path: "/goodsInfo/goodsInfo",
        name: '/goodsInfo/goodsInfo',
        params: {
          goods_id: goods_id
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-61ce96de","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pages/personal/personal.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about"},[_c('x-header',{attrs:{"left-options":{backText: '返回'}}},[_c('a',{attrs:{"slot":"left"},slot:"left"}),_vm._v("\n\t\t个人主页\n\t")]),_vm._v(" "),_c('view-box',[_c('div',[_c('loading',{attrs:{"show":_vm.show}})],1),_vm._v(" "),_c('div',{staticClass:"personal"},[_c('div',{staticClass:"personal-top"},[_c('div',{staticClass:"head text-center"},[_c('img',{attrs:{"src":__webpack_require__("Nygh")}})]),_vm._v(" "),_c('div',{staticClass:"personal-name text-center two-line font-white"},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.user_name)+"\n\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"personal-introduce text-center font-white font-12"},[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.user_info)+"\n\t\t\t\t")]),_vm._v(" "),_c('flexbox',{attrs:{"gutter":0,"wrap":"wrap"}},[_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"text-center font-white one-line"},[_c('span',[_vm._v("5")]),_vm._v(" "),_c('div',{},[_vm._v("\n\t\t\t\t\t\t\t\t被关注\n\t\t\t\t\t\t\t")])])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"text-center font-white one-line"},[_c('span',[_vm._v("4")]),_vm._v(" "),_c('div',{},[_vm._v("\n\t\t\t\t\t\t\t\t被赞\n\t\t\t\t\t\t\t")])])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"text-center font-white one-line"},[_c('span',[_vm._v("4")]),_vm._v(" "),_c('div',[_vm._v("\n\t\t\t\t\t\t\t\t动态\n\t\t\t\t\t\t\t")])])])],1)],1),_vm._v(" "),_vm._l((_vm.personalCard),function(group,j){return _c('div',{staticClass:"panel",on:{"click":_vm.toSocialInfo}},[_c('div',{staticClass:"recommend-top"},[_c('flexbox',{attrs:{"gutter":0}},[_c('flexbox-item',{attrs:{"span":2.5}},[_c('div',{staticClass:"user-head"},[_c('img',{attrs:{"src":__webpack_require__("Nygh")}})])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":9.5}},[_c('div',{staticClass:"user-name font-15 font-black one-line"},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(group.user_id)+"\n\t\t\t\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"publish-time font-12 font-gray one-line"},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(group.add_time)+"\n\t\t\t\t\t\t\t")])])],1)],1),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"padding-5 one-line font-14"},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(group.dynamic_title)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"content-words"},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(group.dynamic_content)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"content-picture"},[_c('flexbox',{attrs:{"gutter":0,"wrap":"wrap"}},[_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"picture-box"},[_c('img',{attrs:{"src":__webpack_require__("oY7U")}})])])],1)],1),_vm._v(" "),_c('div',{staticClass:"shop-box"},[_c('flexbox',{attrs:{"gutter":4,"orient":"horizontal"}},_vm._l((group.goods_list),function(item,i){return _c('flexbox-item',{attrs:{"span":6},nativeOn:{"click":function($event){$event.stopPropagation();_vm.toGoodsInfo(item)}}},[_c('div',{staticClass:"shop",staticStyle:{"width":"150px"}},[_c('flexbox',{attrs:{"gutter":0}},[_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"shop-head"},[_c('img',{attrs:{"src":_vm.$getUrl(item.img_list[0].src)}})])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":8}},[_c('div',{staticClass:"shop-title two-line font-12"},[_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+_vm._s(item.goods_title)+"\n\t\t\t\t\t\t\t\t\t\t\t")])])],1)],1)])}))],1),_vm._v(" "),_c('div',{staticClass:"content-handel"},[_c('flexbox',{attrs:{"gutter":0,"wrap":"wrap"}},[_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"handel fabulous"},[(group.is_thumbs_up==true)?_c('i',{staticClass:"fa fa-thumbs-o-up margin-right-3",on:{"click":function($event){$event.stopPropagation();_vm.thumbs(group)}}}):_c('i',{staticClass:"font-red fa fa-thumbs-o-up margin-right-3",on:{"click":function($event){$event.stopPropagation();_vm.cancel_thumbs(group)}}})])]),_vm._v(" "),_c('div',{staticClass:"cube1"}),_vm._v(" "),_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"handel comment"},[_c('i',{staticClass:"fa fa-commenting-o margin-right-3",on:{"click":_vm.toComment}}),_vm._v("18\n\t\t\t\t\t\t\t\t")])]),_vm._v(" "),_c('div',{staticClass:"cube2"}),_vm._v(" "),_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"handel forward"},[_c('i',{staticClass:"fa fa-external-link margin-right-3",on:{"click":function($event){$event.stopPropagation();return _vm.openForward($event)}}}),_vm._v("9\n\t\t\t\t\t\t\t\t")])])],1)],1)])])})],2),_vm._v(" "),_c('popup',{model:{value:(_vm.open_forward),callback:function ($$v) {_vm.open_forward=$$v},expression:"open_forward"}},[_c('flexbox',{attrs:{"gutter":0,"wrap":"wrap"}},[_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"comment-item text-center"},[_c('i',{staticClass:"fa fa-wechat"}),_vm._v(" "),_c('div',{staticClass:"comment-title"},[_vm._v("\n\t\t\t\t\t\t\t微信好友\n\t\t\t\t\t\t")])])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"comment-item text-center"},[_c('i',{staticClass:"fa fa-chrome"}),_vm._v(" "),_c('div',{staticClass:"comment-title"},[_vm._v("\n\t\t\t\t\t\t\t朋友圈\n\t\t\t\t\t\t")])])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"comment-item text-center"},[_c('i',{staticClass:"fa fa-qq"}),_vm._v(" "),_c('div',{staticClass:"comment-title"},[_vm._v("\n\t\t\t\t\t\t\tQQ\n\t\t\t\t\t\t")])])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":4}},[_c('div',{staticClass:"comment-item text-center"},[_c('i',{staticClass:"fa fa-gg"}),_vm._v(" "),_c('div',{staticClass:"comment-title"},[_vm._v("\n\t\t\t\t\t\t\t复制链接\n\t\t\t\t\t\t")])])])],1),_vm._v(" "),_c('div',{staticClass:"cancel text-center font-15 padding-5",on:{"click":_vm.cancel}},[_vm._v("\n\t\t\t\t取消\n\t\t\t")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_personal_personal = (esExports);
// CONCATENATED MODULE: ./src/pages/personal/personal.vue
function injectStyle (ssrContext) {
  __webpack_require__("nQS3")
}
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  personal_personal,
  pages_personal_personal,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_personal_personal = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "nQS3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aRdD");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("58b55058", content, true, {});

/***/ })

});
//# sourceMappingURL=28.8dee40d5966929542063.js.map