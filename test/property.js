import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

const { expect } = chai;

chai.use(chaiHttp);

describe('API TESTING', () => {
	const property = {
		id: 1,
		owner: 1,
		status: 'available',
		price: 50000,
		state: 'Imo',
		city: 'Owerri',
		address: 'World Bank Housing Estate',
		type: '2 Bedroom',
		created_on: '2019-09-21:01:34',
		image_url: '/image/avata.png'
	};
	describe('/POST/property', () => {
		it('it should create a property ad', (done) => {
			chai
				.request(app)
				.post('/api/v1/property')
				.set('content', 'multipart/formData')
				.send(property)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.include({
						id: property.id,
						status: property.status,
						type: property.type,
						price: property.price,
						image_url: property.image_url
					});
					done(err);
				});
		});
	});
	describe('/PATCH/property/propertyId', () => {
		it('it should update a property data', (done) => {
			const updateFields = {
				status: 'sold',
				type: '3 Bedroom',
				price: 40000,
				image_url: '/image/newAvatar.png'
			};
			chai
				.request(app)
				.patch(`/api/v1/property/${property.id}`)
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
	});
	describe(`/PATCH/property/${property.id}/sold`, () => {
		it('it should mark a property as sold', (done) => {
			const updateFields = {
				status: 'sold'
			};
			chai
				.request(app)
				.patch(`/api/v1/property/${property.id}/sold`)
				.set('content', 'multipart/formData')
				.send(updateFields)
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.include({
						status: updateFields.status
					});
					done(err);
				});
		});
	});
	describe(`/DELETE/property/${property.id}`, () => {
		it('it should delete a property', (done) => {
			chai
				.request(app)
				.delete(`/api/v1/property/${property.id}`)
				.set('content', 'application/json')
				.end((err, res) => {
					expect(res).to.have.status(201);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.have.property(
						'message',
						`property with id ${property.id} cannot be found!!`
					);
					done(err);
				});
		});
	});
	describe('/GET/property/propertyId', () => {
		it('it should get all property adverts', (done) => {
			chai.request(app).get('/api/v1/property').set('Accept', 'application/json').end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.status).to.equal('success');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0]).to.be.an('object');
				expect(res.body.data[0]).to.include({
					id: property.id,
					type: property.type,
					price: property.price,
					state: property.state,
					image_url: property.image_url
				});
				done(err);
			});
		});
	});
	describe('/GET/property/type', () => {
		it('it should get all property of specific type', (done) => {
			chai.request(app).get('/api/v1/property/type').set('Accept', 'application/json').end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.status).to.equal('success');
				expect(res.body.data).to.be.an('array');
				expect(res.body.data[0]).to.be.an('object');
				expect(res.body.data[0]).to.include({
					id: property.id,
					type: property.type,
					price: property.price,
					state: property.state,
					image_url: property.image_url
				});
				done(err);
			});
		});
	});
	describe(`/GET/property/${property.id}`, () => {
		it('it should get a specific property', (done) => {
			chai
				.request(app)
				.get(`/api/v1/property/${property.id}`)
				.set('Accept', 'application/json')
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body.status).to.equal('success');
					expect(res.body.data).to.be.an('object');
					expect(res.body.data).to.include({
						id: property.id,
						type: property.type,
						price: property.price,
						state: property.state,
						image_url: property.image_url
					});
					done(err);
				});
		});
	});
});
