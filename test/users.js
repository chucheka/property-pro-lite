import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('API TESTING', () => {
	describe('/POST/user/auth/signup', () => {
		const user = {
			token: '45erkjherht45495783',
			id: 1,
			email: 'johndoe@gmail.com',
			first_name: 'John',
			last_name: 'Doe',
			password: 'john22doe',
			phoneNumber: '09030467496',
			address: 'No 14 Alaska Street',
			is_admin: true
		};

		it('it should create a new user', (done) => {
			chai
				.request(app)
				.post('/api/v1/user/auth/signup')
				.set('Accept', 'application/json')
				.send(user)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.data).to.include({
						token: user.token,
						id: user.id,
						first_name: user.first_name,
						last_name: user.last_name,
						email: user.email,
						password: user.password
					});
					done(err);
				});
		});
		it('it should not create user if user exists', (done) => {
			user.email = 'ryanucheka@gmail.com';
			chai
				.request(app)
				.post('/api/v1/user/auth/signup')
				.set('Accept', 'application/json')
				.send(user)
				.end((err, res) => {
					expect(res).to.have.status(400);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('email already taken');
					done(err);
				});
		});
	});

	describe('/POST/user/auth/signin', () => {
		it('it should login user', (done) => {
			const user = {
				token: '45erkjherht45495783',
				id: 1,
				email: 'ryanucheka@gmail.com',
				first_name: 'Chike',
				last_name: 'Ucheka',
				password: 'chike22ucheka',
				phoneNumber: '09030467496',
				address: 'No 14 Alfa Oyo street ',
				is_admin: true
			};

			const payload = {
				email: user.email,
				password: user.password
			};
			chai
				.request(app)
				.post('/api/v1/user/auth/signin')
				.set('Accept', 'application/json')
				.send(payload)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.data).to.include({
						token: user.token,
						id: user.id,
						first_name: user.first_name,
						last_name: user.last_name,
						email: user.email,
						password: user.password
					});
					done(err);
				});
		});
		it('it should not login user with incorrect credentials', (done) => {
			const payload = {
				email: 'invalid@gmail.com',
				password: 'incorrectpassword'
			};
			chai
				.request(app)
				.post('/api/v1/user/auth/signin')
				.set('Accept', 'application/json')
				.send(payload)
				.end((err, res) => {
					expect(res).to.have.status(401);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('Invalid email or password!!');
					done(err);
				});
		});
	});
});
