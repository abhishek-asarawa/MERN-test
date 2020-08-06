'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URL = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var MONGODB_URL = exports.MONGODB_URL = process.env.MONGODB_URL;
//# sourceMappingURL=mongoURL.js.map