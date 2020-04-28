import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingList = () => {
	const [ shoppingList, setShoppinList ] = useState([]);

	useEffect(() => {
		getShoppingList();
	}, []);

	const getShoppingList = async () => {
		try {
			const res = await axios.get('/api/getShopping');

			setShoppinList(res.data.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<ul>
				{shoppingList.map((item) => {
					return <li key={item._id}>{item.message}</li>;
				})}
			</ul>
		</div>
	);
};

export default ShoppingList;
