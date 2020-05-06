import React, { Component } from 'react';

const Card = ({firstName, lastName}) => {
	let name = firstName+lastName;
	return(
	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
		<img  alt='robots' src={'https://robohash.org/'+name+'?100x100'}/>
		<div>
			<h2 className='tc'> {firstName} </h2>
			<p className='tc'> {firstName}.{lastName}@gmail.com </p>
		</div>
	</div>
	);
}

export default Card;