import React, { useState } from 'react';
import './dropdown.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  const logoutSubmit = (e) => {
    e.preventDefault();

    const refreshToken = { refreshToken: localStorage.getItem('refreshToken') };

    Swal.fire({
      title: 'Apakah anda yakin ingin logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout',
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify(refreshToken),
            url: 'auth',
          }).then((res) => {
            if (res.status === 200) {
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');

              navigate('/login');
            } else if (result.isDismissed) {
              return;
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire('Logout gagal!', err.response.data.message, 'error');
      });
  };
  return (
    <>
      <ul onClick={handleClick} className={click ? 'dropdownMenu clicked' : 'dropdownMenu'}>
        <li>
          <Link className='dropdownLink' to='/profile' onClick={() => setClick(false)}>
            Profile
          </Link>
        </li>
        <li>
          <button className='dropdownLink' type='button' onClick={(e) => logoutSubmit(e)}>
            Button
          </button>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
