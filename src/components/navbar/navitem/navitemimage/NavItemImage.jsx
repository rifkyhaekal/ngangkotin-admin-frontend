import { useState } from 'react';
import Dropdown from '../../dropdown/Dropdown';
import './navitemimage.scss';

const NavItem = (props) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <li className='navItem' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={props.url} alt='profil' className='avatar' />
      {dropdown && <Dropdown />}
    </li>
  );
};

export default NavItem;
