import React from 'react';
import Card from './Card';

const CardList = ({cards}) => {
	return(
		<div>
		{
			cards.map((user , i) => {
				return (
					<Card 
						firstName={cards[i].firstName} 
						lastName={cards[i].lastName}
						key = {i}
					/>
				);
			})
		}
		  	
		</div>
	);
}

export default CardList;