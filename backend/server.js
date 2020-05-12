const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const Shopping = require('./shopping');

const API_PORT = 3001;
const app = express();
var cors = require('cors');
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = 'mongodb+srv://ludde123:ludde123@todo-8vzsg.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
	Data.find((err, data) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
	const { id, update } = req.body;
	Data.findByIdAndUpdate(id, update, (err) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', (req, res) => {
	const { id } = req.body;
	Data.findByIdAndRemove(id, (err) => {
		if (err) return res.send(err);
		return res.json({ success: true });
	});
});

// this is our create method
// this method adds new data in our database
router.post('/putData', (req, res) => {
	let data = new Data();

	const { id, message } = req.body;

	if ((!id && id !== 0) || !message) {
		return res.json({
			success: false,
			error: 'INVALID INPUTS'
		});
	}
	data.message = message;
	data.id = id;
	data.save((err) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

router.get('/getShopping', (req, res) => {
	Shopping.find((err, data) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true, data: data });
		}
	});
});

router.post('/postShopping', (req, res) => {
	let shopping = new Shopping();
	const { message } = req.body;

	shopping.message = message;
	if (!message) {
		return res.json({ success: false, error: 'INVALID INPUTS' });
	} else {
		shopping.save((err, data) => {
			if (err) {
				return res.json({ success: false, error: err });
			} else {
				return res.json({ success: true, data: data });
			}
		});
	}
});

router.delete('/deleteShopping/:id', async (req, res) => {
	await Shopping.findByIdAndRemove(req.params.id, (err) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({ success: true });
		}
	});
});

router.put('/putShopping/:id', async (req, res) => {
	try {
		// in put request, we pass this updated message
		const { update } = req.body;

		await Shopping.findByIdAndUpdate(req.params.id, { message: update });
		res.json({ success: true });
	} catch (error) {
		console.error(error);
	}
});

// append /api for our http requests
app.use('/api', router);

// // Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
