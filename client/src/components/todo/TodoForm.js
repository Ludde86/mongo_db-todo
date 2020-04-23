import React from 'react';

const TodoForm = ({ message, setMessage, putDataToDB }) => {
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
