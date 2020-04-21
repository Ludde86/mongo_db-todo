const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// base data schema
const DataSchema = new Schema(
	{
		id: Number,
		message: String
	},
	{
		timestamps: true
	}
);

// export schema so we could modify it using Node.js
module.exports = mongoose.model('Data', DataSchema);
