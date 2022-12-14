import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import NavItem from './navitem/NavItem';
import NavItemImage from './navitem/navitemimage/NavItemImage';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Cari...' />
          <SearchOutlinedIcon />
        </div>
        <ul className='navbarNav'>
          <NavItem icon={<DarkModeOutlinedIcon onClick={() => dispatch({ type: 'TOGGLE' })} />} />
          <NavItemImage url='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress'></NavItemImage>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
