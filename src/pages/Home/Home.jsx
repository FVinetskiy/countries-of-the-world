import { useState, useEffect } from 'react';
import ListCountries from '../../components/ListCountries/ListCountries';
import Skeleton from '../../components/Skeleton/Skeleton';
import ItemCountrie from '../../components/ItemCountrie/ItemCountrie';
import Filters from '../../components/Filters/Filters';


const Home = ({ status, countries }) => {
  const [filtredCountry , setFiltredCountry] = useState(countries);

  const HandleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search)
      );
    }
    setFiltredCountry(data)
  };

  useEffect(() => {
    HandleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);


  const countriesmap = filtredCountry.map((item) => (
    <ItemCountrie key={item.name} {...item} />
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <Filters onSearch={HandleSearch} />
      <ListCountries countries={countriesmap} />
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
