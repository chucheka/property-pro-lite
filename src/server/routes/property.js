"use strict";

var cov_2mt4gfgnuz = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\routes\\property.js";
  var hash = "831e4775f985d13010e568260c6c26a5bfbf7acf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\routes\\property.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 31
        }
      },
      "1": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 54
        }
      },
      "2": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 54
        }
      },
      "3": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 85
        }
      },
      "4": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 72
        }
      },
      "5": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 74
        }
      },
      "6": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 71
        }
      },
      "7": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 67
        }
      },
      "8": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 75
        }
      },
      "9": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 74
        }
      }
    },
    fnMap: {},
    branchMap: {},
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
      "9": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "831e4775f985d13010e568260c6c26a5bfbf7acf"
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

var _multer = _interopRequireDefault(require("../middleware/multer"));

var _property = _interopRequireDefault(require("../controllers/property"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (cov_2mt4gfgnuz.s[0]++, _express.default.Router());
cov_2mt4gfgnuz.s[1]++;
router.get('/auth/signup', _property.default.signup);
cov_2mt4gfgnuz.s[2]++;
router.get('/auth/signin', _property.default.signin);
cov_2mt4gfgnuz.s[3]++;
router.post('/property', _multer.default.single('image_url'), _property.default.postAdvert);
cov_2mt4gfgnuz.s[4]++;
router.delete('/property/:propertyId', _property.default.deleteAdvert);
cov_2mt4gfgnuz.s[5]++;
router.patch('/property/:propertyId/sold', _property.default.markAsSold);
cov_2mt4gfgnuz.s[6]++;
router.patch('/property/:propertyId', _property.default.updateAdvert);
cov_2mt4gfgnuz.s[7]++;
router.get('/property/ads', _property.default.getPropertyAdverts);
cov_2mt4gfgnuz.s[8]++;
router.get('/property/propertyId', _property.default.getSpecificProperty);
cov_2mt4gfgnuz.s[9]++;
router.get('/property/:propertyId', _property.default.getPropertyADvert);
var _default = router;
exports.default = _default;