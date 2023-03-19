import { FC } from 'react';
import Select from 'react-select';
import './CustomSelect.sass';

type CustomSelectProps = {
  onChange: any;
  region: string;
};

const CustomSelect: FC<CustomSelectProps> = ({
  onChange,
  region,
}) => {
  const optionsMap:any = {
    Africa: { value: 'Africa', label: 'Africa' },
    America: { value: 'America', label: 'America' },
    Asia: { value: 'Asia', label: 'Asia' },
    Europe: { value: 'Europe', label: 'Europe' },
    Oceania: { value: 'Oceania', label: 'Oceania' },
  };

  const options = Object.values(optionsMap);

  return (
    <div>
      <Select
        onChange={onChange}
        className="select"
        options={options}
        value={optionsMap[region] || ''}
        placeholder="filter region"
        isClearable
        isSearchable={false}
      />
    </div>
  );
};

export default CustomSelect;
