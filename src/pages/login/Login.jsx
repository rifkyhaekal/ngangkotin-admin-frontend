import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import jwt_decode from 'jwt-decode';
import './login.scss';
import logo from './img/ngangkotin-car.png';
import swal from 'sweetalert';

const Login = () => {
  // const [adminCredentials, setAdminCredentials] = useState({
  //   email: undefined,
  //   fullname: undefined,
  //   isVerified: undefined,
  //   profileUrl: undefined,
  // });

  const handleCallbackResponse = (response) => {
    let adminObject = jwt_decode(response.credential);
    const adminData = {
      email: adminObject.email,
      fullname: adminObject.name,
      isVerified: adminObject.email_verified,
      profileUrl: adminObject.picture,
    };

    console.log(adminObject);

    axios
      .post('auth', adminData)
      .then((res) => {
        if (res.status === 201) {
          const {
            data: { accessToken, refreshToken },
          } = res.data;
          console.log(accessToken);
          console.log(refreshToken);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          swal('Login berhasil!', `Selamat datang, ${adminData.fullname}.`, 'success');
          navigate('/');
        }
      })
      .catch((error) => swal('Login gagal!', error.response.data.message, 'error'));
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signIn'), { theme: 'outline', size: 'large', shape: 'circle' });

    google.accounts.id.prompt();
  });

  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: 'LOGIN_START' });
  //   try {
  //     const res = await axios.post('/auth/login', credentials);

  //     if (res.data.isAdmin) {
  //       dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
  //     } else {
  //       dispatch({
  //         type: 'LOGIN_FAILURE',
  //         payload: { message: 'Kamu tidak boleh masuk!' },
  //       });
  //     }
  //   } catch (err) {
  //     dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
  //   }
  // };

  return (
    <div className='login'>
      <div className='loginContainer'>
        <img src={logo} alt='logo' className='loginLogo' />
        <p className='loginText'>Silahkan masuk menggunakan akun yang terdaftar di Ngangkotin, ya!</p>
        <div id='signIn' className='loginButton'></div>
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  );
};

export default Login;
