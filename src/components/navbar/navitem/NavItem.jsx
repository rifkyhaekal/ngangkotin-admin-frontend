import './navitem.scss';

const NavItem = (props) => {
  return (
    <li className='navItem'>
      <span className='iconButton'>{props.icon}</span>
    </li>
  );
};

export default NavItem;
