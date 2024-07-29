import React, { FC, useCallback, useState } from 'react';
import ModalSimple from '../../Components/Modal/Modal';
import { Button, TextField } from '@mui/material';
import cn from './login.module.css';
import { useNavigate } from 'react-router-dom';

interface ILogin {
  setAuth?: any;
}

const Login: FC<ILogin> = ({ setAuth }) => {
  const [login, SetLogin] = useState<string>('');
  const [password, SetPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleDis = useCallback(
    (log?: string, pass?: string) => {
      if (log?.length && pass?.length) {
        return setDisabled((prev) => (prev = false));
      } else return setDisabled((prev) => (prev = true));
    },
    [setDisabled]
  );

  const handleLogin = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      SetLogin(e.target.value);
      handleDis(e.target.value, password);
    },

    [SetLogin, handleDis, password]
  );

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      SetPassword(e.target.value);
      handleDis(login, e.target.value);
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
