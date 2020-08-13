"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoURL = require("../config/mongoURL.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// connecting to db
// importing package
_mongoose2.default.connect(_mongoURL.MONGODB_URL || "mongodb://localhost/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(console.log('database is connected...')).catch(err => console.log(err));
//# sourceMappingURL=mongodb.js.map