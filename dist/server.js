"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
// const app = require('./app');

var port = 3000;
_app["default"].listen(port, function () {
  console.log("api running or port ".concat(port));
});