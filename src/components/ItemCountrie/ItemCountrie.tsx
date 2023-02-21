import React from 'react';
import './ItemCountrie.sass';
import { Link } from 'react-router-dom';

type TProps = {
  population: string;
  flags: { 
    png: string
  }
  region: string;
  name: string;
  capital: string;
};

const ItemCountrie: React.FC<TProps> = ({
  population,
  flags,
  region,
  name,
  capital,
}) => {
  return (
    <Link to={`/name/${name}`}>
      <div className="country">
        <img className="country__img" src={flags.png} alt="" />
        <p className="country__title">{name}</p>
        <p className="country__text">{population}</p>
        <p className="country__text">{region}</p>
        <p className="country__text">{capital}</p>
      </div>
    </Link>
  );
};

export default ItemCountrie;
