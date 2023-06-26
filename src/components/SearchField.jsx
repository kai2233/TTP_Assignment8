import React, { useState } from 'react';
import App from './App';
const SearchField = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
    <input type="text" placeholder="search field" onChange={e=>{setSearchInput(e.target.value)}}/> 
    <App searchInfo={searchInput}/>
    </div>
  );
};

export default SearchField;