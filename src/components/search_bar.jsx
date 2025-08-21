import React from 'react';
import { useState } from 'react';


const SearchBar = (props) => {

// so it's by convention that [state variable, state setter function] is the order in which things come out
const [searchterm, setSearchTerm] = useState('');

// add this above your return
const onInputChange = (event) => {
  console.log(event.target.value);
  props.onSearchChange(event.target.value);
  setSearchTerm(event.target.value);
};

  return (
     <div id="search-bar">
      <input onChange={onInputChange} value={searchterm}/>
    </div>
    );
};


export default SearchBar;