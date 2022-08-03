import './dropdownitem.scss';
import { NavLink } from 'react-router-dom';

const DropdownItem = (props) => {
  return (
    <NavLink to='/logout' className='menuItem'>
      {props.children}
    </NavLink>
  );
};

export default DropdownItem;
