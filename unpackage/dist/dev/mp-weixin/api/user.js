"use strict";
var utils_request = require("../utils/request.js");
const userRegister = (data) => utils_request.request("api/user/register", "get", data);
exports.userRegister = userRegister;
