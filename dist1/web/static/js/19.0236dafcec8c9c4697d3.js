webpackJsonp([19],{

/***/ "Elfr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-header/index.vue + 3 modules
var x_header = __webpack_require__("OVFY");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/view-box/index.vue + 3 modules
var view_box = __webpack_require__("utzS");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/indemnity/indemnity.vue




/* harmony default export */ var indemnity = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */]
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/indemnity/indemnity.vue




/* harmony default export */ var indemnity_indemnity = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */]
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-b41e23ec","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pages/indemnity/indemnity.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about"},[_c('x-header',{attrs:{"left-options":{backText: '返回'}}},[_c('a',{attrs:{"slot":"left"},slot:"left"}),_vm._v("\n\t\t会员省钱\n\t")]),_vm._v(" "),_c('view-box',[_c('div',{staticClass:"indemnity-box"},[_c('div',{staticClass:"head-img"},[_c('span',{staticClass:"hint"},[_vm._v("会员省钱  一贵就赔")])]),_vm._v(" "),_c('div',{staticClass:"introduce"},[_c('div',{staticClass:"title font-16 font-black"},[_vm._v("\n\t\t\t\t\t一贵就赔规则介绍\n\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"info"},[_vm._v("\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Odio natus laborum dolorem harum velit doloribus illum veritatis quod assumenda deleniti sunt eaque nihil quos eos perspiciatis fuga magni a. Cupiditate?\n\t\t\t\t")])])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_indemnity_indemnity = (esExports);
// CONCATENATED MODULE: ./src/pages/indemnity/indemnity.vue
function injectStyle (ssrContext) {
  __webpack_require__("Hfdz")
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
  indemnity_indemnity,
  pages_indemnity_indemnity,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_indemnity_indemnity = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "F/Uv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/user.d963c54.d963c54.png";

/***/ }),

/***/ "Hfdz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("VqUw");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("dc26f8a2", content, true, {});

/***/ }),

/***/ "VqUw":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("JLGU");
exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.indemnity-box {\r\n\twidth: 100%;\r\n\theight: 100%;\n}\n.head-img{\r\n\twidth: 100%;\r\n\theight: 150px;\r\n\tbackground-image: url(" + escape(__webpack_require__("F/Uv")) + ");\r\n\tbackground-size: cover;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tline-height: 150px;\n}\n.hint{\r\n\tfont-size: 30px;\r\n\tfont-weight: 500;\r\n\tcolor: #fff;\n}\n.introduce{\r\n\tpadding: 5px;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/indemnity/indemnity.vue"],"names":[],"mappings":";AACA;CACC,YAAY;CACZ,aAAa;CACb;AACD;CACC,YAAY;CACZ,cAAc;CACd,gDAAsE;CACtE,uBAAuB;CACvB,mBAAmB;CACnB,mBAAmB;CACnB,mBAAmB;CACnB;AACD;CACC,gBAAgB;CAChB,iBAAiB;CACjB,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,eAAe;CACf;AACD;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,gCAAgC;CAChC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;AACD,WAAW;AACX;;CAEC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,aAAa;CACb;AACD;CACC,gCAAgC;CAChC;AACD;CACC,sBAAsB;CACtB","file":"indemnity.vue","sourcesContent":["\n.indemnity-box {\r\n\twidth: 100%;\r\n\theight: 100%;\n}\n.head-img{\r\n\twidth: 100%;\r\n\theight: 150px;\r\n\tbackground-image: url(../../../dist1/web/static/img/user.d963c54.png);\r\n\tbackground-size: cover;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\tline-height: 150px;\n}\n.hint{\r\n\tfont-size: 30px;\r\n\tfont-weight: 500;\r\n\tcolor: #fff;\n}\n.introduce{\r\n\tpadding: 5px;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=19.0236dafcec8c9c4697d3.js.map