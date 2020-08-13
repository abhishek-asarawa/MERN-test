"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require("../models/user.model");

var _user2 = _interopRequireDefault(_user);

var _response = require("../utils/response");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const controller = {};

controller.signin = async (req, res, next) => {
    try {
        const user = new _user2.default(req.body);
        const data = await user.save();
        (0, _response.response)(res, data, null, 200);
    } catch (err) {
        (0, _response.response)(res, null, err, 500);
    }
};

exports.default = controller;
//# sourceMappingURL=user.controller.js.map