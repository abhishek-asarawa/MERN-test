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

var _user = require("./routes/user.route");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import packages
_dotenv2.default.config();

__dirname = _path2.default.resolve();

// connecting to databse


// importing routes


// init
const app = (0, _express2.default)();
const publicPath = _path2.default.join(__dirname, "client", "build");
const port = process.env.PORT || 3000;

// middlewares
app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
// app.use(express.static(publicPath));


// routing
app.use("/api/users", _user2.default);

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });


app.listen(port, console.log(`Server is runnning on ${port}`));
//# sourceMappingURL=server.js.map