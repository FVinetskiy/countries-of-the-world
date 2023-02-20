import React from 'react';
import './SwitchTheme.sass';
import { useLayoutEffect } from 'react';
import { useAppDispatch } from '../../redux/strore';
import { useSelector } from 'react-redux';
import { setTheme, selectTheme } from '../../redux/slice/themeSlice';

const SwitchTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useSelector(selectTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-sheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="switch">
        <input type="checkbox" id="switch" onChange={toggleTheme} />
        <label htmlFor="switch">Toggle</label>
      </div>
    </>
  );
};

export default SwitchTheme;
