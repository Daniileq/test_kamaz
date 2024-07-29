import { Button } from '@mui/material';
import { FC, useCallback } from 'react';
import style from './header.module.css';
import { useNavigate } from 'react-router-dom';
interface IHeader {
  setAuth: (authData: boolean) => void;
  nowDate: string;
}

const Header: FC<IHeader> = ({ setAuth, nowDate }) => {
  const navigate = useNavigate();
  const logout = useCallback(() => {
    setAuth(false);
    localStorage.clear();
    navigate('/login');
  }, [setAuth]);

  return (
    <div className={style.heder_bit}>
      <div> {nowDate}</div>
      <div>
        <Button onClick={logout} variant="contained">
          Выйти
        </Button>
      </div>
    </div>
  );
};
export default Header;
