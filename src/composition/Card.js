import React from 'react';
import './card.css';

function Card (props) {
	return (
		<div className='Card'>
			<button
        		type='button'
      		>
        		delete
      		</button>
			<h3 className='title'>
				{props.title}
			</h3>
			<p className='content'>
				{props.content}
			</p>
		</div>
		)
}

export default Card;