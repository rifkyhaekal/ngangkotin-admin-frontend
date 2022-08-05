import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './login.scss';
import logo from './img/ngangkotin-car.png';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();

  const handleCallbackResponse = (response) => {
    let adminObject = jwt_decode(response.credential);
    const adminData = {
      email: adminObject.email,
      fullname: adminObject.name,
      isVerified: adminObject.email_verified,
      profileUrl: adminObject.picture,
    };

    axios
      .post('auth', adminData)
      .then((res) => {
        if (res.status === 201) {
          const {
            data: { accessToken, refreshToken },
          } = res.data;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          Swal.fire({
            icon: 'success',
            title: 'Login berhasil!',
            html: `Selamat datang, <b>${adminData.fullname}</b>.`,
            showConfirmButton: true,
            timer: 4000,
          });
          navigate('/');
        }
      })
      .catch((error) => Swal.fire('Login gagal!', error.response.data.message, 'error'));
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
