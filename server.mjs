// import bodyParser from 'body-parsar';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './controllers/user.mjs';

// Constants
const port = process.env.PORT || 4000;
const mongodbURL =
	process.env.PORT || 'mongodb+srv://admin:admin104339@cluster0.vtj0zau.mongodb.net/users?retryWrites=true&w=majority';

const app = express();
app.use(express.json()); // parsing body
app.use(cookieParser()); // parsing cookies
app.use(
	cors({
		credentials: true,
	}),
);

// app.get('/', (req, res) => {
// 	console.log('lggae hit');
// 	res.send('Pohonch gae aap');
// });

app.use('/users', userRoutes);
app.use('/product', userRoutes);

// app.post('/signup', (req, res) => {
// 	let body = req.body;
// 	console.log(body);
// 	// console.log(body);
// 	// // Validation
// 	if (!body.fullname || !body.contact || !body.email || !body.password) {
// 		res.status(400).send(
// 			`required fields missing, request example:
// 		             {
// 		                 "FullName": "John",
// 		                 "Contact": "03152503608",
// 		                 "email": "abc@abc.com",
// 		                 "password": "12345"
// 		             }`,
// 		);
// 		return;
// 	}
// 	console.log('all set required fields');

// 	userModel
// 		.create({
// 			fullname: body.fullname,
// 			contact: body.contact,
// 			email: body.email,
// 			password: body.password,
// 		})
// 		.then((saved) => {
// 			console.log(saved);

// 			res.send({
// 				message: 'user added successfully',
// 			});
// 		})
// 		.catch(() => {
// 			res.status(500).send({
// 				message: 'server error',
// 			});
// 		});
// });

// app.post('/signup', (req, res) => {
// 	let body = req.body;
// 	console.log(body);
// 	if (!body.firstName || !body.lastName || !body.email || !body.password) {
// 		res.status(400).send(
// 			`required fields missing, request example:
//                 {
//                     "firstName": "John",
//                     "lastName": "Doe",
//                     "email": "abc@abc.com",
//                     "password": "12345"
//                 }`,
// 		);
// 		return;
// 	}
// 	console.log('passed the process of valildation');

// 	// check if user already exist // query email user
// 	userModel.findOne({ email: body.email }, (err, user) => {
// 		if (!err) {
// 			console.log('user: ', user);

// 			if (user) {
// 				// user already exist
// 				console.log('user already exist: ', user);
// 				res.status(400).send({ message: 'user already exist,, please try a different email' });
// 				return;
// 			} else {
// 				// user not already exist

// 				stringToHash(body.password).then((hashString) => {
// 					userModel.create(
// 						{
// 							firstName: body.firstName,
// 							lastName: body.lastName,
// 							email: body.email.toLowerCase(),
// 							password: hashString,
// 						},
// 						(err, result) => {
// 							if (!err) {
// 								console.log('data saved: ', result);
// 								res.status(201).send({ message: 'user is created' });
// 							} else {
// 								console.log('db error: ', err);
// 								res.status(500).send({ message: 'internal server error' });
// 							}
// 						},
// 					);
// 				});
// 			}
// 		} else {
// 			console.log('db error: ', err);
// 			res.status(500).send({ message: 'db error in query' });
// 			return;
// 		}
// 	});
// });

// app.get('/users', (req, res) => {
// 	userModel.find({}).then((data) => {
// 		if (data) {
// 			console.log(data);
// 			res.send({
// 				message: `Found all users`,
// 				data: data,
// 			});
// 		} else {
// 			res.send('Not found');
// 		}
// 	});
// });

// Delete Specific User
// app.delete('/users/:id', (req, res) => {
// 	const id = req.params.id;

// 	userModel.deleteOne({ _id: id }).then((deletedData) => {
// 		if (deletedData.deleteCount !== 0) {
// 			console.log(deletedData);
// 			res.send({
// 				message: `User has been deleted successfully`,
// 			});
// 		} else {
// 			res.send('No user is founf with this id', id);
// 		}
// 	});
// }),
// 	// DElete All Users

// 	app.delete('/users', (req, res) => {
// 		userModel.deleteMany({}).then((result) => {
// 			if (result) {
// 				console.log(result);
// 				res.send({
// 					message: `All Users  have been deleted successfully`,
// 				});
// 			} else {
// 				res.send('No user is founf with this id', id);
// 			}
// 		});
// 	}),
// 	app.put('/product/:id', async (req, res) => {
// 		const body = req.body;
// 		const id = req.params.id;

// 		if (!body.name || !body.price || !body.description) {
// 			res.status(400).send(` required parameter missing. example request body:
//         {
//             "name": "value",
//             "price": "value",
//             "description": "value"
//         }`);
// 			return;
// 		}

// 		try {
// 			let data = await productModel
// 				.findByIdAndUpdate(
// 					id,
// 					{
// 						name: body.name,
// 						price: body.price,
// 						description: body.description,
// 					},
// 					{ new: true },
// 				)
// 				.exec();

