import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connect;
if (process.env.NODE_ENV === 'test') {
	connect = process.env.CLOUD_DB;
} else {
	connect = process.env.TEST_DB || process.env.DB_URL;
}
console.log(connect);
console.log(process.env.NODE_ENV);
const pool = new Pool({
	connectionString: connect,
	max: 10,
	idleTimeoutMillis: 30000
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
