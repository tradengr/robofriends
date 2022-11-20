import React from 'react';

const SearchBar = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa2 ba'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBar;