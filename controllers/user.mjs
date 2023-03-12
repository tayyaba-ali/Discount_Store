import { stringToHash, varifyHash } from 'bcrypt-inzi';
import express from 'express';
import jwt from 'jsonwebtoken';
import userModel from '../Schema/user.mjs';

const SECRET = process.env.SECRET || 'topsecret';
const router = express.Router();

// SignUp
// ==========================================//
// Create user if already signup will check an

router.post('/signup', (req, res) => {
	let body = req.body;
	body.email = body.email.toLowerCase();
	// Validation
	if (!body.fullname || !body.contact || !body.email || !body.password) {
		res.status(400).send(
			`required fields missing, request example:
		             {
		                 "FullName": "John",
		                 "Contact": "03152503608",
		                 "email": "abc@abc.com",
		                 "password": "12345"
		             }`,
		);
		return;
	}

	// check if user already exist // query email user
	userModel
		.findOne({ email: body.email })
		.then((user) => {
			console.log(user);
			if (user) {
				//user already exist
				console.log('user already exist: ', user);
				res.status(400).send({ message: 'user already exist,, please try a different email' });

				return;
			} else {
				//user not already exist
				//bcrypt hash
				stringToHash(body.password).then((hashString) => {
					console.log(hashString);
					userModel
						.create({
							fullname: body.fullname,
							contact: body.contact,
							email: body.email.toLowerCase(),
							password: hashString,
						})
						.then((user) => {
							if (user) {
								console.log('user saved: ', user);
								res.status(201).send({ message: 'user is created' });
							}
						})
						.catch((error) => {
							console.log('db error: ', error);
							res.status(500).send({ message: 'internal server error' });
						});
				});
			}
		})
		.catch((error) => {
			console.log('db error', error);
			res.status(500).send({ message: 'db error in query' });
			return;
		});
});

// ==========================================//

// Login
/// ==========================================//

// First check user and then create
router.post('/signin', (req, res) => {
	let body = req.body;

	if (!body.email || !body.password) {
		// null check - undefined, "", 0 , false, null , NaN
		res.status(400).send(
			`required fields missing, request example: 
                {
                    "email": "abc@abc.com",
                    "password": "12345"
                }`,
		);
		return;
	}
	// check if user already exist // query email user
	userModel
		.findOne({ email: body.email })
		// Handle result
		.then(function (user) {
			console.log(user);
			if (user) {
				varifyHash(body.password, user.password).then((isMatched) => {
					console.log('isMatched', isMatched);
					if (isMatched) {
						var token = jwt.sign(
							{
								_id: user._id,
								email: user.email,
								iat: Math.floor(Date.now() / 1000) - 30,
								exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
							},
							SECRET,
						);

						console.log('token: ', token);
						res.cookie('Token', token, {
							maxAge: 86_400_000,
							httpOnly: true, // https only cookies are the most secure one
						});

						res.send({
							message: 'login successful',
							profile: {
								email: user.email,
								fullname: user.fullname,
								contact: user.contact,
								_id: user._id,
							},
						});
						return;
					} else {
						console.log('user not found');
						res.status(401).send({ message: 'Incorrect email or password' });
						return;
					}
				});
			}
		})
		.catch(function (err) {
			// Handle error
			console.log('db error: ', err);
			res.status(500).send({ message: 'login failed, please try later' });
			return;
		});
});

// Logout
router.post('/logout', (req, res) => {
	res.cookie('Token', '', {
		maxAge: 0,
		httpOnly: true,
	});

	res.send({ message: 'Logout successful' });
});
//  profile

router.get('/profile', async (req, res) => {
	try {
		let user = await userModel.findOne({ _id: req.body.token._id }).exec();
		res.send(user);
	} catch (error) {
		res.status(500).send({ message: 'error getting users' });
	}
});

export default router;
