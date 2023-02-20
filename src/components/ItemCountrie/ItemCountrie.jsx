import React from 'react';
import './ItemCountrie.sass';
import { Link } from 'react-router-dom';


const ItemCountrie = ({
  population,
  flags,
  region,
  name,
  capital,
}) => {
  return (
    <Link to={`/name/${name}`}>
      <div className="countrie">
        <img className="countrie__img" src={flags.png} alt="" />
        <p className="countrie__title">{name}</p>
        <p className="countrie__text">{population}</p>
        <p className="countrie__text">{region}</p>
        <p className="countrie__text">{capital}</p>
      </div>
    </Link>
  );
};

export default ItemCountrie;
