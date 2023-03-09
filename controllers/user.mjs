import express from 'express';
import userModel from '../Schema/user.mjs';
const router = express.Router();

router.post('/signup', (req, res) => {
	let body = req.body;
	console.log(body);
	// console.log(body);
	// // Validation
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
	console.log('all set required fields');

	userModel
		.create({
			fullname: body.fullname,
			contact: body.contact,
			email: body.email,
			password: body.password,
		})
		.then((saved) => {
			console.log(saved);

			res.send({
				message: 'user added successfully',
			});
		})
		.catch(() => {
			res.status(500).send({
				message: 'server error',
			});
		});
});

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
	userModel.findOne({ email: body.email }, 'email fullname contact email pasword', (err, user) => {
		if (!err) {
			if (user) {
				console.log('user: ', user);

				// user found
				// varifyHash(body.password, user.password).then((isMatched) => {
				// 	console.log('isMatched: ', isMatched);

				// 	if (isMatched) {
				// 		var token = jwt.sign(
				// 			{
				// 				_id: user._id,
				// 				email: user.email,
				// 				iat: Math.floor(Date.now() / 1000) - 30,
				// 				exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
				// 			},
				// 			SECRET,
				// 		);

				// 		console.log('token: ', token);

				// 		res.cookie('Token', token, {
				// 			maxAge: 86_400_000,
				// 			httpOnly: true, // https only cookies are the most secure one
				// 		});

				// 		res.send({
				// 			message: 'login successful',
				// 			profile: {
				// 				email: user.email,
				// 				firstName: user.firstName,
				// 				lastName: user.lastName,
				// 				age: user.age,
				// 				_id: user._id,
				// 			},
				// 		});
				// 		return;
				// 	} else {
				// 		console.log('user not found');
				// 		res.status(401).send({ message: 'Incorrect email or password' });
				// 		return;
				// 	}
				// });
			} else {
				// user not already exist
				console.log('user not found');
				res.status(401).send({ message: 'Incorrect email or password' });
				return;
			}
		} else {
			console.log('db error: ', err);
			res.status(500).send({ message: 'login failed, please try later' });
			return;
		}
	});
});

export default router;