import React from 'react';
import Card from './Card.js'

function List (props){
	return(

		<ul className='List_ul'>
			{props.header}
			<li className='List_li'>
				{props.list_item}
			</li>
		</ul>
	)
}

export default List;