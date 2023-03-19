import { useEffect, FC } from 'react';
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

type PropsFilter = {
  onSearch: Function;
};

const Filters: FC<PropsFilter> = ({ onSearch }) => {
  const dispatch = useAppDispatch();
  const { search, region } = useSelector(selectFilter);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      dispatch(setSearch(target.value));
    }
  };

  const handleSelect = (reg: any) => {
    dispatch(setRegion(reg?.value || ''));
  };

  useEffect(() => {
    onSearch(search, region);
  }, [search, region]);

  return (
    <div className="filter">
      <Search value={search} onChange={handleSearch} />
      <CustomSelect region={region} onChange={handleSelect} />
    </div>
  );
};

export default Filters;
