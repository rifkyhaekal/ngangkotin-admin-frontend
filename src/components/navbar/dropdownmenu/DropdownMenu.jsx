import './dropdownmenu.scss';
import DropdownItem from '../dropdownitem/DropdownItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const DropdownMenu = () => {
  return (
    <div className='dropdown'>
      <DropdownItem icon={<AccountCircleIcon />} url='/profil' red={false}>
        Profil
      </DropdownItem>
      <DropdownItem icon={<LogoutIcon />} url='/logout' red={true}>
        Logout
      </DropdownItem>
    </div>
  );
};

export default DropdownMenu;
