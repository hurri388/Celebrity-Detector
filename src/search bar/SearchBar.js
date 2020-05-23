import React from 'react';
import './SearchBar.css'
function SearchBar({onInput, onSubmit})
{
    return(<div className="SearchBar">
        <input className='bg-lightest-blue' type="text" placeholder="Enter Link" onChange={onInput}/>
        <button className='w-10 grow f4 link ph3 pv2 dib white bg-dark-blue' type='submit' onClick={onSubmit}>Search</button>
        </div>);
}

export default SearchBar;