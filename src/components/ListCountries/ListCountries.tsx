import { FC } from 'react';
import './ListCountries.sass';

type IlistProps = {
  countries: number;
};

const ListCountries: FC<IlistProps> = ({ countries }) => {
  return (
    <div className="listwrapper">
      <h1 className="listwrapper__title">ListCountries</h1>
      <span>{countries}</span>
    </div>
  );
};

export default ListCountries;
