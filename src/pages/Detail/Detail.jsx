import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InfoDetail from '../../components/InfoDetail/InfoDetail';
import './Detail.sass';
import { useAppDispatch } from '../../redux/strore';
import { useSelector } from 'react-redux';
import {
  selectDetail,
  fetchDetail,
} from '../../redux/slice/detailSlice';

const Detail = () => {
  let { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { detailInfo, status } = useSelector(selectDetail);

  const getProduct = async () => {
    dispatch(
      fetchDetail({
        name,
      })
    );
  };

  React.useEffect(() => {
    getProduct();
  }, [name]);

  return (
    <div className="detail">
      <button className="detail__button" onClick={() => navigate(-1)}>
        back
      </button>
      {status === 'loading' && <h1>Loading...</h1>}
      {status === 'succes' && <InfoDetail {...detailInfo} />}
    </div>
  );
};

export default Detail;