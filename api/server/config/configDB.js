import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let connect;
if (process.env.NODE_ENV === 'test') {
	connect = process.env.TEST_DB;
} else {
	connect = 'postgresql://khnjslky:ZoN1Hy5Ll1xETtkh7XNXDydIGIXoZUup@otto.db.elephantsql.com:5432/khnjslky';
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
