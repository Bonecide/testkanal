
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './Pages/MainPage/MainPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  const [isLogin,setIsLogin] = useState(false)
  return (
    <Routes>
          <Route element={<Layout/>}>
            <Route index element={<MainPage/>} />
            <Route path='/login' element={<LoginPage/>}/>
          </Route>
    </Routes>
  );
}

export default App;
