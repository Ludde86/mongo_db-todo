const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// mongo db
const dbRoute = 'mongodb://<your-db-username-here>:<your-db-password-here>@ds249583.mlab.com:49583/fullstack_app';

// connect backend with database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('Connected to the database'));

// check connection with database
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// get method
router.get('/getData', (req, res) => {
	Data.find((err, data) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true, data: data });
		}
	});
});

// update method
router.post('/updateData', (req, res) => {
	const { id, update } = req.body;
	Data.findByIdAndUpdate(id, update, (err) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true, data: data });
		}
	});
});

// delete method
router.delete('/deleteData', (req, res) => {
	const { id } = req.body;
	Data.findByIdAndRemove(id, (err) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({ success: true });
		}
	});
});

// create method
router.post('/putData', (req, res) => {
	const { id, message } = req.body;
	if ((!is && id !== 0) || !message) {
		return res.json({ success: false, error: 'Invalid inputs' });
	}

	data.message = message;
	data.id = id;
	data.save((err) => {
		if (err) {
			return res.json({ success: false, error: err });
		} else {
			return res.json({ success: true });
		}
	});
});

// append /api for http requests
app.use('/api', router);

// launch backend to port
app.listen(API_PORT, () => console.log(`Connected on port ${API_PORT}`));
