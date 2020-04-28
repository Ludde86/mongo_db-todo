const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingSchema = new Schema(
	{
		id: Number,
		message: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Shopping', ShoppingSchema);
