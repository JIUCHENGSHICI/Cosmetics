webpackJsonp([24],{

/***/ "J3/x":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("buQn");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("a99d6344", content, true, {});

/***/ }),

/***/ "Zpxj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-header/index.vue + 3 modules
var x_header = __webpack_require__("OVFY");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/view-box/index.vue + 3 modules
var view_box = __webpack_require__("utzS");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/group/index.vue + 3 modules
var group = __webpack_require__("F07p");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-input/index.vue + 4 modules
var x_input = __webpack_require__("SeL/");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/cell/index.vue + 5 modules
var cell = __webpack_require__("rR7n");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox.vue + 3 modules
var flexbox = __webpack_require__("EsTV");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox-item.vue + 3 modules
var flexbox_item = __webpack_require__("Ris4");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-button/index.vue + 3 modules
var x_button = __webpack_require__("WC2l");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/phoneLogin/phoneLogin.vue










/* harmony default export */ var phoneLogin = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Group: group["a" /* default */],
    XInput: x_input["a" /* default */],
    Cell: cell["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XButton: x_button["a" /* default */]
  },
  data() {
    return {
      phone: '',
      code: '',
      timeCount: '',
      retransmission: '',
      gain: '获取验证码',
      isGetCode: false,
      showBtn: true,
      success_code: ''
    };
  },
  mounted() {
    if (this.phone.length >= 1) {
      this.showBtn = false;
    } else {
      this.showBtn = true;
    }
  },
  watch: {
    showBtn() {
      if (this.phone.length >= 1) {
        console.log("123");
      } else {
        console.log("456");
      }
    }
  },
  methods: {

    obtain() {
      var _this = this;
      if (this.phone.length <= 0) {
        this.$vux.toast.show({
          text: "请输入手机号",
          type: "text",
          position: "middle"
        });
        return false;
      }
      if (!this.isPhone(this.phone)) {
        this.$vux.toast.show({
          text: "请输入正确手机号",
          type: "text",
          position: "middle"
        });
        return false;
      };
      this.gain = '';
      this.timeCount = 3;
      this.retransmission = 's后重发';
      this.isGetCode = true;
      var interval = setInterval(function (params) {
        _this.timeCount--;
        if (_this.timeCount <= 0) {
          _this.timeCount = '';
          _this.retransmission = '';
          _this.isGetCode = false;
          _this.gain = '获取验证码';
          clearInterval(interval);
        }
      }, 1000);
      this.$post("index/getCode", {
        user_id: this.phone
      }, res => {
        console.log(res);
        console.log(res.msg);
        this.success_code = res.msg;
        if (res.res >= 1) {
          var _this = this;
          this.$vux.toast.show({
            text: "发送成功",
            type: "text",
            position: "middle"
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
          return false;
        }
      });
    },
    isPhone(str) {
      var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
      return reg.test(str);
      return true;
    },
    login() {
      var phone = this.phone;
      var code = this.code;
      if (phone.length <= 0) {
        this.$vux.toast.show({
          text: "请输入手机号",
          type: "text",
          position: "middle"
        });
        return false;
      }

      if (!this.isPhone(phone)) {
        this.$vux.toast.show({
          text: "请输入正确手机号",
          type: "text",
          position: "middle"
        });
        return false;
      };
      if (code.length <= 0) {
        this.$vux.toast.show({
          text: "请输入验证码",
          type: "text",
          position: "middle"
        });
        return false;
      };
      this.$post("index/login", {
        user_id: phone,
        user_code: code
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          var _this = this;
          localStorage.user_id = phone;
          localStorage.token = res.token;
          this.$vux.toast.show({
            text: "登陆成功",
            type: "text",
            position: "middle"
          });
          setTimeout(function () {
            _this.$router.push({
              replace: true,
              path: '/index'
            });
          }, 1000);
          this.$get("user/getUserInfo", {
            field: ["user_name", "user_head"]
          }, _res => {
            console.log("------------", _res);
            if (_res.res >= 1) {
              localStorage.user_info = JSON.stringify(_res.msg);
              return;
            }
            this.$vux.toast.show({
              text: "用户信息获取失败，请重新登录",
              type: "text",
              position: "middle"
            });
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "登录失败,请重试",
            type: "text",
            position: "middle",
            width: '10em'
          });
          return false;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/phoneLogin/phoneLogin.vue










/* harmony default export */ var phoneLogin_phoneLogin = ({
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Group: group["a" /* default */],
    XInput: x_input["a" /* default */],
    Cell: cell["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    XButton: x_button["a" /* default */]
  },
  data() {
    return {
      phone: '',
      code: '',
      timeCount: '',
      retransmission: '',
      gain: '获取验证码',
      isGetCode: false,
      showBtn: true,
      success_code: ''
    };
  },
  mounted() {
    if (this.phone.length >= 1) {
      this.showBtn = false;
    } else {
      this.showBtn = true;
    }
  },
  watch: {
    showBtn() {
      if (this.phone.length >= 1) {
        console.log("123");
      } else {
        console.log("456");
      }
    }
  },
  methods: {

    obtain() {
      var _this = this;
      if (this.phone.length <= 0) {
        this.$vux.toast.show({
          text: "请输入手机号",
          type: "text",
          position: "middle"
        });
        return false;
      }
      if (!this.isPhone(this.phone)) {
        this.$vux.toast.show({
          text: "请输入正确手机号",
          type: "text",
          position: "middle"
        });
        return false;
      };
      this.gain = '';
      this.timeCount = 3;
      this.retransmission = 's后重发';
      this.isGetCode = true;
      var interval = setInterval(function (params) {
        _this.timeCount--;
        if (_this.timeCount <= 0) {
          _this.timeCount = '';
          _this.retransmission = '';
          _this.isGetCode = false;
          _this.gain = '获取验证码';
          clearInterval(interval);
        }
      }, 1000);
      this.$post("index/getCode", {
        user_id: this.phone
      }, res => {
        console.log(res);
        console.log(res.msg);
        this.success_code = res.msg;
        if (res.res >= 1) {
          var _this = this;
          this.$vux.toast.show({
            text: "发送成功",
            type: "text",
            position: "middle"
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误,请重试",
            type: "text",
            position: "middle"
          });
          return false;
        }
      });
    },
    isPhone(str) {
      var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
      return reg.test(str);
      return true;
    },
    login() {
      var phone = this.phone;
      var code = this.code;
      if (phone.length <= 0) {
        this.$vux.toast.show({
          text: "请输入手机号",
          type: "text",
          position: "middle"
        });
        return false;
      }

      if (!this.isPhone(phone)) {
        this.$vux.toast.show({
          text: "请输入正确手机号",
          type: "text",
          position: "middle"
        });
        return false;
      };
      if (code.length <= 0) {
        this.$vux.toast.show({
          text: "请输入验证码",
          type: "text",
          position: "middle"
        });
        return false;
      };
      this.$post("index/login", {
        user_id: phone,
        user_code: code
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          var _this = this;
          localStorage.user_id = phone;
          localStorage.token = res.token;
          this.$vux.toast.show({
            text: "登陆成功",
            type: "text",
            position: "middle"
          });
          setTimeout(function () {
            _this.$router.push({
              replace: true,
              path: '/index'
            });
          }, 1000);
          this.$get("user/getUserInfo", {
            field: ["user_name", "user_head"]
          }, _res => {
            console.log("------------", _res);
            if (_res.res >= 1) {
              localStorage.user_info = JSON.stringify(_res.msg);
              return;
            }
            this.$vux.toast.show({
              text: "用户信息获取失败，请重新登录",
              type: "text",
              position: "middle"
            });
          });
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "登录失败,请重试",
            type: "text",
            position: "middle",
            width: '10em'
          });
          return false;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-7653fad2","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pages/phoneLogin/phoneLogin.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"phone-login"},[_c('x-header',{attrs:{"left-options":{backText: '返回'}}},[_c('a',{attrs:{"slot":"left"},slot:"left"}),_vm._v("\n\t\t手机号登录\n\t")]),_vm._v(" "),_c('view-box',[_c('div',{staticClass:"phone-login-box"},[_c('group',[_c('x-input',{attrs:{"placeholder":"请输入手机号","max":11,"is-type":"china-mobile"},model:{value:(_vm.phone),callback:function ($$v) {_vm.phone=$$v},expression:"phone"}})],1),_vm._v(" "),_c('flexbox',{attrs:{"gutter":5}},[_c('flexbox-item',{attrs:{"span":6.8}},[_c('div',{},[_c('group',{attrs:{"title":""}},[_c('x-input',{attrs:{"placeholder":"请输入验证码","max":4},model:{value:(_vm.code),callback:function ($$v) {_vm.code=$$v},expression:"code"}})],1)],1)]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":5}},[_c('div',{},[_c('x-button',{staticClass:"obtain",attrs:{"disabled":_vm.isGetCode,"type":"default"},nativeOn:{"click":function($event){return _vm.obtain($event)}}},[_vm._v(_vm._s(_vm.gain)+_vm._s(_vm.timeCount)+_vm._s(_vm.retransmission))])],1)])],1),_vm._v(" "),_c('span',{staticClass:"font-14"},[_vm._v("测试验证码"+_vm._s(_vm.success_code))]),_vm._v(" "),_c('div',{staticClass:"button"},[_c('x-button',{staticClass:"login-btn",attrs:{"type":"default"},nativeOn:{"click":function($event){return _vm.login($event)}}},[_vm._v("登录")])],1)],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_phoneLogin_phoneLogin = (esExports);
// CONCATENATED MODULE: ./src/pages/phoneLogin/phoneLogin.vue
function injectStyle (ssrContext) {
  __webpack_require__("J3/x")
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
  phoneLogin_phoneLogin,
  pages_phoneLogin_phoneLogin,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_phoneLogin_phoneLogin = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "buQn":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.phone-login .weui-cells:before {\r\n\tcontent: none;\n}\n.phone-login-box {\r\n\tpadding: 0 15px;\n}\n.obtain.weui-btn {\r\n\tmargin-top: 16px;\r\n\tfont-size: 14px !important;\r\n\tpadding: 5px 0;\n}\n.button {\r\n\tpadding-top: 100px;\n}\n.login-btn.weui-btn {\r\n\tbackground: #000;\r\n\tcolor: #fff;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/phoneLogin/phoneLogin.vue"],"names":[],"mappings":";AACA;CACC,cAAc;CACd;AACD;CACC,gBAAgB;CAChB;AACD;CACC,iBAAiB;CACjB,2BAA2B;CAC3B,eAAe;CACf;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,eAAe;CACf;AACD;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,gCAAgC;CAChC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;;AAED,WAAW;AACX;;CAEC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,aAAa;CACb;AACD;CACC,gCAAgC;CAChC;AACD;CACC,sBAAsB;CACtB","file":"phoneLogin.vue","sourcesContent":["\n.phone-login .weui-cells:before {\r\n\tcontent: none;\n}\n.phone-login-box {\r\n\tpadding: 0 15px;\n}\n.obtain.weui-btn {\r\n\tmargin-top: 16px;\r\n\tfont-size: 14px !important;\r\n\tpadding: 5px 0;\n}\n.button {\r\n\tpadding-top: 100px;\n}\n.login-btn.weui-btn {\r\n\tbackground: #000;\r\n\tcolor: #fff;\n}\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=24.47fa8b2161bc2ddb028e.js.map