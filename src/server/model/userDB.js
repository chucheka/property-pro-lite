"use strict";

var cov_2mk0avlo2z = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\userDB.js";
  var hash = "0be6d408a4c34493bca82a94f3e5abee9f36a31d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\userDB.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 13,
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
    hash: "0be6d408a4c34493bca82a94f3e5abee9f36a31d"
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
const users = (cov_2mk0avlo2z.s[0]++, [{
  token: '45erkjherht45495783',
  id: 1,
  email: 'ryanucheka@gmail.com',
  first_name: 'Chike',
  last_name: 'Ucheka',
  password: 'chike22ucheka',
  phoneNumber: '09030467496',
  address: 'No 14 Alfa Oyo street',
  is_admin: true
}]);
var _default = users;
exports.default = _default;