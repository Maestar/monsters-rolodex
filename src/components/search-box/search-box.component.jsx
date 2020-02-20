import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
          className ='search' 
          type='search' 
          placeholder={placeholder}
          onChange={handleChange} //if you want to see something right after you call set state, you 
        />
);