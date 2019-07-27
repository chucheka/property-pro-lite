// import pool from '../config/configDB';
// const userTable = `DROP TABLE IF EXISTS users CASCADE ;
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255)NOT NULL,
//     first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     phoneNumber VARCHAR(255) NOT NULL,
//     address VARCHAR(255) NOT NULL,
//     is_admin BOOLEAN NOT NULL DEFAULT ('false')
// )`;
// export default async function createUserTable() {
// 	try {
// 		const create = await pool.query(userTable);
// 		console.log(create, 'users table created!!');
// 	} catch (error) {
// 		console.log(`userTable ${error}`);
// 	}
// }
"use strict";

var cov_2noa6430fy = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\createUserTable.js";
  var hash = "8259a4ab38be0c5db7388798cd480c51969b4388";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\propertypro3\\property-pro-lite\\api\\server\\model\\createUserTable.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8259a4ab38be0c5db7388798cd480c51969b4388"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();