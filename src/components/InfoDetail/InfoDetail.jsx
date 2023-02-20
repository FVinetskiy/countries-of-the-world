import React from 'react';
import axios from 'axios';
import './InfoDetail.sass';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InfoDetail.sass';

import {
  selectDetail,
  fetchBorderDetail,
} from '../../redux/slice/detailSlice';
import { useAppDispatch } from '../../redux/strore';
import { useSelector } from 'react-redux';

const InfoDetail = (props) => {
    const dispatch = useAppDispatch();
    const { neighbors, status } = useSelector(selectDetail);

  const {
    borders = [],
    common,
    nofficial,
    population,
    region,
    flags,
  } = props;

    const getBorder = async () => {
      dispatch(
        fetchBorderDetail({
          borders,
        })
      );
    };

  React.useEffect(() => {
    if (borders.length)
      getBorder();
    }, [borders]);

  return (
    <div className="InfoDetail">
      <h1>InfoDetail</h1>
      <div className="InfoDetail__content">
        <div className="InfoDetail__Wrap-img">
          <img className="InfoDetail__img" src={flags?.png} alt="" />
        </div>
        <div>
          <p>{common}</p>
          <p>{nofficial}</p>
          <p>{population}</p>
          <p>{region}</p>
          <h2>border countries</h2>
          {!borders.length ? (
            <span>border not found</span>
          ) : (
            <div className="InfoDetail__borders">
              {status === 'succes' &&
                neighbors.map((b) => (
                  <Link to={`/name/${b.common}`} key={b.common}>
                    {b.common}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
