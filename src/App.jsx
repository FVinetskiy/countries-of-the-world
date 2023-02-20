import React from 'react';
import Header from './components/Header/Header';
import { useAppDispatch } from './redux/strore';
import { useSelector } from 'react-redux';
import {
  selectCountry,
  fetchCountry,
} from './redux/slice/countriesSlice';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

const App = () => {
  const dispatch = useAppDispatch();
  const { countries, status } = useSelector(selectCountry);

  const getCountries = async () => {
    dispatch(fetchCountry({}));
  };

  React.useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App b-container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home countries={countries} status={status} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/name/:name" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
