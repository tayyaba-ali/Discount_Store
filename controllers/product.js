import express from 'express';

const SECRET = process.env.SECRET || 'topsecret';
const router = express.Router();

// Get Products
router.get('/products', async (req, res) => {
	try {
		let products = await productModel.find({}).exec();
		console.log('all product : ', products);

		res.send({
			message: 'all products',
			data: products,
		});
	} catch (error) {
		res.status(500).send({
			message: 'failed to get product',
		});
	}
});

// Get 1 product
router.get('/product/:id', async (req, res) => {
	try {
		let product = await productModel.findOne({ _id: req.params.id }).exec();
		console.log('product : ', product);

		res.send({
			message: 'product',
			data: product,
		});
	} catch (error) {
		res.status(500).send({
			message: 'failed to get product',
		});
	}
});

router.post('/product', async (req, res) => {
	console.log('product received: ', req.body);

	let newProduct = new productModel({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		code: req.body.code,
	});
	try {
		let response = await newProduct.save();
		console.log('product added: ', response);

		res.send({
			message: 'product added',
			data: response,
		});
	} catch (error) {
		res.status(500).send({
			message: 'failed to add product',
		});
	}
});

// Update
router.put('/product/:id', async (req, res) => {
	console.log('data to be edited: ', req.body);

	let update = {};
	if (req.body.name) update.name = req.body.name;
	if (req.body.description) update.description = req.body.description;
	if (req.body.price) update.price = req.body.price;
	if (req.body.code) update.code = req.body.code;

	try {
		let updated = await productModel.findOneAndUpdate({ _id: req.params.id }, update, { new: true }).exec();

		console.log('updated product: ', updated);

		res.send({
			message: 'product updated successfully',
			data: updated,
		});
	} catch (error) {
		res.status(500).send({
			message: 'failed to update product',
		});
	}
});
router.delete('/product/:id', async (req, res) => {
	console.log('product received: ', req.body);

	try {
		let deleted = await productModel.deleteOne({ _id: req.params.id });
		console.log('product deleted: ', deleted);

		res.send({
			message: 'product deleted',
			data: deleted,
		});
	} catch (error) {
		res.status(500).send({
			message: 'failed to delete product',
		});
	}
});
