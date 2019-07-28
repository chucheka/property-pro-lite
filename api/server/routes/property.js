import express from 'express';
import uploads from '../middleware/multer';
import verifyToken from '../config/auth';
import PropertyController from '../controllers/property';

const router = express.Router();

router.post('/property', uploads.single('image_url'), PropertyController.postAdvert);
router.delete('/property/:propertyId', PropertyController.deleteAdvert);
router.patch('/property/:propertyId/sold', PropertyController.markAsSold);
router.patch('/property/:propertyId', uploads.single('image_url'), PropertyController.updateAdvert);
router.get('/property/ads', PropertyController.getPropertyAdverts);
router.get('/property/propertyId', PropertyController.getSpecificProperty);
router.get('/property/:propertyId', PropertyController.getPropertyADvert);
export default router;
