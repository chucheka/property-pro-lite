import express from 'express';
import dotenv from 'dotenv';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/configDB';
import { generateToken } from '../config/auth';

dotenv.config();

const router = express.Router();

router.post(
	'/auth/signup',
	[
		check('email').isEmail().withMessage('email incorrect'),
		check('password').isLength({ min: 5 }).withMessage('Password should be at leat 5 characters')
	],
	async (req, res) => {
		const user = req.body;
		if (user.password !== user.password2) {
			return res.status(400).json({
				status: 'error',
				error: "Passords don't match!"
			});
		}
		// Validator error messages
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({
				errors: errors.array()[0].msg
			});
		}
		const query = {
			text: 'SELECT * FROM users WHERE email = $1',
			values: [ user.email ]
		};
		const result = await pool.query(query);
		if (result.rows.length > 0) {
			return res.status(409).json({
				status: 'error',
				error: 'User with email already exist!!'
			});
		}
		// Hash passsword before saving to db
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, async (error, hash) => {
				if (error) {
					return res.status(500).json({
						status: 'error',
						error: 'Internal Server error'
					});
				}
				user.password = hash;
				const createUser = {
					text:
						'INSERT INTO users(email, first_name, last_name, password, phonenumber, address, is_admin) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *',
					values: [
						user.email,
						user.first_name,
						user.last_name,
						hash,
						user.phonenumber,
						user.address,
						user.is_admin
						// CHANGE THIS TO Object.values(user)
					]
				};
				// CREATE USER
				try {
					const resUser = await pool.query(createUser);
					// console.log(resUser.rows[0]);
					if (resUser) {
						const createdUser = resUser.rows[0];
						// Assign a token on succesful sign up
						// const token = jwt.sign(
						// 	{
						// 		userId: resUser.rows[0].id,
						// 		email: resUser.rows[0].email
						// 	},
						// 	process.env.JWT_KEY,
						// 	{
						// 		expiresIn: '2days'
						// 	}
						// );
						const userAuth = {
							userId: resUser.rows[0].id,
							email: resUser.rows[0].email
						};
						const token = generateToken(userAuth);
						res.status(201).json({
							status: 'success',
							data: {
								token,
								id: createdUser.id,
								email: createdUser.email,
								first_name: createdUser.first_name,
								last_name: createdUser.last_name,
								password: createdUser.password,
								phonenumber: createdUser.phonenumber,
								address: createdUser.address,
								is_admin: createdUser.is_admin
							}
						});
					}
				} catch (err) {
					console.log(err.message);
					return res.status(500).json({
						status: 'error',
						error: 'Internal Server error'
					});
				}
			});
		});
	}
);
router.post('/auth/signin', async (req, res) => {
	const query = {
		text: 'SELECT * FROM users WHERE email = $1',
		// values: [ `${req.body.email}` ]
		values: [ req.body.email ]
	};
	try {
		const user = await pool.query(query);
		if (user.rows.length > 0) {
			bcrypt.compare(req.body.password, user.rows[0].password, (err, isMatch) => {
				if (isMatch) {
					const token = jwt.sign(
						{
							userId: user.rows[0].id,
							email: user.rows[0].email
						},
						process.env.JWT_KEY
					);
					// SEND TOKEN WITH RESPONSE
					res.status(200).json({
						status: 'success',
						data: {
							token,
							id: user.rows[0].id,
							email: user.rows[0].email,
							first_name: user.rows[0].first_name,
							last_name: user.rows[0].last_name,
							password: user.rows[0].password,
							phonenumber: user.rows[0].phonenumber,
							address: user.rows[0].address,
							is_admin: user.rows[0].is_admin
						}
					});
				} else {
					return res.status(404).json({
						status: 'error',
						error: 'Invalid email or password!!'
					});
				}
			});
		}
	} catch (error) {
		return res.status(404).json({
			status: 'error',
			error: 'Invalid email or password!!'
		});
	}
});

export default router;
