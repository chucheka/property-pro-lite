import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1] || res.body.token;

		const authData = jwt.verify(token, process.env.JWT_KEY);
		req.userData = authData;
		next();
	} catch (error) {
		return res.status(403).json({
			status: 'error',
			error: 'Invalid token supplied'
		});
	}
};

export default verifyToken;
