import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('API TESTING', () => {
	const user = {
		token: '4535',
		id: 1,
		first_name: 'Chike',
		last_name: 'Ucheka',
		email: 'ryanucheka@gmail.com',
		password: 'chike22ucheka'
	};

	describe('/POST/user/auth/signup', () => {
		it('it should create a new user', (done) => {
			chai
				.request(app)
				.post('/api/v1/user/auth/signup')
				.set('Accept', 'application/json')
				.send(JSON.stringify(user))
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
	});

	describe('/POST/user/auth/signin', () => {
		it('it should login user', (done) => {
			const payload = {
				email: user.email,
				password: user.password
			};
			chai
				.request(app)
				.post('/api/v1/user/auth/signin')
				.set('Accept', 'application/json')
				.send(JSON.stringify(payload))
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
	});
});
