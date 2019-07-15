// import dotenv from 'dotenv';
// dotenv.config();
// if (process.env.NODE_ENV === 'production') {
// 	export default (postgres_url = {
// 		connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env
// 			.DB_NAME}`
// 	});
// } else {
// 	// export default cloud_postgres = {
// 	// 	connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env}`
// 	// };
// }
"use strict";

var cov_sf4p50dyr = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\database.js";
  var hash = "d2fb5c3aff626a754d5b15f212d37c86ec307d4c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\config\\database.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d2fb5c3aff626a754d5b15f212d37c86ec307d4c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();