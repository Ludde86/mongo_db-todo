import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	// @todo - migrate to react hooks
	// initialize our state
	const [ todos, setTodos ] = useState([]);
	// const [ id, setId ] = useState(0);
	const [ message, setMessage ] = useState('');
	const [ intervalIsSet, setIntervalIsSet ] = useState(false);
	// const [ idToDelete, setIdToDelete ] = useState('');
	// const [ idToUpdate, setIdToUpdate ] = useState('');
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
		fetch('/api/getData').then((todos) => todos.json()).then((res) => setTodos(res.data));
	};

	// our put method that uses our backend api
	// to create new query into our data base
	const putDataToDB = (message) => {
		let currentIds = todos.map((todo) => todo.id);
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
		// parseInt(idTodelete);
		let objIdToDelete = null;
		todos.forEach((todo) => {
			// eslint-disable-next-line
			if (todo.id == idTodelete) {
				objIdToDelete = todo._id;
			}
		});

		axios.delete('/api/deleteData', {
			todos: {
				id: objIdToDelete
			}
		});

		// setIdToDelete('');
	};

	// our update method that uses our backend api
	// to overwrite existing data base information
	const updateDB = (idToUpdate, objectToUpdate) => {
		let objIdToUpdate = null;
		parseInt(idToUpdate);
		todos.forEach((todo) => {
			// eslint-disable-next-line
			if (todo.id == idToUpdate) {
				objIdToUpdate = todo._id;
			}
		});

		axios.post('/api/updateData', {
			id: objIdToUpdate,
			update: { message: objectToUpdate }
		});

		setObjectToUpdate('');
	};

	return (
		<div>
			<ul>
				{todos.length <= 0 ? (
					'NO DB ENTRIES YET'
				) : (
					todos.map((todo) => (
						<li style={{ padding: '10px' }} key={todo.id}>
							<span style={{ color: 'gray' }}> todo: </span>
							{todo.message}
							<button onClick={() => deleteFromDB(todo.id)}>DELETE</button>
							<input
								type="text"
								style={{ width: '200px' }}
								onChange={(e) => setObjectToUpdate(e.target.value)}
								placeholder="update data"
							/>
							<button onClick={() => updateDB(todo.id, objectToUpdate)}>UPDATE</button>
						</li>
					))
				)}
			</ul>
			<div style={{ padding: '10px' }}>
				<form onSubmit={() => putDataToDB(message)}>
					<input
						type="text"
						onChange={(e) => setMessage(e.target.value)}
						name="message"
						value={message}
						placeholder="what to do"
						style={{ width: '200px' }}
					/>
					<input type="submit" value="ADD" />
				</form>
			</div>
		</div>
	);
};

export default App;
