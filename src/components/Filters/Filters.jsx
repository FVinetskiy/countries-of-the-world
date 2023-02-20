import React, { useState, useEffect } from 'react';
import './Filters.sass';
import Search from '../Search/Search';
import CustomSelect from '../CustomSelect/CustomSelect';
import { useAppDispatch } from '../../redux/strore';
import { useSelector } from 'react-redux';
import {
  selectFilter,
  setSearch,
  setRegion,
} from '../../redux/slice/filterSlicer';

const Filters = ({ onSearch }) => {
  const dispatch = useAppDispatch();
  const { search, region } = useSelector(selectFilter);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ''));
  };

  useEffect(() => {
    onSearch(search, region);
  }, [search, region]);

  return (
    <div className="filter">
      <Search value={search} onChange={handleSearch} />
      <CustomSelect
        region={region}
        value={region}
        onChange={handleSelect}
      />
    </div>
  );
};

export default Filters;
