import React from 'react';
import './Card.css'

const Card = ({id, name, email}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc wset'>
			<img src={`https://robohash.org/${id}.png?size=200x200`} alt='robot' />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;