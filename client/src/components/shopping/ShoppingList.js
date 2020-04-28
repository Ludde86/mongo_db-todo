import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShoppingItem from './ShoppingItem';

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
					return <ShoppingItem key={item._id} item={item} />;
				})}
			</ul>
		</div>
	);
};

export default ShoppingList;
