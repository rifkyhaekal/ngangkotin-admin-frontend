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
import { AuthContext } from './context/AuthContext';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASEURL;
axios.defaults.headers['Content-Type'] = 'application/json';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  // const ProtectedRoute = ({ children }) => {
  //   const { user } = useContext(AuthContext);

  //   if (!user) {
  //     return <Navigate to='/login' />;
  //   }
  // };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
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
