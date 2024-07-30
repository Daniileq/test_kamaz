import React, { FC, useCallback, useState } from 'react';
import ModalSimple from '../../Components/Modal/Modal';
import { Button, TextField } from '@mui/material';
import cn from './login.module.css';
import { useNavigate } from 'react-router-dom';

interface ILogin {
  setAuth: (authData: boolean) => void;
}

const Login: FC<ILogin> = ({ setAuth }) => {
  const [login, SetLogin] = useState<string>('');
  const [password, SetPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleDis = useCallback(
    (log?: string, pass?: string) => {
      if (log?.length && pass?.length) {
        return setDisabled(false);
      } else return setDisabled(true);
    },
    [setDisabled]
  );

  const handleLogin = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value.trim();
      SetLogin(val);
      handleDis(val, password);
    },

    [SetLogin, handleDis, password]
  );

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value.trim();
      SetPassword(val);
      handleDis(login, val);
    },
    [SetPassword, handleDis, login]
  );

  const handleLoginIn = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({ login: login, password: password })
    );
    setAuth(true);
    navigate('/bitcoins');
  };

  return (
    <>
      <ModalSimple>
        <>
          <TextField
            onChange={handleLogin}
            value={login}
            className={cn.input_login}
            id="outlined-basic"
            label="Логин"
          />
          <div className={cn.input_password_block}>
            <TextField
              value={password}
              onChange={handlePassword}
              type={'password'}
              className={cn.input_password}
              id="outlined-basic"
              label="Пароль"
            />
          </div>
          <div className={cn.button_sub}>
            <Button
              onClick={handleLoginIn}
              disabled={disabled}
              variant="outlined"
            >
              Войти
            </Button>
          </div>
        </>
      </ModalSimple>
    </>
  );
};
export default Login;
