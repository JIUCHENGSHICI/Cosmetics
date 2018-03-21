webpackJsonp([25],{

/***/ "V34x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-header/index.vue + 3 modules
var x_header = __webpack_require__("OVFY");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/view-box/index.vue + 3 modules
var view_box = __webpack_require__("utzS");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/search/index.vue + 4 modules
var search = __webpack_require__("3wfN");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/group/index.vue + 3 modules
var group = __webpack_require__("F07p");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/cell/index.vue + 5 modules
var cell = __webpack_require__("rR7n");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/panel/index.vue + 3 modules
var panel = __webpack_require__("x/Kt");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/customer/customer.vue








/* harmony default export */ var customer = ({
  components: {
    ViewBox: view_box["a" /* default */],
    XHeader: x_header["a" /* default */],
    Search: search["a" /* default */],
    Group: group["a" /* default */],
    Cell: cell["a" /* default */],
    Panel: panel["a" /* default */]
  },
  methods: {

    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      window.alert('you click the result item: ' + JSON.stringify(item));
    },
    getResult(val) {
      console.log('on-change', val);
      this.results = val ? getResult(this.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      });
    },
    onFocus() {
      console.log('on focus');
    },
    onCancel() {
      console.log('点击了取消');
    }

  },
  data() {
    return {
      results: [],
      value: '限量版来袭',
      customerList: [{
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '索拉卡大胜靠德讲述了第三季度老师讲的第三列第聚少离多聚少离多就是来得及但是到了事件代理事件代理数据都是劳动纪律说的就是劳动竞赛劳动竞赛来得及'

      }, {
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID'

      }, {
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID'

      }, {
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID'

      }]
    };
  }
});

function getResult(val) {
  let rs = [];
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    });
  }
  return rs;
}
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/customer/customer.vue








/* harmony default export */ var customer_customer = ({
  components: {
    ViewBox: view_box["a" /* default */],
    XHeader: x_header["a" /* default */],
    Search: search["a" /* default */],
    Group: group["a" /* default */],
    Cell: cell["a" /* default */],
    Panel: panel["a" /* default */]
  },
  methods: {

    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      window.alert('you click the result item: ' + JSON.stringify(item));
    },
    getResult(val) {
      console.log('on-change', val);
      this.results = val ? customer_getResult(this.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      });
    },
    onFocus() {
      console.log('on focus');
    },
    onCancel() {
      console.log('点击了取消');
    }

  },
  data() {
    return {
      results: [],
      value: '限量版来袭',
      customerList: [{
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '索拉卡大胜靠德讲述了第三季度老师讲的第三列第聚少离多聚少离多就是来得及但是到了事件代理事件代理数据都是劳动纪律说的就是劳动竞赛劳动竞赛来得及'

      }, {
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID'

      }, {
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID'

      }, {
        src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
        title: "客户的名字客户的名字客户的名字客户的名字客户的名字客户的名字",
        desc: '客户的ID客户的ID客户的ID客户的ID客户的ID客户的ID'

      }]
    };
  }
});

