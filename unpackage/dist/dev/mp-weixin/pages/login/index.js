"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_toast2 = common_vendor.resolveComponent("fui-toast");
  (_easycom_fui_input2 + _easycom_fui_button2 + _easycom_fui_toast2)();
}
const _easycom_fui_input = () => "../../node-modules/firstui-uni/firstui/fui-input/fui-input.js";
const _easycom_fui_button = () => "../../node-modules/firstui-uni/firstui/fui-button/fui-button.js";
const _easycom_fui_toast = () => "../../node-modules/firstui-uni/firstui/fui-toast/fui-toast.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_button + register + _easycom_fui_toast)();
}
const register = () => "./components/register.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let show = common_vendor.ref(1);
    let toast = common_vendor.ref(null);
    const form = common_vendor.reactive({
      accountNumber: "",
      passwrod: ""
    });
    function onLogin() {
      return;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(show) == 1
      }, common_vendor.unref(show) == 1 ? {
        b: common_vendor.o(($event) => form.accountNumber = $event),
        c: common_vendor.p({
          placeholder: "\u7528\u6237\u540D/\u8D26\u53F7/\u624B\u673A\u53F7",
          backgroundColor: "#ffffff00",
          modelValue: form.accountNumber
        }),
        d: common_vendor.o(($event) => form.passwrod = $event),
        e: common_vendor.p({
          placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801",
          backgroundColor: "#ffffff00",
          modelValue: form.passwrod
        }),
        f: common_vendor.o(onLogin),
        g: common_vendor.p({
          background: "#a05dbc91"
        }),
        h: common_vendor.o(($event) => common_vendor.isRef(show) ? show.value = 2 : show = 2)
      } : {
        i: common_vendor.o(($event) => common_vendor.isRef(show) ? show.value = 1 : show = 1)
      }, {
        j: common_vendor.sr(toast, "4586967a-4", {
          "k": "toast"
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4586967a"], ["__file", "C:/Users/Administrator/Desktop/jimu/jimu/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
