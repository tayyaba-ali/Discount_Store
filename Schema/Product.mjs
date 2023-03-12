const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	price: { type: String, required: true },
	code: { type: String, required: true },

	createdOn: { type: Date, default: Date.now },
});
const productModel = mongoose.model('Products', productSchema);

export default productModel;
