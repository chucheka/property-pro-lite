"use strict";

var cov_2az2r44vcg = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\sql.js";
  var hash = "461b04dbe70507c7176e906b809b1073f819c7d4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\sql.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 19
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "2": {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 24,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "461b04dbe70507c7176e906b809b1073f819c7d4"
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
exports.createProperty = exports.deleteUser = exports.createUser = void 0;
// USERS SQL QUERIES
const createUser = (cov_2az2r44vcg.s[0]++, {
  text: 'INSERT INTO users(email,first_name,last_name,password,phonenumber,address,is_admin) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *',
  values: ['ryanucheka@gmail.com', 'Chike', 'Ucheka', 'chike22ucheka', '09030467496', 'N0 14 Alfa Oyo street', true]
});
exports.createUser = createUser;
const deleteUser = (cov_2az2r44vcg.s[1]++, {
  text: "DELETE FROM users WHERE email = 'johndoe@gmail.com'"
}); // PROPERTIES SQL QUERIES

exports.deleteUser = deleteUser;
const createProperty = (cov_2az2r44vcg.s[2]++, {
  text: 'INSERT INTO properties(owner,state,city,address,type,status,price,image_url) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
  values: ['1', 'Imo', 'Owerri', 'Area M, World Bank Housing Estate', '2 Bedroom', 'available', '50,000', '/images/avatar.png']
});
exports.createProperty = createProperty;