import React from 'react';
import { MdSearch } from 'react-icons/md';
import './Search.css';

const Search = ({setSearchText}) => {

    const updateSearchText = e =>{
        setSearchText(e.target.value);
    }

    return(
        <div className='search'>
            <MdSearch className='search-icon' size='1.3em'/>
            <input 
            className='search-input'
            type="text" 
            placeholder="Search.."
            onChange={updateSearchText}
            ></input>
        </div>
    );
}

export default Search;