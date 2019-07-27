// import pool from '../config/configDB';
// const createProperty = `DROP TABLE IF EXISTS properties CASCADE;
// CREATE TABLE properties (
//     id SERIAL PRIMARY KEY NOT NULL,
//     owner INTEGER NOT NULL,
//     status VARCHAR(255) NOT NULL CHECK(status IN('available','sold')) DEFAULT('available'),
//     price VARCHAR(255)NOT NULL,
//     state VARCHAR(255) NOT NULL,
//     city VARCHAR(255) NOT NULL,
//     address VARCHAR(255) NOT NULL,
//     type VARCHAR(255) NOT NULL,
//     created_on TIMESTAMP NOT NULL DEFAULT NOW(),
//     image_url VARCHAR(255) NOT NULL,
//     FOREIGN KEY (owner) REFERENCES users (id) ON DELETE CASCADE
// )`;
// export default async function createPropertyTable() {
// 	try {
// 		const create = await pool.query(createProperty);
// 		console.log(create, 'properties table created!!');
// 	} catch (error) {
// 		console.log(`createPropertyTable ${error}`);
// 	}
// }
"use strict";

var cov_16cb6we940 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\createPropertyTable.js";
  var hash = "dd8dc0c0ecdd5095678a84d2cc3f7bb5bd9851f9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\createPropertyTable.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "dd8dc0c0ecdd5095678a84d2cc3f7bb5bd9851f9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();