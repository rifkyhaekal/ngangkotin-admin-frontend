import './dropdownitem.scss';

const DropdownItem = (props) => {
  return (
    <div className='menuItem'>
      <span className='iconButton'>{props.icon}</span>
      {props.children}
    </div>
  );
};

export default DropdownItem;
