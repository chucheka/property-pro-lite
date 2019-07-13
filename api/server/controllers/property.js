import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
// import uploads from '../middleware/multer';
import properties from '../model/propertyDB';

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
		const noFile = req.file;
		if (!noFile) {
			const oldAD = properties.find((ad) => ad.id === newAD.id);
			if (oldAD) {
				return res.status(400).json({
					status: 'error',
					error: 'Property ad already exists'
				});
			}
			properties.push(newAD);
			return res.status(201).json({
				status: 'success',
				data: properties[properties.length - 1]
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
			res.status(201).json({
				status: 'success',
				data: properties[properties.length - 1]
			});
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
		const Id = parseInt(req.params.propertyId, 10);
		// const arrLen = properties.length;
		const deleteIndex = properties.findIndex((property) => parseInt(property.id, 10) === Id);
		if (deleteIndex === -1) {
			res.status(404).json({
				status: 'error',
				error: 'Property ad does not exist'
			});
		} else {
			if (!req.file) {
				try {
					const imageId = properties[deleteIndex].image_url;
					console.log(imageId);
					const result = await cloudinary.v2.api.delete_resources([ imageId ]);
					console.log('cloudinary image successfully deleted!!', result);
				} catch (err) {
					console.log(err);
				}
			}
			properties.splice(deleteIndex, 1);
			// const newLen = properties.length;
			res.status(201).json({
				status: 'success',
				data: {
					message: `property with id ${Id} successfully deleted!!`
				}
			});
		}
	}

	// TO MARK PROPERTY AS SOLD
	static async markAsSold(req, res) {
		const Id = parseInt(req.params.propertyId, 10);
		const toMarkSold = properties.find((property) => parseInt(property.id, 10) === Id);
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

	static updateAdvert(req, res) {
		const formBody = req.body;
		const Id = parseInt(req.params.propertyId, 10);
		const toUpdateAD = properties.find((property) => parseInt(property.id, 10) === Id);
		if (!toUpdateAD) {
			res.status(404).json({
				status: 'error',
				error: 'Advert does not exist'
			});
		} else {
			const updateKeys = Object.keys(formBody);
			const updateValues = Object.values(formBody);
			updateKeys.forEach((fields, index) => {
				toUpdateAD[`${fields}`] = updateValues[index];
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
		} else if (len === 0) {
			res.status(404).json({
				he: 'error',
				error: 'There are no property ads'
			});
		}
	}
	// /property/propertyId?type=2 Bedroom

	static getSpecificProperty(req, res) {
		const propType = req.query.type;
		const props = [];
		properties.forEach((prop) => {
			if (prop.type === propType) {
				props.push(prop);
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

	static getPropertyADvert(req, res) {
		const Id = parseInt(req.params.propertyId, 10);
		console.log(Id);
		const property = properties.find((prop) => parseInt(prop.id, 10) === Id);
		if (property) {
			res.status(200).json({
				status: 'success',
				data: property
			});
		} else {
			res.status(404).json({
				status: 'error',
				error: 'Cannot find property ad'
			});
		}
	}
}
