import React, { useState } from 'react';
import axios from 'axios';

const ShoppingForm = () => {
	const [ message, setMessage ] = useState('');

	const postShopping = async (message) => {
		try {
			await axios.post('/api/postShopping', { message: message });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={() => postShopping(message)}>
			<input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
			<input type="submit" value="Lägg till" />
		</form>
	);
};

export default ShoppingForm;
