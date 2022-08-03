import './dropdownitem.scss';
import { NavLink } from 'react-router-dom';

const DropdownItem = (props) => {
  return (
    <>
      <NavLink to={props.url} className='menuItem'>
        <span className='iconButton'>{props.icon}</span>
        {props.children}
      </NavLink>
    </>
  );
};

export default DropdownItem;
