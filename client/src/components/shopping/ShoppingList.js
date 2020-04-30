import React, { useEffect, useContext } from 'react';
import ShoppingContext from '../../context/shopping/shoppingContext';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {
	const shoppingContext = useContext(ShoppingContext);
	const { shoppingList, getShoppingList } = shoppingContext;

	useEffect(
		() => {
			getShoppingList();
			setInterval(getShoppingList, 1000);
		},
		// eslint-disable-next-line
		[]
	);

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
