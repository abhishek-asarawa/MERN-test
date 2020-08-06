"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

require("./database/mongodb.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import packages
_dotenv2.default.config();

var __dirname = _path2.default.resolve();

// connecting to databse


// init
var app = (0, _express2.default)();
var publicPath = _path2.default.join(__dirname, "client", "build");
var port = process.env.PORT || 3000;

// middlewares
app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.static(publicPath));

app.get('/*', function (req, res) {
    res.sendFile(_path2.default.join(publicPath, 'index.html'));
});

app.listen(port, console.log("Server is runnning on " + port));
//# sourceMappingURL=server.js.map