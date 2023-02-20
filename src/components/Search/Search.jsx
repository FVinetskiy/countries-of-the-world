import React from 'react';
import './Search.sass';

const Search = ({ onChange, value }) => {
  return (
    <input
      className="search"
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Поиск"
    />
  );
};

export default Search;