// 			console.log('updated: ', data);

// 			res.send({
// 				message: 'product modified successfully',
// 			});
// 		} catch (error) {
// 			res.status(500).send({
// 				message: 'server error',
// 			});
// 		}
// 	});

// app.put('/users/:id', async (req, res) => {
// 	const body = req.body;
// 	const id = req.params.id;

// 	if (!body.fullname || !body.contact || !body.email || !body.password) {
// 		res.status(400).send(` required parameter missing. example request body:
//         {
//             "fullname": "John Michal",
//             "contact": "03152503608",
//             "email": "abc@gmail.com",
//             "password": "Abcd1234",
//         }`);
// 		return;
// 	}

// 	try {
// 		let data = await userModel
// 			.findByIdAndUpdate(
// 				id,
// 				{
// 					fullname: body.fullname,
// 					contact: body.contact,
// 					email: body.email,
// 					password: body.password,
// 				},
// 				{ new: true },
// 			)
// 			.exec();

// 		console.log('updated: ', data);

// 		res.send({
// 			message: 'user modified successfully',
// 		});
// 	} catch (error) {
// 		res.status(500).send({
// 			message: 'server error',
// 		});
// 	}
// });

// app.get('/users/:id', (req, res) => {
// 	const id = req.params.id;

// 	userModel.findOne({ _id: id }).then((data) => {
// 		if (data) {
// 			console.log(data);
// 			res.send({
// 				message: `get user by id${data} success`,
// 				data: data,
// 			});
// 		} else {
// 			res.send('Not found');
// 		}
// 	});
// }),
// let newUser = {
// 	userId: nanoid(),
// 	fullname: body.fullname,
// 	email: body.email,
// 	password: body.password,
// };
// console.log(newUser);

// Sign In
// app.post('/signin', (req, res) => {
// 	let body = req.body;
// 	console.log(userBase);

// 	if (!body.email || !body.password) {
// 		// null check - undefined, "", 0 , false, null , NaN
// 		res.status(400).send(
// 			`required fields missing, request example:
//                 {
//                     "email": "abc@abc.com",
//                     "password": "12345"
//                 }`,
// 		);
// 		return;
// 	}

// 	let isFound = false; // https://stackoverflow.com/a/17402180/4378475

// 	// for (let i = 0; i < userBase.length; i++) {
// 	// 	if (userBase[i].email === body.email) {
// 	// 		isFound = true;
// 	// 		if (userBase[i].password === body.password) {
// 	// 			// correct password

// 	// 			res.status(200).send({
// 	// 				firstName: userBase[i].firstName,
// 	// 				lastName: userBase[i].lastName,
// 	// 				email: userBase[i].email,
// 	// 				message: 'login successful',
// 	// 				token: 'some unique token',
// 	// 			});
// 	// 			return;
// 	// 		} else {
// 	// 			// password incorrect

// 	// 			res.status(401).send({
// 	// 				message: 'incorrect password',
// 	// 			});
// 	// 			return;
// 	// 		}
// 	// 	}
// 	// }

// 	if (!isFound) {
// 		res.status(404).send({
// 			message: 'user not found',
// 		});
// 		return;
// 	}
// });

// app.get('/signin', (req, res) => {
// 	let body = req.body;

// 	if (!body.email || !body.password) {
// 		res.status(400).send(
// 			`required fields missing, request example:
//                 {
//                     ,
//                     "email": "abc@abc.com",
//                     "password": "12345"
//                 }`,
// 		);
// 		return;
// 	}

// 	let isFound = false;
// 	for (let i = 0; i < userBase.length; i++) {
// 		if (userBase.email === body.email && userBase.password === body.password) {
// 			isFound = true;
// 			res.status(200).send({
// 				name: userBase[i].name,
// 				email: userBase[i].email,
// 				message: 'login successful',
// 			});
// 			return;
// 		} else {
// 			res.status(401).send({
// 				message: 'incorrect password',
// 			});
// 		}
// 		return;
// 	}

// 	if (!isFound) {
// 		res.status(404).send({
// 			message: 'user note found',
// 		});
// 		return;
// 	}
// });

// app.put('/about', (req, res) => {
// 	res.send('about');
// });

// app.get('/contact', (req, res) => {
// 	res.send('I am Contact Page');
// });

app.listen(port, () => {
	console.log(`Example app Tayyaba on port ${port}`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect(mongodbURL);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {
	//connected
	console.log('Mongoose is connected');
});

mongoose.connection.on('disconnected', function () {
	//disconnected
	console.log('Mongoose is disconnected');
	process.exit(1);
});

mongoose.connection.on('error', function (err) {
	//any error
	console.log('Mongoose connection error: ', err);
	process.exit(1);
});

process.on('SIGINT', function () {
	/////this function will run jst before app is closing
	console.log('app is terminating');
	mongoose.connection.close(function () {
		console.log('Mongoose default connection closed');
		process.exit(0);
	});
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
