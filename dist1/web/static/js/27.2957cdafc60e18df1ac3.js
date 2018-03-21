webpackJsonp([27],{

/***/ "1byp":
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

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/coupon/coupon.vue






/* harmony default export */ var coupon = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  data() {
    return {
      couponList: [{
        money: 5,
        title: '案例的骄傲的垃圾大了肯德基啊',
        full: 78,
        start_time: '2017-01-02',
        end_time: '2018-02-03',
        use: '大宗11111'
      }, {
        money: 15,
        title: 'djdhkdajdalkdjaldjaldja',
        full: 258,
        start_time: '2017-07-02',
        end_time: '2018-08-03',
        use: '没打开来得及澳康达'
      }, {
        money: 78,
        title: '就老是打聚少离多坚实的洛杉矶代理商',
        full: 500,
        start_time: '2016-01-02',
        end_time: '2018-02-03',
        use: '你的客户打开'
      }]
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/coupon/coupon.vue






/* harmony default export */ var coupon_coupon = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */]
  },
  data() {
    return {
      couponList: [{
        money: 5,
        title: '案例的骄傲的垃圾大了肯德基啊',
        full: 78,
        start_time: '2017-01-02',
        end_time: '2018-02-03',
        use: '大宗11111'
      }, {
        money: 15,
        title: 'djdhkdajdalkdjaldjaldja',
        full: 258,
        start_time: '2017-07-02',
        end_time: '2018-08-03',
        use: '没打开来得及澳康达'
      }, {
        money: 78,
        title: '就老是打聚少离多坚实的洛杉矶代理商',
        full: 500,
        start_time: '2016-01-02',
        end_time: '2018-02-03',
        use: '你的客户打开'
      }]
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-63a36383","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pages/coupon/coupon.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"coupon"},[_c('x-header',{attrs:{"left-options":{backText: '返回'}}},[_c('a',{attrs:{"slot":"left"},slot:"left"}),_vm._v("\n\t\t优惠券\n\t")]),_vm._v(" "),_c('view-box',[_c('div',{staticClass:"coupon-box"},_vm._l((_vm.couponList),function(item,index){return _c('div',{staticClass:"coupon-item"},[_c('flexbox',{attrs:{"gutter":0}},[_c('flexbox-item',{attrs:{"span":2.5}},[_c('div',{staticClass:"coupon-money font-red text-center"},[_vm._v("\n\t\t\t\t\t\t\t￥\n\t\t\t\t\t\t\t"),_c('span',{staticClass:"font-red font-25 font-weight"},[_vm._v(_vm._s(item.money))])])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":7}},[_c('div',{staticClass:"coupon-content"},[_c('div',{staticClass:"coupon-title font-weight font-16 one-line font-weight"},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(item.title)+"\n\t\t\t\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"coupon-info font-12 font-gray"},[_c('ul',[_c('li',{staticClass:"one-line"},[_vm._v("满"+_vm._s(item.full)+"元可用")]),_vm._v(" "),_c('li',{staticClass:"one-line"},[_vm._v(_vm._s(item.start_time)+"至"+_vm._s(item.end_time))]),_vm._v(" "),_c('li',{staticClass:"one-line"},[_vm._v("仅限于在线支付")]),_vm._v(" "),_c('li',{staticClass:"one-line"},[_vm._v("仅用于"+_vm._s(item.use))])])])])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":2.5}},[_c('div',{staticClass:"font-12 text-center font-red"},[_c('span',{staticClass:"coupon-to-shop"},[_vm._v("进店使用")])])])],1)],1)}))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_coupon_coupon = (esExports);
// CONCATENATED MODULE: ./src/pages/coupon/coupon.vue
function injectStyle (ssrContext) {
  __webpack_require__("F1Pc")
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
  coupon_coupon,
  pages_coupon_coupon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_coupon_coupon = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "F1Pc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("r7yU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("3854fdaa", content, true, {});

/***/ }),

/***/ "r7yU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.coupon-box {\r\n\tpadding: 5px;\n}\n.coupon-item{\r\n\tmargin-bottom: 5px;\n}\n.coupon-item {\r\n\tbackground: #DDDDDD;\n}\n.font-25 {\r\n\tfont-size: 25px;\n}\n.coupon-info ul {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\n}\n.coupon-to-shop {\r\n\tborder: 1px solid #f00;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/coupon/coupon.vue"],"names":[],"mappings":";AACA;CACC,aAAa;CACb;AACD;CACC,mBAAmB;CACnB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,UAAU;CACV,WAAW;CACX,iBAAiB;CACjB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,eAAe;CACf;AACD;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,gCAAgC;CAChC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;AACD,WAAW;AACX;;CAEC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,aAAa;CACb;AACD;CACC,gCAAgC;CAChC;AACD;CACC,sBAAsB;CACtB","file":"coupon.vue","sourcesContent":["\n.coupon-box {\r\n\tpadding: 5px;\n}\n.coupon-item{\r\n\tmargin-bottom: 5px;\n}\n.coupon-item {\r\n\tbackground: #DDDDDD;\n}\n.font-25 {\r\n\tfont-size: 25px;\n}\n.coupon-info ul {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\n}\n.coupon-to-shop {\r\n\tborder: 1px solid #f00;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=27.2957cdafc60e18df1ac3.js.map