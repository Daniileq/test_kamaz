import { useEffect, useState, FC } from 'react';
import style from './bitcoins.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadAsyncArticles } from '../../store/Slices/bitcoins';
import { Article, Bit } from '../../store/Slices/bit.types';
import { useTimeMoscow } from '../../hooks/useTimeMoscow';
import Header from '../Header/Header';

interface IBitcoin {
  setAuth: (authData: boolean) => void;
}

const BitCoins: FC<IBitcoin> = ({ setAuth }) => {
  const dispatch = useDispatch();
  const data = useSelector(
    (el: { bitcoin: { data: Article } }) => el?.bitcoin?.data
  );
  const [valute] = useState<Bit[]>(() => Object.values(Bit));

  const [nowDate] = useTimeMoscow(data?.time?.updated);

  useEffect(() => {
    dispatch(loadAsyncArticles());
  }, [dispatch]);

  return (
    <div className={style.layout_container}>
      {nowDate && <Header setAuth={setAuth} nowDate={nowDate} />}
      <div className={style.container_valute}>
        {valute?.map((VAL) => (
          <div key={data?.bpi?.[VAL]?.symbol}>
            <div>{data?.bpi?.[VAL]?.code}</div>
            <div>{data?.bpi?.[VAL]?.description}</div>
            <div>{data?.bpi?.[VAL]?.rate}</div>
            <div>{data?.bpi?.[VAL]?.rate_float}</div>
            <div>{data?.bpi?.[VAL]?.symbol}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BitCoins;
