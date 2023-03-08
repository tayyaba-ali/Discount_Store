import cors from 'cors';
import express from 'express';
import { nanoid } from 'nanoid';
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

let userBase = [];

app.get('/', (req, res) => {
	res.send('hello');
});

app.post('/signup', (req, res) => {
	let body = req.body;
	console.log(body);

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
	console.log('no error in filling');
	let newUser = {
		userId: nanoid(),
		fullname: body.fullname,
		email: body.email,
		password: body.password,
	};
	console.log(newUser);
	userBase.push(newUser);
	console.log(userBase);
	res.status(201).send({ message: 'user is created' });
});

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
