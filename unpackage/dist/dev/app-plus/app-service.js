if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    name: "fui-button",
    emits: ["click", "getuserinfo", "contact", "getphonenumber", "error", "opensetting"],
    props: {
      type: {
        type: String,
        default: "primary"
      },
      background: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      disabledBackground: {
        type: String,
        default: ""
      },
      disabledColor: {
        type: String,
        default: ""
      },
      borderWidth: {
        type: String,
        default: "1px"
      },
      borderColor: {
        type: String,
        default: ""
      },
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: 0
      },
      bold: {
        type: Boolean,
        default: false
      },
      margin: {
        type: Array,
        default() {
          return ["0", "0"];
        }
      },
      radius: {
        type: String,
        default: ""
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      formType: {
        type: String,
        default: ""
      },
      openType: {
        type: String,
        default: ""
      },
      scope: {
        type: String,
        default: ""
      },
      index: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getTypeColor() {
        return "";
      },
      getBackground() {
        let color = this.getTypeColor;
        if (this.disabled || this.plain) {
          color = "transparent";
        }
        if (!this.disabled && !this.plain && this.background) {
          color = this.background;
        }
        return color;
      },
      getColor() {
        let color = "#fff";
        if (this.color) {
          color = this.disabled && this.disabledBackground ? this.disabledColor : this.color;
        } else {
          if (this.disabled && this.disabledBackground) {
            color = this.disabledColor || "#FFFFFF";
          } else {
            color = this.type === "gray" ? "#465CFF" : "#FFFFFF";
          }
        }
        return color;
      },
      getSize() {
        const size = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.size || 32;
        return `${this.size || size}rpx`;
      },
      getHeight() {
        const height = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.height || "96rpx";
        return this.height || height;
      },
      getBorderRadius() {
        let radius = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.radius || "16rpx";
        radius = this.radius || radius || "0";
        if (~radius.indexOf("rpx")) {
          radius = Number(radius.replace("rpx", "")) * 2 + "rpx";
        } else if (~radius.indexOf("px")) {
          radius = Number(radius.replace("px", "")) * 2 + "px";
        } else if (~radius.indexOf("%")) {
          radius = Number(radius.replace("%", "")) * 2 + "%";
        }
        return radius;
      },
      getRadius() {
        const radius = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.radius || "16rpx";
        return this.radius || radius;
      }
    },
    data() {
      let isNvue = false;
      return {
        isNvue,
        time: 0,
        trigger: false,
        pc: false
      };
    },
    created() {
    },
    methods: {
      handleStart(e) {
        if (this.disabled)
          return;
        this.trigger = false;
        if (new Date().getTime() - this.time <= 150)
          return;
        this.trigger = true;
        this.time = new Date().getTime();
      },
      handleClick() {
        if (this.disabled || !this.trigger)
          return;
        this.time = 0;
      },
      handleTap() {
        if (this.disabled)
          return;
        this.$emit("click", {
          index: Number(this.index)
        });
      },
      handleEnd(e) {
        if (this.disabled)
          return;
        setTimeout(() => {
          this.time = 0;
        }, 150);
      },
      bindgetuserinfo({
        detail = {}
      } = {}) {
        this.$emit("getuserinfo", detail);
      },
      bindcontact({
        detail = {}
      } = {}) {
        this.$emit("contact", detail);
      },
      bindgetphonenumber({
        detail = {}
      } = {}) {
        this.$emit("getphonenumber", detail);
      },
      binderror({
        detail = {}
      } = {}) {
        this.$emit("error", detail);
      },
      bindopensetting({
        detail = {}
      } = {}) {
        this.$emit("opensetting", detail);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["fui-button__wrap", [!$props.width || $props.width === "100%" || $props.width === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
      style: vue.normalizeStyle({ width: $props.width, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
      onTouchstart: _cache[6] || (_cache[6] = (...args) => $options.handleStart && $options.handleStart(...args)),
      onTouchend: _cache[7] || (_cache[7] = (...args) => $options.handleClick && $options.handleClick(...args)),
      onTouchcancel: _cache[8] || (_cache[8] = (...args) => $options.handleEnd && $options.handleEnd(...args))
    }, [
      vue.createElementVNode("button", {
        class: vue.normalizeClass(["fui-button", [
          $props.bold ? "fui-text__bold" : "",
          $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
          !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
          !$props.width || $props.width === "100%" || $props.width === true ? "fui-button__flex-1" : "",
          $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
          $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
        ]]),
        style: vue.normalizeStyle({
          width: $props.width,
          height: $options.getHeight,
          lineHeight: $options.getHeight,
          background: $props.disabled ? $props.disabledBackground || $options.getTypeColor : $props.plain ? "transparent" : $options.getBackground,
          borderWidth: !$props.borderColor || !$data.isNvue ? "0" : $props.borderWidth,
          borderColor: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
          borderRadius: $options.getRadius,
          fontSize: $options.getSize,
          color: $options.getColor
        }),
        loading: $props.loading,
        "form-type": $props.formType,
        "open-type": $props.openType,
        onGetuserinfo: _cache[0] || (_cache[0] = (...args) => $options.bindgetuserinfo && $options.bindgetuserinfo(...args)),
        onGetphonenumber: _cache[1] || (_cache[1] = (...args) => $options.bindgetphonenumber && $options.bindgetphonenumber(...args)),
        onContact: _cache[2] || (_cache[2] = (...args) => $options.bindcontact && $options.bindcontact(...args)),
        onError: _cache[3] || (_cache[3] = (...args) => $options.binderror && $options.binderror(...args)),
        onOpensetting: _cache[4] || (_cache[4] = (...args) => $options.bindopensetting && $options.bindopensetting(...args)),
        disabled: $props.disabled,
        scope: $props.scope,
        onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.handleTap && $options.handleTap(...args), ["stop"]))
      }, [
        $props.text ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: vue.normalizeClass(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
          style: vue.normalizeStyle({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $props.color ? $props.disabled && $props.disabledBackground ? $props.disabledColor : $props.color : $props.type === "gray" ? "#465CFF" : "#FFFFFF" })
        }, vue.toDisplayString($props.text), 7)) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 46, ["loading", "form-type", "open-type", "disabled", "scope"]),
      $props.borderColor ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["fui-button__thin-border", [$data.time && ($props.plain || $props.type === "link") && !$props.disabled ? "fui-button__opacity" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
        style: vue.normalizeStyle({ borderWidth: $props.borderWidth, borderColor: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent", borderRadius: $options.getBorderRadius })
      }, null, 6)) : vue.createCommentVNode("v-if", true)
    ], 38);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-95a9a26f"], ["__file", "D:/DeskTops/uniapp/jimu/node_modules/firstui-uni/firstui/fui-button/fui-button.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    const _component_fui_button = resolveEasycom(vue.resolveDynamicComponent("fui-button"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("div", { class: "login" }, [
      vue.createElementVNode("div", { class: "form" }, [
        vue.createElementVNode("div", { class: "title" }, " \u767B\u5F55dd "),
        vue.createVNode(_component_fui_button, { text: "\u9ED8\u8BA4\u6309\u94AE" })
      ])
    ]);
  }
  const PagesLoginIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-d08ef7d4"], ["__file", "D:/DeskTops/uniapp/jimu/pages/login/index.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      vue.createElementVNode("view", { class: "text-area" }, [
        vue.createElementVNode("text", { class: "title" }, vue.toDisplayString($data.title), 1)
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/DeskTops/uniapp/jimu/pages/index/index.vue"]]);
  __definePage("pages/login/index", PagesLoginIndex);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/DeskTops/uniapp/jimu/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
