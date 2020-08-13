'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user.controller');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// route
const userRoute = _express2.default.Router();

userRoute.post('/signin', _user2.default.signin);

exports.default = userRoute;
//# sourceMappingURL=user.route.js.map