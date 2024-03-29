import jwt from 'jsonwebtoken';

const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1] || res.body.data.token;
		const authData = await jwt.verify(token, process.env.JWT_KEY);
		req.userData = authData;
		console.log(req.userData);
		next();
	} catch (error) {
		return res.status(403).json({
			status: 'error',
			error: 'Invalid token supplied'
		});
	}
};

export default verifyToken;
