import express from 'express';
// import { uploader, cloudinaryConfig } from '../config/cloudinaryConfig';
// import { multerUploads, dataUri } from '../middlewares/multer';
import { properties } from '../model/propertyDB';

const router = express.Router();

// router.use('*', cloudinaryConfig);
router.post('/property', (req, res) => {
	const newAD = req.body;
	const oldAD = properties.find((ad) => ad.id === newAD.id);
	if (oldAD) {
		res.status(400).json({
			status: 'error',
			error: 'Property ad already exists'
		});
	} else {
		properties.push(newAD);
		// cannot post property with the same id
		res.status(201).json({
			status: 'success',
			data: properties[properties.length - 1]
		});
	}
});
router.delete('/property/:propertyId', (req, res) => {
	const Id = parseInt(req.params.propertyId, 10);
	const arrLen = properties.length;
	const deleteIndex = properties.findIndex((property) => property.id === Id);
	if (deleteIndex === -1) {
		res.status(404).json({
			status: 'error',
			error: 'Property ad does not exist'
		});
	} else {
		properties.splice(deleteIndex, 1);
		const newLen = properties.length;
		if (arrLen > newLen) {
			res.status(201).json({
				status: 'success',
				data: {
					message: `property with id ${Id} successfully deleted!!`
				}
			});
		}
	}
});
router.patch('/property/:propertyId/sold', (req, res) => {
	const Id = parseInt(req.params.propertyId, 10);
	const toMarkSold = properties.find((property) => property.id === Id);
	if (toMarkSold && toMarkSold.status === 'available') {
		toMarkSold.status = 'sold';
		res.status(201).json({
			status: 'success',
			data: toMarkSold
		});
	} else {
		res.status(400).json({
			status: 'error',
			error: 'property already marked sold!'
		});
	}
});

// Update a property ad
router.patch('/property/:propertyId', (req, res) => {
	const updateFileds = req.body;
	const Id = parseInt(req.params.propertyId, 10);
	const toUpdateAD = properties.find((property) => property.id === Id);
	if (!toUpdateAD) {
		res.status(400).json({
			status: 'error',
			error: 'Advert does not exist'
		});
	} else {
		const updateKeys = Object.keys(updateFileds);
		const updateValues = Object.values(updateFileds);
		updateKeys.forEach((key, index) => {
			toUpdateAD[key] = updateValues[index];
		});
		res.status(201).json({
			status: 'success',
			data: toUpdateAD
		});
	}
});

router.get('/property/ads', (req, res) => {
	const len = properties.length;
	if (len > 0) {
		res.status(200).json({
			status: 'success',
			data: properties
		});
	} else {
		res.status(404).json({
			status: 'error',
			error: 'There are no property ads'
		});
	}
});
// [[THIS GETS PROPERTIES OF SPECIFIC TYPE]]
router.get('/property/propertyId', (req, res) => {
	const propType = req.query.type;
	const props = [];
	properties.forEach((element) => {
		if (element.type === propType) {
			props.push(element);
		}
	});
	if (props.length === 0) {
		res.status(404).json({
			status: 'error',
			error: 'Cannot find properties of specified type'
		});
	} else {
		res.status(200).json({
			status: 'success',
			data: props
		});
	}
});
router.get('/property/:propertyId', (req, res) => {
	const Id = parseInt(req.params.propertyId, 10);
	const property = properties.find((prop) => prop.id === Id);
	if (!property) {
		res.status(404).json({
			status: 'error',
			error: 'Cannot find property ad'
		});
	} else {
		res.status(200).json({
			status: 'success',
			data: property
		});
	}
});
export default router;
