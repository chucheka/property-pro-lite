import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/server/app';
import { generateToken } from '../api/server/config/auth';

const userAuth = {
	userId: 2,
	email: 'bigmike@gmail.com'
};
let token;
before(async () => {
	token = generateToken(userAuth);
});

const { expect } = chai;
chai.use(chaiHttp);
const property = {
	owner: 6,
	status: 'available',
	price: '50000',
	state: 'Anamabra',
	city: 'Onitcha',
	address: 'Alfred Street',
	type: '2 Bedroom',
	image_url: '/images/avatar.png'
};
describe('PROPERTY TESTING', () => {
	describe('/POST/property', () => {
		it('it should create a new property ad', (done) => {
			chai
				.request(app)
				.post('/api/v1/property')
				.set('content', 'multipart/formData')
				.set('Authorization', `Bearer ${token}`)
				.send(property)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.be.an('object');
					expect(res.body.data).to.include({
						owner: property.owner,
						status: property.status,
						type: property.type,
						price: property.price,
						state: property.state,
						city: property.city
					});
					done(err);
				});
		});
		it.skip('it should not create an advert due to internal server error', (done) => {
			// Give property Id an Id that already exists
			chai
				.request(app)
				.post('/api/v1/property')
				.set('content', 'multipart/formData')
				.set('Authorization', `Bearer ${token}`)
				.send(property)
				.end((err, res) => {
					expect(res).to.have.status(500);
					expect(res.body.status).to.equal('error');
					expect(res.body).to.have.property('error');
					done(err);
				});
		});
	});
	describe('/PATCH/property/propertyId', () => {
		it('it should update a property data', (done) => {
			const propertyId = 4;
			const updateFields = {
				state: 'Anambra',
				city: 'Akwa',
				status: 'sold',
				type: '3 Bedroom',
				price: '40000',
				image_url: '/image/newAvatar.png'
			};
			chai
				.request(app)
				.patch(`/api/v1/property/${propertyId}`)
				.set('content', 'multipart/formData')
				.set('Authorization', `Bearer ${token}`)
				.send(updateFields)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.include({
						status: updateFields.status,
						type: updateFields.type,
						price: updateFields.price,
						image_url: updateFields.image_url
					});
					done(err);
				});
		});
		it('it should not update a property data with invalid propertyId', (done) => {
			const propertyId = 5445;
			const updateFields = {
				status: 'sold',
				type: '3 Bedroom',
				price: '40000',
				image_url: '/image/newAvatar.png'
			};
			chai
				.request(app)
				.patch(`/api/v1/property/${propertyId}`)
				.set('content', 'multipart/formData')
				.set('Authorization', `Bearer ${token}`)
				.send(updateFields)
				.end((err, res) => {
					expect(res).to.have.status(404);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('Advert does not exist');
					done(err);
				});
		});
	});
	describe('/PATCH/property/propertyId/sold', () => {
		it('it should mark a property as sold', (done) => {
			property.id = 3;
			const updateField = {
				status: 'sold'
			};
			chai
				.request(app)
				.patch(`/api/v1/property/${property.id}/sold`)
				.set('Authorization', `Bearer ${token}`)
				.send(updateField)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.include({
						status: updateField.status
					});
					done(err);
				});
		});
		it.skip('it should not mark a property as sold if already marked sold', (done) => {
			const updateField = {
				status: 'sold'
			};
			chai
				.request(app)
				.patch(`/api/v1/property/${property.id}/sold`)
				.set('content', 'multipart/formData')
				.send(updateField)
				.end((err, res) => {
					expect(res).to.have.status(400);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('property already marked sold!');
					done(err);
				});
		});
	});
	// Passed so far
	describe('GET/property/ads', () => {
		it('it should get all property adverts', (done) => {
			chai.request(app).get('/api/v1/property/ads').set('Authorization', `Bearer ${token}`).end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property('status');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0]).to.be.an('object');
				expect(res.body.data[0]).to.have.property('id');
				expect(res.body.data[0]).to.have.property('owner');
				expect(res.body.data[0]).to.have.property('type');
				expect(res.body.data[0]).to.have.property('price');
				expect(res.body.data[0]).to.have.property('state');
				expect(res.body.data[0]).to.have.property('image_url');
				done(err);
			});
		});
		// For this to work,need to delete all property advert
		it.skip('it should return empty array if no property advert', (done) => {
			chai.request(app).get('/api/v1/property/ads').set('Accept', 'application/json').end((err, res) => {
				expect(res).to.have.status(404);
				expect(res.body.status).to.equal('error');
				expect(res.body.error).to.equal('There are no property adverts!!');
				done(err);
			});
		});
	});
	describe('/DELETE/property/propertyId', () => {
		it.skip('it should delete a property', (done) => {
			property.id = 4;
			chai
				.request(app)
				.delete(`/api/v1/property/${property.id}`)
				.set('Authorization', `Bearer ${token}`)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.have.property(
						'message',
						`property with id ${property.id} successfully deleted!!`
					);
					done(err);
				});
		});
		it('it should not delete ad with invalid id', (done) => {
			property.id = 7655676;
			chai
				.request(app)
				.delete(`/api/v1/property/${property.id}`)
				.set('Authorization', `Bearer ${token}`)
				.end((err, res) => {
					expect(res).to.have.status(404);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('Property ad does not exist');
					done(err);
				});
		});
	});
	describe('/GET/property/:propertyId', () => {
		it('it should get a particular property', (done) => {
			const propertyId = 6;
			chai
				.request(app)
				.get(`/api/v1/property/${propertyId}`)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.be.an('object');
					expect(res.body.data).to.have.property('id');
					expect(res.body.data).to.have.property('owner');
					expect(res.body.data).to.have.property('state');
					expect(res.body.data).to.have.property('status');
					expect(res.body.data).to.have.property('address');
					expect(res.body.data).to.have.property('price');
					expect(res.body.data).to.have.property('city');
					expect(res.body.data).to.have.property('created_on');
					expect(res.body.data).to.have.property('image_url');
					done(err);
				});
		});
		it('it should not get property with invalid id', (done) => {
			const propertyId = 8788;
			chai
				.request(app)
				.get(`/api/v1/property/${propertyId}`)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res).to.have.status(404);
					expect(res.body.status).to.equal('error');
					expect(res.body.error).to.equal('Cannot find property ad');
					done(err);
				});
		});
	});
	describe('/GET/property/?type=propertyType', () => {
		it('it should get all property of specific type', (done) => {
			chai.request(app).get("/api/v1/property/propertyId?type='2 Bedroom'").end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.status).to.equal('success');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0]).to.have.property('type');
				expect(res.body.data[0].type).not.equal('null');
				done(err);
			});
		});
		it('it should not get property of specific type that does not exist', (done) => {
			chai.request(app).get("/api/v1/property/propertyId?type='Invalid type'").end((err, res) => {
				expect(res).to.have.status(404);
				expect(res.body.status).to.equal('error');
				expect(res.body.error).to.equal('Cannot find properties of specified type');
				done(err);
			});
		});
	});
});
