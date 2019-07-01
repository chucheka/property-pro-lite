import express from 'express';

const router = express.Router();

router.get('/property/1', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			id: 1
		}
	});
});

export default router;
