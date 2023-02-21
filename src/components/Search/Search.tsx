import React from 'react';
import './Search.sass';

type Isearch = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Search: React.FC<Isearch> = ({ onChange, value }) => {
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
