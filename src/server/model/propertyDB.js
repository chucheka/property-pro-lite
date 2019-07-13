"use strict";

var cov_1ih93bu4fw = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\propertyDB.js";
  var hash = "1907992be99d8ff31792b953d20b5696450ce6a2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\propertyDB.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 19
        },
        end: {
          line: 26,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1907992be99d8ff31792b953d20b5696450ce6a2"
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
const properties = (cov_1ih93bu4fw.s[0]++, [{
  id: 1,
  owner: 1,
  status: 'available',
  price: '50000',
  state: 'Imo',
  city: 'Owerri',
  address: 'World Bank Housing Estate',
  type: '2 Bedroom',
  created_on: '2019-09-21:01:34',
  image_url: '/image/avatar.png'
}, {
  id: 2,
  owner: 2,
  status: 'available',
  price: '50000',
  state: 'Imo',
  city: 'Owerri',
  address: 'World Bank Housing Estate',
  type: '2 Bedroom',
  created_on: '2019-09-21:01:34',
  image_url: '/image/avatar.png'
}]);
var _default = properties;
exports.default = _default;