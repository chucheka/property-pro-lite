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
router.post('/user/auth/signin', (req, res) => {
	const payload = req.body;
	const { email, password } = payload;

	const checkUser = users.find((user) => user.email === email);

	if (checkUser && checkUser.password === password) {
		res.status(201).json({
			status: 'success',
			data: checkUser
		});
	} else if (!checkUser) {
		res.status(401).json({
			status: 'error',
			error: 'Invalid email or password!!'
		});
	}
});
export default router;
