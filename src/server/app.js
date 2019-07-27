"use strict";

var cov_1mhy5y0z2 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\app.js";
  var hash = "e640cb4eb0e20d654c546d57e403233d440015d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\app.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 16
        }
      },
      "1": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 21
        }
      },
      "2": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 48
        }
      },
      "3": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 24
        }
      },
      "4": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 72
        }
      },
      "5": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "6": {
        start: {
          line: 23,
          column: 1
        },
        end: {
          line: 23,
          column: 57
        }
      },
      "7": {
        start: {
          line: 26,
          column: 13
        },
        end: {
          line: 26,
          column: 37
        }
      },
      "8": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 34
        }
      },
      "9": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 30
        }
      },
      "10": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "11": {
        start: {
          line: 31,
          column: 1
        },
        end: {
          line: 31,
          column: 59
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 13
          },
          end: {
            line: 22,
            column: 14
          }
        },
        loc: {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 17
          },
          end: {
            line: 30,
            column: 18
          }
        },
        loc: {
          start: {
            line: 30,
            column: 23
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 30
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 26,
            column: 13
          },
          end: {
            line: 26,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 26,
            column: 13
          },
          end: {
            line: 26,
            column: 29
          }
        }, {
          start: {
            line: 26,
            column: 33
          },
          end: {
            line: 26,
            column: 37
          }
        }],
        line: 26
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
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e640cb4eb0e20d654c546d57e403233d440015d0"
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

var _dotenv = _interopRequireDefault(require("dotenv"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../../swagger.json"));

var _property = _interopRequireDefault(require("./routes/property"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_1mhy5y0z2.s[0]++;

// import user from './server/model/userDB';
_dotenv.default.config();

const app = (cov_1mhy5y0z2.s[1]++, (0, _express.default)());
cov_1mhy5y0z2.s[2]++;
app.use(_express.default.urlencoded({
  extended: true
}));
cov_1mhy5y0z2.s[3]++;
app.use(_express.default.json()); // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

cov_1mhy5y0z2.s[4]++;
app.get('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
cov_1mhy5y0z2.s[5]++;
app.get('/', (req, res) => {
  cov_1mhy5y0z2.f[0]++;
  cov_1mhy5y0z2.s[6]++;
  res.status(200).send('Welcome to the Property Pro API');
});
const port = (cov_1mhy5y0z2.s[7]++, (cov_1mhy5y0z2.b[0][0]++, process.env.PORT) || (cov_1mhy5y0z2.b[0][1]++, 8080)); // LOAD ROUTES HERE

cov_1mhy5y0z2.s[8]++;
app.use('/api/v1', _property.default);
cov_1mhy5y0z2.s[9]++;
app.use('/api/v1', _user.default);
cov_1mhy5y0z2.s[10]++;
app.listen(port, () => {
  cov_1mhy5y0z2.f[1]++;
  cov_1mhy5y0z2.s[11]++;
  console.log(`Server started on http://localhost:${port}`);
});
var _default = app;
exports.default = _default;