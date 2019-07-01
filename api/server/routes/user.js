import express from 'express';

const router = express.Router();

router.post('/user/auth/signup', (req, res, next) => {
	res.status(201).json({
		status: 'success',
		data: {
			token: '4535',
			id: 1,
			first_name: 'Chike',
			last_name: 'Ucheka',
			email: 'ryanucheka@gmail.com',
			password: 'chike22ucheka'
		}
	});
});

export default router;
