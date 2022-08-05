import React, { useState } from 'react';
import './dropdown.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DropdownItem from '../dropdownitem/DropdownItem';
import { NavLink } from 'react-router-dom';

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
      confirmButtonColor: '#ff0000',
      cancelButtonColor: '#443f3f',
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
      <div onClick={handleClick} className={click ? 'dropdownMenu clicked' : 'dropdownMenu'}>
        <DropdownItem icon={<AccountCircleIcon />}>
          <NavLink to='/users'>Profil</NavLink>
        </DropdownItem>
        <DropdownItem icon={<LogoutIcon />}>
          <button type='button' className='navButton' onClick={(e) => logoutSubmit(e)}>
            Logout
          </button>
        </DropdownItem>
      </div>
    </>
  );
};

export default Dropdown;
