import express from 'express';
import { resolve } from 'path';
import uploads from '../middleware/multer';
import PropertyController from '../controllers/property';

const router = express.Router();
router.use(express.static(resolve(__dirname, 'src/public')));
// router.post('/uploads', uploads.single('image'), async (req, res) => {
// 	try {
// 		const result = await cloudinary.v2.uploader.upload(req.file.path);
// 		res.send(result);
// 	} catch (err) {
// 		res.send(err);
// 	}
// });
// router.get('/api/files', async (req, res) => {
// 	try {
// 	const images = await cloudinary.v2.api.resources_by_ids
// ([ 'oqhf3o934ttnuomlkcjn' ], function(error, result) {
// 			console.log(result);
// 		});

// 		if (!images || images.length === 0) {
// 			return res.status(404).json({
// 				err: 'No files exist'
// 			});
// 		}
// 		// Files exist
// 		res.json(images.resources[0]);

// 		// return res.json(images.resources);
// 	} catch (error) {
// 		res.send(error);
// 	}
// });
// // this worked
// router.delete('/files', (req, res) => {
// 	let id = 'tcithl1kbhi8bxwhpdm1';
// 	cloudinary.v2.api.delete_resources([ id ], function(error, result) {
// 		console.log(result);
// 	});
// });

router.post('/property', uploads.single('image'), PropertyController.postAdvert);
router.delete('/property/:propertyId', PropertyController.deleteAdvert);
// router.patch('/property/:propertyId/sold', PropertyController.markAsSold);
// router.patch('/property/:propertyId', PropertyController.updateAdvert);
router.get('/property/ads', PropertyController.getPropertyAdverts);
// router.get('/property/propertyId', PropertyController.getSpecificProperty);
// router.get('/property/:propertyId', PropertyController.getPropertyADvert);
export default router;
