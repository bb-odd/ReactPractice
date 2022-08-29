import React from 'react';

const Search = ({setSearchText}) => {

    const updateSearchText = e =>{
        setSearchText(e.target.value);
    }

    return(
        <input 
        type="text" 
        placeholder="Search.."
        onChange={updateSearchText}
        ></input>
    );
}

export default Search;