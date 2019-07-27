import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connect;
if (process.env.NODE_ENV === 'test') {
	connect = process.env.TEST_DB;
} else {
	connect = process.env.CLOUD_DB || process.en.DB_URL;
}
console.log(connect);
console.log(process.env.NODE_ENV);
const pool = new Pool({
	connectionString: connect,
	max: 10
});

// pool.on('connect', () => {
// 	console.log('Coonected to database');
// });
//
// pool.on('remove', () => {
// 	console.log('client removed');
// 	process.exit(0);
// });

export default pool;
