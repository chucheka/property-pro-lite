import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/server/app';
import pool from '../api/server/config/configDB';
import { deleteUser } from '../api/server/config/sql';

const { expect } = chai;

chai.use(chaiHttp);

describe('API TESTING', () => {
	// beforeEach(async () => {
	// 	const result = await pool.query(createUser);
	// 	if (result.rows.length > 0) {
	// 		console.log('Test user created');
	// 	}
	// });
	afterEach(async () => {
		const result = await pool.query(deleteUser);
		if (result.rows.length > 0) {
			console.log('Test User Delected');
		}
	});
	describe('/POST/auth/signup', () => {
		const user = {
			email: 'johndoe@gmail.com',
			first_name: 'John',
			last_name: 'DOE',
			password: 'john22doe',
			password2: 'john22doe',
			phonenumber: '09030467496',
			address: 'No 14 Alaska Street',
			is_admin: false
		};
		it('it should create a new user', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/signup')
				.set('Accept', 'application/json')
				.send(user)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body).to.have.property('status', 'success');
					expect(res.body.data).to.have.property('token');
					expect(res.body.data).to.have.property('password');
					expect(res.body.data).to.include({
						first_name: user.first_name,
						last_name: user.last_name,
						email: user.email,
						phonenumber: user.phonenumber,
						address: user.address,
						is_admin: user.is_admin
					});
					done(err);
				});
		});
		it('it should not create user if user exists', (done) => {
			const user1 = {
				email: 'ryanucheka@gmail.com',
				first_name: 'Chike',
				last_name: 'Ucheka',
				password: 'chike22ucheka',
				password2: 'chike22ucheka',
				phonenumber: '09030467496',
				address: 'No 14 Alaska Street',
				is_admin: false
			};
			chai
				.request(app)
				.post('/api/v1/auth/signup')
				.set('Accept', 'application/json')
				.send(user1)
				.end((err, res) => {
					expect(res).to.have.status(409);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('User with email already exist!!');
					done(err);
				});
		});
	});

	describe('/POST/auth/signin', () => {
		it('it should login user', (done) => {
			const payload = {
				email: 'ryanucheka@gmail.com',
				password: 'chike22ucheka'
			};
			chai
				.request(app)
				.post('/api/v1/auth/signin')
				.set('Accept', 'application/json')
				.send(payload)
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body.data).to.have.property('email', payload.email);
					expect(res.body.data).to.have.property('token');
					expect(res.body.data).to.have.property('password');
					expect(res.body.data).to.have.property('address');
					expect(res.body.data).to.have.property('phonenumber');
					expect(res.body.data).to.have.property('is_admin');
					expect(res.body.data).to.have.property('first_name');
					expect(res.body.data).to.have.property('last_name');
					done(err);
				});
		});
		it.skip('it should not login user with incorrect credentials', (done) => {
			chai
				.request(app)
				.post('/api/v1/auth/signin')
				.set('Accept', 'application/json')
				.send({
					email: 'invalid@gmail.com',
					password: 'incorrectpassword'
				})
				.end((err, res) => {
					expect(res).to.have.status(404);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('Invalid email or password!!');
					done(err);
				});
		});
	});
});
