import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
// import uploads from '../middleware/multer';
import { properties } from '../model/propertyDB';

dotenv.config();
// Configure cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});
export default class PropertyController {
	// FOR CREATING PROPERTY ADVERT
	static async postAdvert(req, res) {
		const newAD = req.body;
		const oldAD = properties.find((ad) => ad.id === newAD.id);
		if (oldAD) {
			console.log(oldAD);
			return res.status(400).json({
				status: 'error',
				error: 'Property ad already exists'
			});
		}
		try {
			const result = await cloudinary.v2.uploader.upload(req.file.path, {
				public_id: `imageUploads/${req.file.originalname}`,
				use_filename: true,
				unique_filename: false
			});
			console.log(result);
			newAD.image_url = result.public_id;
			properties.push(newAD);
			res.send(newAD);
			// res.status(201).json({
			// 	status: 'success',
			// 	data: properties[properties.length - 1]
			// });
		} catch (err) {
			console.log('Image upload failed');
			console.log(err);
			res.status(400).json({
				status: 'error'
				// error: 'Image upload unsuccessful'
			});
		}
	}

	static async deleteAdvert(req, res) {
		const Id = `${req.params.propertyId}`;
		const arrLen = properties.length;
		const deleteIndex = properties.findIndex((property) => property.id === Id);
		if (deleteIndex === -1) {
			return res.status(404).json({
				status: 'error',
				error: 'Property ad does not exist'
			});
		}
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
		try {
			const imageId = properties[deleteIndex].image_url;
			console.log(imageId);
			const result = await cloudinary.v2.api.delete_resources([ imageId ]);
			console.log(result);
		} catch (err) {
			console.log(err);
		}
	}

	// TO MARK PROPERTY AS SOLD
	static async markAsSold(req, res) {
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
	}

	static async updateAdvert(req, res) {
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
	}

	static async getPropertyAdverts(req, res) {
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
	}

	static async getSpecificProperty(req, res) {
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
	}

	static async getPropertyADvert(req, res) {
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
	}
}
