import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	// @todo - migrate to react hooks
	// initialize our state
	const [ data, setData ] = useState([]);
	// const [ id, setId ] = useState(0);
	const [ message, setMessage ] = useState('');
	const [ intervalIsSet, setIntervalIsSet ] = useState(false);
	const [ idToDelete, setIdToDelete ] = useState('');
	const [ idToUpdate, setIdToUpdate ] = useState('');
	// const [ updateToApply, setUpdateToApply ] = useState(null);
	const [ objectToUpdate, setObjectToUpdate ] = useState('');

	// when component mounts, first thing it does is fetch all existing data in our db
	// then we incorporate a polling logic so that we can easily see if our db has
	// changed and implement those changes into our UI
	useEffect(
		() => {
			getDataFromDb();
			if (!intervalIsSet) {
				let interval = setInterval(getDataFromDb, 1000);
				setIntervalIsSet(interval);
			}
		},
		[ intervalIsSet ]
	);

	// just a note, here, in the front end, we use the id key of our data object
	// in order to identify which we want to Update or delete.
	// for our back end, we use the object id assigned by MongoDB to modify
	// data base entries

	// our first get method that uses our backend api to
	// fetch data from our data base
	const getDataFromDb = () => {
		fetch('/api/getData').then((data) => data.json()).then((res) => setData(res.data));
	};

	// our put method that uses our backend api
	// to create new query into our data base
	const putDataToDB = (message) => {
		let currentIds = data.map((data) => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post('/api/putData', {
			id: idToBeAdded,
			message: message
		});

		setMessage('');
	};

	// our delete method that uses our backend api
	// to remove existing database information
	const deleteFromDB = (idTodelete) => {
		parseInt(idTodelete);
		let objIdToDelete = null;
		data.forEach((dat) => {
			// eslint-disable-next-line
			if (dat.id == idTodelete) {
				objIdToDelete = dat._id;
			}
		});

		axios.delete('/api/deleteData', {
			data: {
				id: objIdToDelete
			}
		});

		setIdToDelete('');
	};

	// our update method that uses our backend api
	// to overwrite existing data base information
	const updateDB = (idToUpdate, objectToUpdate) => {
		let objIdToUpdate = null;
		parseInt(idToUpdate);
		data.forEach((dat) => {
			// eslint-disable-next-line
			if (dat.id == idToUpdate) {
				objIdToUpdate = dat._id;
			}
		});

		axios.post('/api/updateData', {
			id: objIdToUpdate,
			update: { message: objectToUpdate }
		});
		setIdToUpdate('');
		setObjectToUpdate('');
	};

	return (
		<div>
			<ul>
				{data.length <= 0 ? (
					'NO DB ENTRIES YET'
				) : (
					data.map((dat) => (
						<li style={{ padding: '10px' }} key={dat.id}>
							<span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
							<span style={{ color: 'gray' }}> data: </span>
							{dat.message}
						</li>
					))
				)}
			</ul>
			<div style={{ padding: '10px' }}>
				<input
					type="text"
					onChange={(e) => setMessage(e.target.value)}
					name="message"
					value={message}
					placeholder="add something in the database"
					style={{ width: '200px' }}
				/>
				<button onClick={() => putDataToDB(message)}>ADD</button>
			</div>
			<div style={{ padding: '10px' }}>
				<input
					type="text"
					name="idToDelete"
					value={idToDelete}
					style={{ width: '200px' }}
					onChange={(e) => setIdToDelete(e.target.value)}
					placeholder="put id of item to delete here"
				/>
				<button onClick={() => deleteFromDB(idToDelete)}>DELETE</button>
			</div>
			<div style={{ padding: '10px' }}>
				<input
					type="text"
					name="idToUpdate"
					value={idToUpdate}
					style={{ width: '200px' }}
					onChange={(e) => setIdToUpdate(e.target.value)}
					placeholder="id of item to update here"
				/>
				<input
					type="text"
					name="objectToUpdate"
					value={objectToUpdate}
					style={{ width: '200px' }}
					onChange={(e) => setObjectToUpdate(e.target.value)}
					placeholder="put new value of the item here"
				/>
				<button onClick={() => updateDB(idToUpdate, objectToUpdate)}>UPDATE</button>
			</div>
		</div>
	);
};

export default App;
