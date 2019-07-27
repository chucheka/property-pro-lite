"use strict";

var cov_274bf47by6 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\auth.js";
  var hash = "94f31665c4e8cafdeef63b4ec27d44e6356fff10";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 1
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "2": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 5,
          column: 73
        }
      },
      "3": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 7,
          column: 57
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 26
        }
      },
      "5": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 9
        }
      },
      "6": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 14,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 55
          }
        }, {
          start: {
            line: 5,
            column: 59
          },
          end: {
            line: 5,
            column: 73
          }
        }],
        line: 5
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "94f31665c4e8cafdeef63b4ec27d44e6356fff10"
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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_274bf47by6.s[0]++;

const verifyToken = (req, res, next) => {
  cov_274bf47by6.f[0]++;
  cov_274bf47by6.s[1]++;

  try {
    const token = (cov_274bf47by6.s[2]++, (cov_274bf47by6.b[0][0]++, req.headers.authorization.split(' ')[1]) || (cov_274bf47by6.b[0][1]++, res.body.token));
    const authData = (cov_274bf47by6.s[3]++, _jsonwebtoken.default.verify(token, process.env.JWT_KEY));
    cov_274bf47by6.s[4]++;
    req.userData = authData;
    cov_274bf47by6.s[5]++;
    next();
  } catch (error) {
    cov_274bf47by6.s[6]++;
    return res.status(403).json({
      status: 'error',
      error: 'Invalid token supplied'
    });
  }
};

var _default = verifyToken;
exports.default = _default;