import './dropdownmenu.scss';
import DropdownItem from '../dropdownitem/DropdownItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const DropdownMenu = () => {
  // const navigate = useNavigate();

  // const logoutSubmit = (e) => {
  //   e.stopPropagation();

  //   const refreshToken = { refreshToken: localStorage.getItem('refreshToken') };
  //   console.log(refreshToken);
  //   axios.delete('auth', refreshToken).then((res) => {
  //     console.log(res);
  //     if (res.status === 'success') {
  //       localStorage.removeItem('accessToken');
  //       localStorage.removeItem('refreshToken');

  //       navigate('/');
  //     }
  //   });
  // };

  return (
    <div className='dropdown'>
      <DropdownItem icon={<AccountCircleIcon />}>
        <NavLink to='/users'>Profil</NavLink>
      </DropdownItem>
      <DropdownItem icon={<LogoutIcon />}>
        <Link to='/logout' className='navButton'>
          Logout
        </Link>
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
