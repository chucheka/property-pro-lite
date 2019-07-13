"use strict";

var cov_1mhy5y0z2 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\app.js";
  var hash = "fe01385ad2dc7414eaa81f5b5988ed21c9935d4a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\app.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 16
        }
      },
      "1": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 21
        }
      },
      "2": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 52
        }
      },
      "3": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 27
        }
      },
      "4": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "5": {
        start: {
          line: 20,
          column: 1
        },
        end: {
          line: 20,
          column: 57
        }
      },
      "6": {
        start: {
          line: 23,
          column: 13
        },
        end: {
          line: 23,
          column: 37
        }
      },
      "7": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 34
        }
      },
      "8": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 30
        }
      },
      "9": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "10": {
        start: {
          line: 28,
          column: 1
        },
        end: {
          line: 28,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 13
          },
          end: {
            line: 19,
            column: 14
          }
        },
        loc: {
          start: {
            line: 19,
            column: 27
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 19
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 27,
            column: 18
          }
        },
        loc: {
          start: {
            line: 27,
            column: 23
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 13
          },
          end: {
            line: 23,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 13
          },
          end: {
            line: 23,
            column: 29
          }
        }, {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 37
          }
        }],
        line: 23
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "fe01385ad2dc7414eaa81f5b5988ed21c9935d4a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _property = _interopRequireDefault(require("./routes/property"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_1mhy5y0z2.s[0]++;

// import user from './server/model/userDB';
_dotenv.default.config();

const app = (cov_1mhy5y0z2.s[1]++, (0, _express.default)()); // app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

cov_1mhy5y0z2.s[2]++;
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
cov_1mhy5y0z2.s[3]++;
app.use(_bodyParser.default.json());
cov_1mhy5y0z2.s[4]++;
app.get('/', (req, res) => {
  cov_1mhy5y0z2.f[0]++;
  cov_1mhy5y0z2.s[5]++;
  res.status(200).send('Welcome to the Property Pro API');
});
const port = (cov_1mhy5y0z2.s[6]++, (cov_1mhy5y0z2.b[0][0]++, process.env.PORT) || (cov_1mhy5y0z2.b[0][1]++, 8080)); // LOAD ROUTES HERE

cov_1mhy5y0z2.s[7]++;
app.use('/api/v1', _property.default);
cov_1mhy5y0z2.s[8]++;
app.use('/api/v1', _user.default);
cov_1mhy5y0z2.s[9]++;
app.listen(port, () => {
  cov_1mhy5y0z2.f[1]++;
  cov_1mhy5y0z2.s[10]++;
  console.log(`Server started on http://localhost:${port}`);
});
var _default = app;
exports.default = _default;