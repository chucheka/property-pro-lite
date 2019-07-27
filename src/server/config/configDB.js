"use strict";

var cov_15a6nyvn0q = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\configDB.js";
  var hash = "d531250d672d9cce9686df33101aeb2062add91d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\configDB.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 16
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 1
        },
        end: {
          line: 8,
          column: 32
        }
      },
      "3": {
        start: {
          line: 10,
          column: 1
        },
        end: {
          line: 10,
          column: 53
        }
      },
      "4": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 21
        }
      },
      "5": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 34
        }
      },
      "6": {
        start: {
          line: 14,
          column: 13
        },
        end: {
          line: 17,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 0
          },
          end: {
            line: 11,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 0
          },
          end: {
            line: 11,
            column: 1
          }
        }, {
          start: {
            line: 7,
            column: 0
          },
          end: {
            line: 11,
            column: 1
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 29
          }
        }, {
          start: {
            line: 10,
            column: 33
          },
          end: {
            line: 10,
            column: 52
          }
        }],
        line: 10
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
    f: {},
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d531250d672d9cce9686df33101aeb2062add91d"
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

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_15a6nyvn0q.s[0]++;

_dotenv.default.config();

let connect;
cov_15a6nyvn0q.s[1]++;

if (process.env.NODE_ENV === 'test') {
  cov_15a6nyvn0q.b[0][0]++;
  cov_15a6nyvn0q.s[2]++;
  connect = process.env.CLOUD_DB;
} else {
  cov_15a6nyvn0q.b[0][1]++;
  cov_15a6nyvn0q.s[3]++;
  connect = (cov_15a6nyvn0q.b[1][0]++, process.env.DB_URL) || (cov_15a6nyvn0q.b[1][1]++, process.env.TEST_DB);
}

cov_15a6nyvn0q.s[4]++;
console.log(connect);
cov_15a6nyvn0q.s[5]++;
console.log(process.env.NODE_ENV);
const pool = (cov_15a6nyvn0q.s[6]++, new _pg.Pool({
  connectionString: connect,
  max: 10
})); // pool.on('connect', () => {
// 	console.log('Coonected to database');
// });
//
// pool.on('remove', () => {
// 	console.log('client removed');
// 	process.exit(0);
// });

var _default = pool;
exports.default = _default;