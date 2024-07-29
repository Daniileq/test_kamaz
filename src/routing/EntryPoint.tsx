import { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import BitCoins from '../Pages/Bitcoins/BitCoins';
const EntryPoint = () => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    if (!!localStorage.getItem('user')) {
      setAuth(true);
    } else setAuth(false);
  }, []);
  return (
    <>
      {auth ? (
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/" element={<Login setAuth={setAuth} />} />
          <Route path="/bitcoins" element={<BitCoins setAuth={setAuth} />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/" element={<Login setAuth={setAuth} />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      )}
      <Outlet />
    </>
  );
};

export default EntryPoint;
