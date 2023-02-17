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
  const _sfc_main$4 = {
    name: "fui-input",
    emits: ["input", "update:modelValue", "focus", "blur", "confirm", "click", "keyboardheightchange"],
    props: {
      required: {
        type: Boolean,
        default: false
      },
      requiredColor: {
        type: String,
        default: "#FF2B2B"
      },
      label: {
        type: String,
        default: ""
      },
      labelSize: {
        type: [Number, String],
        default: 0
      },
      labelColor: {
        type: String,
        default: "#333"
      },
      labelWidth: {
        type: [Number, String],
        default: 140
      },
      clearable: {
        type: Boolean,
        default: false
      },
      clearColor: {
        type: String,
        default: "#CCCCCC"
      },
      focus: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ""
      },
      placeholderStyle: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      modelModifiers: {
        default: () => ({})
      },
      number: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "text"
      },
      password: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      min: {
        type: [Number, String],
        default: "NaN"
      },
      max: {
        type: [Number, String],
        default: "NaN"
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      confirmType: {
        type: String,
        default: "done"
      },
      confirmHold: {
        type: Boolean,
        default: false
      },
      cursor: {
        type: Number,
        default: -1
      },
      selectionStart: {
        type: Number,
        default: -1
      },
      selectionEnd: {
        type: Number,
        default: -1
      },
      adjustPosition: {
        type: Boolean,
        default: true
      },
      holdKeyboard: {
        type: Boolean,
        default: false
      },
      autoBlur: {
        type: Boolean,
        default: false
      },
      alwaysEmbed: {
        type: Boolean,
        default: false
      },
      size: {
        type: [Number, String],
        default: 0
      },
      color: {
        type: String,
        default: "#333"
      },
      inputBorder: {
        type: Boolean,
        default: false
      },
      isFillet: {
        type: Boolean,
        default: false
      },
      radius: {
        type: [Number, String],
        default: -1
      },
      borderTop: {
        type: Boolean,
        default: false
      },
      topLeft: {
        type: [Number, String],
        default: 0
      },
      topRight: {
        type: [Number, String],
        default: 0
      },
      borderBottom: {
        type: Boolean,
        default: true
      },
      bottomLeft: {
        type: [Number, String],
        default: 32
      },
      bottomRight: {
        type: [Number, String],
        default: 0
      },
      borderColor: {
        type: String,
        default: "#EEEEEE"
      },
      trim: {
        type: Boolean,
        default: true
      },
      textRight: {
        type: Boolean,
        default: false
      },
      padding: {
        type: Array,
        default() {
          return ["28rpx", "32rpx"];
        }
      },
      backgroundColor: {
        type: String,
        default: "#FFFFFF"
      },
      marginTop: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        placeholderStyl: "",
        focused: false,
        val: "",
        attribute: {}
      };
    },
    computed: {
      getStyles() {
        let styles = `margin-top:${this.marginTop}rpx;`;
        if (!this.inputBorder && !this.borderTop && !this.borderBottom && this.radius != -1) {
          styles += `border-radius:${this.radius}rpx;overflow:hidden;`;
        }
        return styles;
      },
      getSize() {
        const size = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.size || 32;
        return `${this.size || size}rpx`;
      },
      getLabelSize() {
        const labelSize = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.labelSize || 32;
        return `${this.labelSize || labelSize}rpx`;
      }
    },
    watch: {
      focus(val) {
        this.$nextTick(() => {
          this.focused = val;
        });
      },
      placeholderStyle() {
        this.fieldPlaceholderStyle();
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      value(newVal) {
        this.val = newVal;
      },
      password: {
        handler(val) {
          if (val) {
            this.attribute = {
              password: true
            };
          } else {
            this.attribute = {};
          }
        },
        immediate: true
      }
    },
    created() {
      if (this.value && !this.modelValue) {
        this.val = this.value;
      } else {
        this.val = this.modelValue;
      }
      this.fieldPlaceholderStyle();
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.focused = this.focus;
        }, 120);
      });
    },
    methods: {
      fieldPlaceholderStyle() {
        if (this.placeholderStyle) {
          this.placeholderStyl = this.placeholderStyle;
        } else {
          const _size = uni.$fui && uni.$fui.fuiInput && uni.$fui.fuiInput.size || 32;
          const size = uni.upx2px(this.size || _size);
          this.placeholderStyl = `font-size:${size}px`;
        }
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim)
          value = this.trimStr(value);
        this.val = value;
        if (this.modelModifiers.number || this.number || this.type === "digit" || this.type === "number") {
          const currentVal = Number(value);
          let eVal = this.type === "digit" ? value : currentVal;
          if (typeof currentVal === "number") {
            const min = Number(this.min);
            const max = Number(this.max);
            if (typeof min === "number" && currentVal < min) {
              eVal = min;
            } else if (typeof max === "number" && max < currentVal) {
              eVal = max;
            }
          }
          value = isNaN(eVal) ? value : eVal;
        }
        this.$nextTick(() => {
          event.detail.value !== "" && (this.val = value);
        });
        const inputValue = event.detail.value !== "" ? value : "";
        this.$emit("input", inputValue);
        this.$emit("update:modelValue", inputValue);
      },
      onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur(event) {
        this.$emit("blur", event);
      },
      onConfirm(e) {
        this.$emit("confirm", e);
      },
      onClear(event) {
        if (this.disabled && !this.readonly)
          return;
        uni.hideKeyboard();
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      fieldClick() {
        this.$emit("click", {
          name: this.name
        });
      },
      onKeyboardheightchange(e) {
        this.$emit("keyboardheightchange", e.detail);
      },
      trimStr(str) {
        return str.replace(/^\s+|\s+$/g, "");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass({ "fui-input__border": $props.inputBorder, "fui-radius__fillet": $props.isFillet }),
      style: vue.normalizeStyle($options.getStyles),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.fieldClick && $options.fieldClick(...args))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["fui-input__wrap", { "fui-radius__fillet": $props.isFillet, "fui-input__border-radius": $props.inputBorder && !$props.isFillet }]),
        style: vue.normalizeStyle({ paddingTop: $props.padding[0] || 0, paddingRight: $props.padding[1] || 0, paddingBottom: $props.padding[2] || $props.padding[0] || 0, paddingLeft: $props.padding[3] || $props.padding[1] || 0, backgroundColor: $props.backgroundColor })
      }, [
        $props.borderTop && !$props.inputBorder ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          style: vue.normalizeStyle({ background: $props.borderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
          class: "fui-input__border-top"
        }, null, 4)) : vue.createCommentVNode("v-if", true),
        $props.required ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "fui-input__required",
          style: vue.normalizeStyle({ color: $props.requiredColor })
        }, "*", 4)) : vue.createCommentVNode("v-if", true),
        $props.label ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "fui-input__label",
          style: vue.normalizeStyle({ minWidth: $props.labelWidth + "rpx" })
        }, [
          vue.createElementVNode("text", {
            style: vue.normalizeStyle({ fontSize: $options.getLabelSize, color: $props.labelColor })
          }, vue.toDisplayString($props.label), 5)
        ], 4)) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
        vue.createCommentVNode(` \u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301v-bind="{'password':password}" `),
        vue.createElementVNode("input", vue.mergeProps($data.attribute, {
          class: ["fui-input__self", { "fui-input__text-right": $props.textRight }],
          style: { fontSize: $options.getSize, color: $props.color },
          "placeholder-class": "fui-input__placeholder",
          type: $props.type,
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          "placeholder-style": $data.placeholderStyl,
          disabled: $props.disabled || $props.readonly,
          "cursor-spacing": $props.cursorSpacing,
          maxlength: $props.maxlength,
          focus: $data.focused,
          "confirm-type": $props.confirmType,
          "confirm-hold": $props.confirmHold,
          cursor: $props.cursor,
          "selection-start": $props.selectionStart,
          "selection-end": $props.selectionEnd,
          "adjust-position": $props.adjustPosition,
          "hold-keyboard": $props.holdKeyboard,
          "auto-blur": $props.autoBlur,
          enableNative: false,
          "always-embed": $props.alwaysEmbed,
          onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onInput: _cache[2] || (_cache[2] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[4] || (_cache[4] = (...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args))
        }), null, 16, ["type", "name", "value", "placeholder", "placeholder-style", "disabled", "cursor-spacing", "maxlength", "focus", "confirm-type", "confirm-hold", "cursor", "selection-start", "selection-end", "adjust-position", "hold-keyboard", "auto-blur", "always-embed"]),
        $props.clearable && $data.val != "" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "fui-input__clear-wrap",
          style: vue.normalizeStyle({ background: $props.clearColor }),
          onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.onClear && $options.onClear(...args), ["stop"]))
        }, [
          vue.createElementVNode("view", { class: "fui-input__clear" }, [
            vue.createElementVNode("view", { class: "fui-input__clear-a" })
          ]),
          vue.createElementVNode("view", { class: "fui-input__clear" }, [
            vue.createElementVNode("view", { class: "fui-input__clear-b" })
          ])
        ], 4)) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        $props.borderBottom && !$props.inputBorder ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 4,
          style: vue.normalizeStyle({ background: $props.borderColor, left: $props.bottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
          class: "fui-input__border-bottom"
        }, null, 4)) : vue.createCommentVNode("v-if", true)
      ], 6)
    ], 6);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__scopeId", "data-v-a23503dd"], ["__file", "D:/DeskTops/uniapp/jimu/node_modules/firstui-uni/firstui/fui-input/fui-input.vue"]]);
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-95a9a26f"], ["__file", "D:/DeskTops/uniapp/jimu/node_modules/firstui-uni/firstui/fui-button/fui-button.vue"]]);
  const _sfc_main$2 = {
    __name: "index",
    setup(__props) {
      const form = vue.reactive({
        accountNumber: "",
        passwrod: ""
      });
      function onLogin() {
        if (!form.accountNumber && !form.passwrod) {
          return;
        }
      }
      return (_ctx, _cache) => {
        const _component_fui_input = resolveEasycom(vue.resolveDynamicComponent("fui-input"), __easycom_0);
        const _component_fui_button = resolveEasycom(vue.resolveDynamicComponent("fui-button"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("div", { class: "login" }, [
          vue.createElementVNode("div", { class: "form" }, [
            vue.createElementVNode("div", { class: "box" }, [
              vue.createVNode(_component_fui_input, {
                placeholder: "\u7528\u6237\u540D/\u8D26\u53F7/\u624B\u673A\u53F7",
                backgroundColor: "#ffffff00",
                modelValue: form.accountNumber,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.accountNumber = $event)
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    class: "icon",
                    src: "/static/svg/login_user.svg",
                    mode: ""
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", { class: "box" }, [
              vue.createVNode(_component_fui_input, {
                placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801",
                backgroundColor: "#ffffff00",
                modelValue: form.passwrod,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.passwrod = $event)
              }, {
                left: vue.withCtx(() => [
                  vue.createElementVNode("image", {
                    class: "icon",
                    src: "/static/svg/login_password.svg",
                    mode: ""
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            vue.createElementVNode("div", { class: "btn" }, [
              vue.createVNode(_component_fui_button, {
                background: "#a05dbc91",
                onClick: onLogin
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u767B\u5F55")
                ]),
                _: 1
              })
            ]),
            vue.createElementVNode("div", { class: "bottom" }, [
              vue.createElementVNode("div", { class: "left" }, "\u5FD8\u8BB0\u5BC6\u7801"),
              vue.createElementVNode("div", { class: "right" }, "\u6CE8\u518C\u8D26\u53F7")
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d08ef7d4"], ["__file", "D:/DeskTops/uniapp/jimu/pages/login/index.vue"]]);
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
