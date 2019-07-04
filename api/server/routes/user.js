import express from 'express';
import { users } from '../model/userDB';

const router = express.Router();

router.post('/user/auth/signup', (req, res) => {
	const newUser = req.body;
	const checkUser = users.find((user) => user.email === req.body.email);
	if (checkUser) {
		res.status(400).json({
			status: 'error',
			error: 'email already taken'
		});
	} else {
		users.push(newUser);
		res.status(201).json({
			status: 'success',
			data: users[users.length - 1]
		});
	}
});

export default router;
