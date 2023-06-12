"use strict";
var common_vendor = require("../../../common/vendor.js");
var api_user = require("../../../api/user.js");
require("../../../utils/request.js");
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_input2 + _easycom_fui_button2)();
}
const _easycom_fui_input = () => "../../../node-modules/firstui-uni/firstui/fui-input/fui-input.js";
const _easycom_fui_button = () => "../../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_button)();
}
const _sfc_main = {
  __name: "register",
  emits: ["close"],
  setup(__props, { emit: $emit }) {
    let form = common_vendor.reactive({
      username: "\u83AB\u660C\u6D9B",
      email: "1962074554@qq.com",
      passWord: "12345678",
      passWordTwo: "12345678"
    });
    function onRegister() {
      let params = {
        username: "\u83AB\u660C\u6D9B",
        email: "1962074554@qq.com",
        passWord: "12345678",
        age: 12
      };
      api_user.userRegister(params).then((res) => {
        console.log(res, "res");
      });
      for (let key in form) {
        if (!form[key]) {
          return;
        }
      }
      console.log("ddd");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(form).username = $event),
        b: common_vendor.p({
          placeholder: "\u7528\u6237\u540D",
          backgroundColor: "#ffffff00",
          modelValue: common_vendor.unref(form).username
        }),
        c: common_vendor.o(($event) => common_vendor.unref(form).passWord = $event),
        d: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801",
          backgroundColor: "#ffffff00",
          modelValue: common_vendor.unref(form).passWord
        }),
        e: common_vendor.o(($event) => common_vendor.unref(form).passWordTwo = $event),
        f: common_vendor.p({
          placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",
          backgroundColor: "#ffffff00",
          modelValue: common_vendor.unref(form).passWordTwo
        }),
        g: common_vendor.o(($event) => common_vendor.unref(form).email = $event),
        h: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1",
          backgroundColor: "#ffffff00",
          modelValue: common_vendor.unref(form).email
        }),
        i: common_vendor.o(($event) => common_vendor.unref(form).age = $event),
        j: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84",
          backgroundColor: "#ffffff00",
          modelValue: common_vendor.unref(form).age
        }),
        k: common_vendor.o(onRegister),
        l: common_vendor.p({
          background: "#a05dbc91"
        }),
        m: common_vendor.o(($event) => common_vendor.unref($emit)("close"))
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6daabcad"], ["__file", "C:/Users/Administrator/Desktop/jimu/jimu/pages/login/components/register.vue"]]);
wx.createComponent(Component);
