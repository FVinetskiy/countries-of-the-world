import { useState, useEffect, FC } from 'react';
import ListCountries from '../../components/ListCountries/ListCountries';
import Skeleton from '../../components/Skeleton/Skeleton';
import ItemCountrie from '../../components/ItemCountrie/ItemCountrie';
import Filters from '../../components/Filters/Filters';

type country = {
  name: string;
  capital: string;
  region: string;
  population: number;
  independent: boolean;
  flags: {
    png: string;
    svg: string;
  };
};

type PropsHome = {
  status: string;
  countries: country[];
};

const Home: FC<PropsHome> = ({ status, countries }) => {
  const [filtredCountry, setFiltredCountry] = useState(countries);

  const HandleSearch = (search?: string, region?: string) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search)
      );
    }
    setFiltredCountry(data);
  };

  useEffect(() => {
    HandleSearch();
  }, [countries]);

  const countriesmap = filtredCountry.map((item) => (
    <ItemCountrie key={item.name} {...item} />
  ))

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const filterLength = countriesmap.length;

  return (
    <>
      <Filters onSearch={HandleSearch} />
      <ListCountries countries={filterLength} />
      <div>
        {status === 'error' ? (
          <div>сервер не дал данные</div>
        ) : (
          <div className="greed">
            {status === 'loading' ? skeletons : countriesmap}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
