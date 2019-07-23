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
