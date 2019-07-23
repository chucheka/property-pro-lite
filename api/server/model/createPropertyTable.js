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
