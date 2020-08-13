"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const response = exports.response = (res, data, error, status, message) => {
    res.status(status).send({
        data,
        error,
        message
    });
};
//# sourceMappingURL=response.js.map