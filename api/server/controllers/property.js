import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import pool from '../config/configDB';

dotenv.config();

// Configure cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});
export default class PropertyController {
	// Challenge 2 scripts
	static async postAdvert(req, res) {
		const newAD = req.body;
		try {
			if (req.file) {
				const result = await cloudinary.v2.uploader.upload(req.file.path, {
					public_id: `imageUploads/${req.file.originalname}`,
					use_filename: true,
					unique_filename: false
				});
				newAD.image_url = result.public_id;
			}
			const insertAd = {
				text:
					'INSERT INTO properties(owner,state,city,address,type,status,price,image_url) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
				values: [
					newAD.owner,
					newAD.state,
					newAD.city,
					newAD.address,
					newAD.type,
					newAD.status,
					newAD.price,
					newAD.image_url
				]
			};
			const advert = await pool.query(insertAd);
			res.status(201).json({
				status: 'success',
				data: advert.rows[0]
			});
		} catch (err) {
			res.status(500).json({
				status: 'error',
				error: err.message
			});
		}
	}

	static async deleteAdvert(req, res) {
		const Id = parseInt(req.params.propertyId, 10);
		const removeById = {
			text: 'DELETE FROM properties WHERE id = $1 RETURNING *',
			values: [ Id ]
		};
		try {
			const deletedAD = await pool.query(removeById);
			cloudinary.v2.api.delete_resources([ deletedAD.rows[0].image_url ]);
			res.status(201).json({
				status: 'success',
				data: {
					message: `property with id ${Id} successfully deleted!!`
				}
			});
		} catch (error) {
			res.status(404).json({
				status: 'error',
				error: 'Property ad does not exist'
			});
		}
	}

	// TO MARK PROPERTY AS SOLD
	static async markAsSold(req, res) {
		const Id = parseInt(req.params.propertyId, 10);
		const markQuery = {
			text: `UPDATE properties SET status ='sold' WHERE id = ${Id} RETURNING *`
		};
		try {
			const result = await pool.query(markQuery);
			res.status(201).json({
				status: 'success',
				data: result.rows[0]
			});
		} catch (error) {
			res.status(500).json({
				status: 'error',
				error: 'Could not mark property as sold'
			});
		}
	}

	static async updateAdvert(req, res) {
		const formBody = req.body;
		const Id = parseInt(req.params.propertyId, 10);
		const findById = {
			text: `SELECT * FROM properties WHERE id = ${Id}`
		};
		try {
			const result = await pool.query(findById);
			if (result.rows.length === 0) {
				return res.status(404).json({
					status: 'error',
					error: 'Advert does not exist'
				});
			}

			if (req.file) {
				const imageUrl = await cloudinary.v2.uploader.upload(req.file.path, {
					public_id: `imageUploads/${req.file.originalname}`,
					use_filename: true,
					unique_filename: false
				});
				formBody.image_url = imageUrl.public_id;
			}
			const oldAD = result.rows[0];
			const updateQuery = {
				text: `UPDATE properties 
				SET
				owner ='${formBody.owner || oldAD.owner}',  
				state = '${formBody.state || oldAD.state}',
				city = '${formBody.city || oldAD.city}',
				address = '${formBody.address || oldAD.address}',
				type = '${formBody.type || oldAD.type}',
				status = '${formBody.status || oldAD.status}',
				price ='${formBody.price || oldAD.price}',
				image_url = '${formBody.image_url || oldAD.image_url}'
				WHERE id = ${Id} RETURNING *`
			};
			const updateRes = await pool.query(updateQuery);
			res.status(201).json({
				status: 'success',
				data: updateRes.rows[0]
			});
		} catch (error) {
			res.status(500).json({
				status: 'error',
				error: 'internal server error'
			});
		}
	}

	static async getPropertyAdverts(req, res) {
		const selectAdvert = {
			text: 'SELECT * FROM properties'
		};
		try {
			const result = await pool.query(selectAdvert);
			if (result.rows.length > 0) {
				res.status(200).json({
					status: 'success',
					data: result.rows
				});
			} else {
				res.status(404).json({
					status: 'error',
					error: 'There are no property adverts!!'
				});
			}
		} catch (error) {
			res.status(404).json({
				status: 'error',
				error: error.message
			});
		}
	}
	// /property/propertyId?type=2 Bedroom

	static async getSpecificProperty(req, res) {
		const propType = req.query.type;
		const query = {
			text: `SELECT * FROM properties WHERE type = ${propType}`
		};
		try {
			const result = await pool.query(query);
			if (result.rows[0] !== undefined) {
				res.status(200).json({
					status: 'success',
					data: result.rows
				});
			} else {
				res.status(404).json({
					status: 'error',
					error: 'Cannot find properties of specified type'
				});
			}
		} catch (error) {
			res.status(500).json({
				status: 'error',
				error: error.message
			});
		}
	}

	static async getPropertyADvert(req, res) {
		const Id = parseInt(req.params.propertyId, 10);
		const findById = {
			text: `SELECT * FROM properties WHERE id = ${Id}`
		};
		try {
			const result = await pool.query(findById);
			if (result.rows[0] !== undefined) {
				res.status(200).json({
					status: 'success',
					data: result.rows[0]
				});
			} else {
				res.status(404).json({
					status: 'error',
					error: 'Cannot find property ad'
				});
			}
		} catch (error) {
			res.status(404).json({
				status: 'error',
				error: error.message
			});
		}
	}
}
