"use strict";
var common_vendor = require("../common/vendor.js");
const base_url = "http://169.254.15.104:7001/";
var request = (url, method, params) => {
  const token = "sd";
  let header;
  if (method == "post") {
    header.token = token;
    header["content-type"] = "application/json";
  } else if (url == "api/WxUser/GetWxUser") {
    header = {
      token
    };
  }
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: base_url + url,
      method,
      header,
      dataType: "jsonp",
      data: params,
      success(response) {
        const res = response;
        if (res.data.Errcode == "0") {
          resolve(res);
        } else if (res.data.Errcode == "500") {
          common_vendor.index.clearStorageSync();
          common_vendor.index.showToast({
            title: res.data.Errmsg,
            icon: "none",
            success() {
              common_vendor.index.navigateTo({
                url: "/pages/login/index"
              });
            }
          });
        }
      },
      fail(err) {
        reject(err);
        console.log(err);
      },
      complete() {
      }
    });
  }).catch((e) => {
  });
};
exports.request = request;
