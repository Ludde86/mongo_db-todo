import React from 'react';

import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import TodoState from './context/todo/TodoState';

import './App.css';

const App = () => {
	// const [ todos, setTodos ] = useState([]);
	// const [ message, setMessage ] = useState('');
	// const [ intervalIsSet, setIntervalIsSet ] = useState(false);
	// const [ objectToUpdate, setObjectToUpdate ] = useState('');

	// when component mounts, first thing it does is fetch all existing data in our db
	// then we incorporate a polling logic so that we can easily see if our db has
	// changed and implement those changes into our UI
	// useEffect(
	// 	() => {
	// 		todoContext.getDataFromDb();
	// 		if (!intervalIsSet) {
	// 			let interval = setInterval(todoContext.getDataFromDb, 1000);
	// 			setIntervalIsSet(interval);
	// 		}
	// 	},
	// 	[ intervalIsSet ]
	// );

	// just a note, here, in the front end, we use the id key of our data object
	// in order to identify which we want to Update or delete.
	// for our back end, we use the object id assigned by MongoDB to modify
	// data base entries

	// const getDataFromDb = () => {
	// 	fetch('/api/getData').then((todos) => todos.json()).then((res) => setTodos(res.data));
	// };

	// const putDataToDB = (message) => {
	// 	let currentIds = todos.map((todo) => todo.id);
	// 	let idToBeAdded = 0;
	// 	while (currentIds.includes(idToBeAdded)) {
	// 		++idToBeAdded;
	// 	}

	// 	axios.post('/api/putData', {
	// 		id: idToBeAdded,
	// 		message: message
	// 	});

	// 	setMessage('');
	// };

	// const deleteFromDB = (idTodelete) => {
	// 	// parseInt(idTodelete);
	// 	let objIdToDelete = null;
	// 	todos.forEach((todo) => {
	// 		// eslint-disable-next-line
	// 		if (todo.id == idTodelete) {
	// 			objIdToDelete = todo._id;
	// 		}
	// 	});

	// 	axios.delete('/api/deleteData', {
	// 		data: {
	// 			id: objIdToDelete
	// 		}
	// 	});
	// };

	// const updateDB = (idToUpdate, objectToUpdate) => {
	// 	let objIdToUpdate = null;
	// 	parseInt(idToUpdate);
	// 	todos.forEach((todo) => {
	// 		// eslint-disable-next-line
	// 		if (todo.id == idToUpdate) {
	// 			objIdToUpdate = todo._id;
	// 		}
	// 	});

	// 	axios.post('/api/updateData', {
	// 		id: objIdToUpdate,
	// 		update: { message: objectToUpdate }
	// 	});

	// 	setObjectToUpdate('');
	// };

	return (
		<div className="app-container">
			<TodoState>
				<div className="todo-container">
					<TodoForm />
					<TodoList />
				</div>
			</TodoState>
		</div>
	);
};

export default App;
