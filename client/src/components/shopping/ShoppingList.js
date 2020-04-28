import React, { useState } from 'react';

const ShoppingList = () => {
	const [ shoppingList, setShoppinList ] = useState([
		{
			id: 1,
			message: 'gurka'
		},
		{
			id: 2,
			message: 'tomat'
		},
		{
			id: 3,
			message: 'mjölk'
		}
	]);

	return (
		<ul>
			{shoppingList.map((item) => {
				return <li key={item.id}>{item.message}</li>;
			})}
		</ul>
	);
};

export default ShoppingList;
