import express from 'express';
import uploads from '../middleware/multer';
import PropertyController from '../controllers/property';
import { verifyToken } from '../config/auth';

const router = express.Router();

router.post('/property', verifyToken, uploads.single('image_url'), PropertyController.postAdvert);
router.delete('/property/:propertyId', verifyToken, PropertyController.deleteAdvert);
router.patch('/property/:propertyId/sold', verifyToken, PropertyController.markAsSold);
router.patch('/property/:propertyId', verifyToken, uploads.single('image_url'), PropertyController.updateAdvert);
router.get('/property/ads', PropertyController.getPropertyAdverts);
router.get('/property/propertyId', PropertyController.getSpecificProperty);
router.get('/property/:propertyId', PropertyController.getPropertyADvert);
export default router;
