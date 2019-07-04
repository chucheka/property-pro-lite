import express from 'express';
import { uploader, cloudinaryConfig } from '../config/cloudinaryConfig';
import { multerUploads, dataUri } from '../middlewares/multer';
import { properties } from '../model/propertyDB';

const router = express.Router();

router.use('*', cloudinaryConfig);
router.post('/property', multerUploads, (req, res) => {
	if (req.file) {
		const file = dataUri(req).content;
		return uploader
			.upload(file)
			.then((result) => {
				const image = result.url;
				return res.status(200).json({
					messge: 'Your image has been uploded successfully to cloudinary',
					data: {
						image
					}
				});
			})
			.catch((err) => {
				console.log(err);
				res.status(400).json({
					messge: 'someting went wrong while processing your request',
					data: {
						err
					}
				});
			});
	}
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

export default router;
