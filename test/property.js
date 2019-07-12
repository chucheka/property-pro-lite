import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
// import { properties } from '../api/server/model/propertyDB';

const { expect } = chai;
chai.use(chaiHttp);
const property = {
	id: 34,
	owner: 1,
	status: 'available',
	price: 50000,
	state: 'Imo',
	city: 'Owerri',
	address: 'World Bank Housing Estate',
	type: '2 Bedroom',
	created_on: '2019-09-21:01:34',
	image_url: '/image/avatar.png'
};
describe('/POST/property', () => {
	it('it should create a new property ad', (done) => {
		chai
			.request(app)
			.post('/api/v1/property')
			.set('content', 'multipart/formData')
			.send(property)
			.end((err, res) => {
				expect(res).to.have.status(201);
				expect(res.body.status).to.equal('success');
				expect(res.body.data).to.be.an('object');
				expect(res.body.data).to.include({
					id: property.id,
					owner: property.owner,
					status: property.status,
					type: property.type,
					price: property.price,
					state: property.state,
					city: property.city,
					image_url: property.image_url
				});
				done(err);
			});
	});
	it('it should not create an advert that already exists', (done) => {
		// Give property Id an Id that already exists
		property.id = 1;
		chai
			.request(app)
			.post('/api/v1/property')
			.set('content', 'multipart/formData')
			.send(property)
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body.status).to.equal('error');
				expect(res.body.error).to.have.equal('Property ad already exists');
				done(err);
			});
	});
});
describe('/PATCH/property/propertyId', () => {
	it('it should update a property data', (done) => {
		const propertyId = 1;
		const updateFields = {
			status: 'sold',
			type: '3 Bedroom',
			price: 40000,
			image_url: '/image/newAvatar.png'
		};
		chai
			.request(app)
			.patch(`/api/v1/property/${propertyId}`)
			.set('content', 'multipart/formData')
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
		const propertyId = 'invalid Id';
		const updateFields = {
			status: 'sold',
			type: '3 Bedroom',
			price: 40000,
			image_url: '/image/newAvatar.png'
		};
		chai
			.request(app)
			.patch(`/api/v1/property/${propertyId}`)
			.set('content', 'multipart/formData')
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
		property.id = 2;
		const updateField = {
			status: 'sold'
		};
		chai
			.request(app)
			.patch(`/api/v1/property/${property.id}/sold`)
			.set('content', 'multipart/formData')
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
	it('it should not mark a property as sold if already marked sold', (done) => {
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
		chai.request(app).get('/api/v1/property/ads').set('Accept', 'application/json').end((err, res) => {
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
	it.skip('it should return empty array if no property advert', (done) => {
		chai.request(app).get('/api/v1/property/ads').set('Accept', 'application/json').end((err, res) => {
			expect(res).to.have.status(404);
			expect(res.body.status).to.equal('error');
			expect(res.body.error).to.equal('There are no property ads');
			done(err);
		});
	});
});
describe('/DELETE/property/propertyId', () => {
	it('it should delete a property', (done) => {
		property.id = 1;
		chai
			.request(app)
			.delete(`/api/v1/property/${property.id}`)
			.set('content', 'application/json')
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
		property.id = '65';
		chai
			.request(app)
			.delete(`/api/v1/property/${property.id}`)
			.set('content', 'application/json')
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
		const propertyId = 2;
		chai.request(app).get(`/api/v1/property/${propertyId}`).set('Accept', 'application/json').end((err, res) => {
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
		chai.request(app).get(`/api/v1/property/${propertyId}`).set('Accept', 'application/json').end((err, res) => {
			expect(res).to.have.status(404);
			expect(res.body.status).to.equal('error');
			expect(res.body.error).to.equal('Cannot find property ad');
			done(err);
		});
	});
});
describe('/GET/property/?type=propertyType', () => {
	it('it should get all property of specific type', (done) => {
		chai
			.request(app)
			.get('/api/v1/property/propertyId?type=2 Bedroom')
			.set('Accept', 'application/x-www-form-urlencoded')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.status).to.equal('success');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0].type).to.be.equal('2 Bedroom');
				done(err);
			});
	});
	it('it should not get property of specific type that does not exist', (done) => {
		chai
			.request(app)
			.get('/api/v1/property/propertyId?type=invalid type')
			.set('Accept', 'application/x-www-form-urlencoded')
			.end((err, res) => {
				expect(res).to.have.status(404);
				expect(res.body.status).to.equal('error');
				expect(res.body.error).to.equal('Cannot find properties of specified type');
				done(err);
			});
	});
});
