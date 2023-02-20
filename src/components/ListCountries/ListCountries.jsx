import React from 'react'
import './ListCountries.sass';

const ListCountries = ({ countries }) => {
  return (
    <div className="listwrapper">
      <h1 className="listwrapper__title">ListCountries</h1>
      <span>{countries.length}</span>
    </div>
  );
};

export default ListCountries;
