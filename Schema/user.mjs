import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
	fullname: String,
	contact: Number,
	email: String,
	password: Number,
	createdOn: { type: Date, default: Date.now },
});
const userModel = mongoose.model('users', userSchema);

export default userModel;