function customer_getResult(val) {
  let rs = [];
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    });
  }
  return rs;
}
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-6ce3e2f4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pages/customer/customer.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"customer"},[_c('x-header',{attrs:{"left-options":{backText: ''}}},[_vm._v("\n\t\t我的客户\n\t")]),_vm._v(" "),_c('view-box',[_c('search',{ref:"search",staticClass:"search-comp",attrs:{"cancel-text":"搜索","results":_vm.results,"position":"absolute","auto-scroll-to-top":"","top":"46px"},on:{"result-click":_vm.resultClick,"on-change":_vm.getResult,"on-focus":_vm.onFocus,"on-cancel":_vm.onCancel,"on-submit":_vm.onSubmit},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}}),_vm._v(" "),_c('group',[_c('cell',{staticClass:"font-14",attrs:{"title":('普通用户'),"value":('3人'),"is-link":""}})],1),_vm._v(" "),_c('group',{staticClass:"margin-top-10"},[_c('cell',{staticClass:"font-14",attrs:{"title":('0人'),"value":('')}})],1),_vm._v(" "),_c('div',{staticClass:"customer-list"},[_c('panel',{attrs:{"list":_vm.customerList}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_customer_customer = (esExports);
// CONCATENATED MODULE: ./src/pages/customer/customer.vue
function injectStyle (ssrContext) {
  __webpack_require__("XrfU")
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
  customer_customer,
  pages_customer_customer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_customer_customer = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "XrfU":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("l0XT");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("33acf991", content, true, {});

/***/ }),

/***/ "l0XT":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "/*search*/\n.customer .vux-search-box.vux-search-fixed {\r\n\ttop: 46px !important;\n}\n.customer .groom-list {\r\n\tmargin-top: 44px !important;\n}\n.customer .search-comp {\r\n\t/*position: fixed !important;*/\n}\n.customer .vux-search-box.search-comp.vux-search-fixed {\r\n\t/*position: absolute !important;\r\n\ttop: 0px !important;*/\r\n\tposition: static !important;\n}\n.customer .weui-search-bar__box .weui-search-bar__input {\r\n\tcolor: #4A4A4A;\n}\n.customer .weui-search-bar {\r\n\t/*background: #000;*/\r\n\tbackground: #fff;\n}\n.customer .weui-search-bar__cancel-btn {\r\n\t/*color: #fff;*/\r\n\tcolor: #000;\r\n\tfont-size: 14px;\n}\n.customer .weui-search-bar:before {\r\n\tcontent: none !important;\n}\n.customer .weui-search-bar__box {\r\n\tbackground: #D9D9D9;\r\n\t/*border-radius: 50px;*/\n}\n.customer .weui-search-bar__form:after {\r\n\tcontent: none !important;\n}\n.customer .weui-search-bar__form {\r\n\tbackground-color: #fff;\n}\n.customer .weui-cells {\r\n\tmargin: 0 !important;\n}\n.customer .weui-media-box.weui-media-box_appmsg {\r\n\tpadding: 5px !important;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/customer/customer.vue"],"names":[],"mappings":"AAAA,UAAU;AACV;CACC,qBAAqB;CACrB;AACD;CACC,4BAA4B;CAC5B;AACD;CACC,+BAA+B;CAC/B;AACD;CACC;uBACsB;CACtB,4BAA4B;CAC5B;AACD;CACC,eAAe;CACf;AACD;CACC,qBAAqB;CACrB,iBAAiB;CACjB;AACD;CACC,gBAAgB;CAChB,YAAY;CACZ,gBAAgB;CAChB;AACD;CACC,yBAAyB;CACzB;AACD;CACC,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,yBAAyB;CACzB;AACD;CACC,uBAAuB;CACvB;AACD;CACC,qBAAqB;CACrB;AACD;CACC,wBAAwB;CACxB;AACD;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,eAAe;CACf;AACD;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,gCAAgC;CAChC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;;AAED,WAAW;AACX;;CAEC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,aAAa;CACb;AACD;CACC,gCAAgC;CAChC;AACD;CACC,sBAAsB;CACtB","file":"customer.vue","sourcesContent":["/*search*/\n.customer .vux-search-box.vux-search-fixed {\r\n\ttop: 46px !important;\n}\n.customer .groom-list {\r\n\tmargin-top: 44px !important;\n}\n.customer .search-comp {\r\n\t/*position: fixed !important;*/\n}\n.customer .vux-search-box.search-comp.vux-search-fixed {\r\n\t/*position: absolute !important;\r\n\ttop: 0px !important;*/\r\n\tposition: static !important;\n}\n.customer .weui-search-bar__box .weui-search-bar__input {\r\n\tcolor: #4A4A4A;\n}\n.customer .weui-search-bar {\r\n\t/*background: #000;*/\r\n\tbackground: #fff;\n}\n.customer .weui-search-bar__cancel-btn {\r\n\t/*color: #fff;*/\r\n\tcolor: #000;\r\n\tfont-size: 14px;\n}\n.customer .weui-search-bar:before {\r\n\tcontent: none !important;\n}\n.customer .weui-search-bar__box {\r\n\tbackground: #D9D9D9;\r\n\t/*border-radius: 50px;*/\n}\n.customer .weui-search-bar__form:after {\r\n\tcontent: none !important;\n}\n.customer .weui-search-bar__form {\r\n\tbackground-color: #fff;\n}\n.customer .weui-cells {\r\n\tmargin: 0 !important;\n}\n.customer .weui-media-box.weui-media-box_appmsg {\r\n\tpadding: 5px !important;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=25.a8159267e89f550bbb16.js.map