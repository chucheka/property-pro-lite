"use strict";

var cov_2mt4gfgnuz = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\routes\\property.js";
  var hash = "7a54d824277f9462486c6d99faacd316c5906789";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\routes\\property.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 31
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 85
        }
      },
      "2": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 72
        }
      },
      "3": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 74
        }
      },
      "4": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 71
        }
      },
      "5": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 67
        }
      },
      "6": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 75
        }
      },
      "7": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
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
      "7": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "7a54d824277f9462486c6d99faacd316c5906789"
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
router.post('/property', _multer.default.single('image_url'), _property.default.postAdvert);
cov_2mt4gfgnuz.s[2]++;
router.delete('/property/:propertyId', _property.default.deleteAdvert);
cov_2mt4gfgnuz.s[3]++;
router.patch('/property/:propertyId/sold', _property.default.markAsSold);
cov_2mt4gfgnuz.s[4]++;
router.patch('/property/:propertyId', _property.default.updateAdvert);
cov_2mt4gfgnuz.s[5]++;
router.get('/property/ads', _property.default.getPropertyAdverts);
cov_2mt4gfgnuz.s[6]++;
router.get('/property/propertyId', _property.default.getSpecificProperty);
cov_2mt4gfgnuz.s[7]++;
router.get('/property/:propertyId', _property.default.getPropertyADvert);
var _default = router;
exports.default = _default;