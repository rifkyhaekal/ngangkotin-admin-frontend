import { useEffect, useRef, useState } from 'react';
import './dropdownmenu.scss';
import DropdownItem from '../dropdownitem/DropdownItem';

const DropdownMenu = () => {
  return (
    <div className='dropdown'>
      <DropdownItem>Profil</DropdownItem>
    </div>
  );
};

export default DropdownMenu;
