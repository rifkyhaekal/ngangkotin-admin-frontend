import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs, productInputs } from './formSource';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import axios from 'axios';
import Logout from './pages/logout/Logout';
import AdminPrivateRoute from './AdminPrivateRoute';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASEURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            {/* <AdminPrivateRoute path='admin' name='Admin' /> */}
            <Route path='login' element={localStorage.getItem('accessToken') ? <Navigate to='/' /> : <Login />} />
            <Route index element={<Home />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title='Add New User' />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
