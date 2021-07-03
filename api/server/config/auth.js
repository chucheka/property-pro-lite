import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1] || res.body.token;
		console.log(token);
		const authData = jwt.verify(token, process.env.JWT_KEY);
		req.userData = authData;
		// console.log(req.userData);
		next();
	} catch (error) {
		return res.status(403).json({
			status: 'error',
			error: 'Invalid token supplied'
		});
	}
};

const generateToken = (userAuth) => {
	const token = jwt.sign(
		{
			userId: userAuth.id,
			email: userAuth.email
		},
		process.env.JWT_KEY,
		{
			expiresIn: '2days'
		}
	);
	return token;
};

export { verifyToken, generateToken };
