import React from 'react';
import axios from 'axios';

const TodoForm = ({ todos, message, setMessage }) => {
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

	return (
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
	);
};

export default TodoForm;
