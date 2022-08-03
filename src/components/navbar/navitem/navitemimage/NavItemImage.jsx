import { useEffect, useRef, useState } from 'react';
import './navitemimage.scss';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const useOutsideClose = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideClose(wrapperRef);

  return (
    <li className='navItem'>
      <img src={props.url} alt='profil' className='avatar' ref={wrapperRef} onClick={() => setOpen(!open)}>
        {props.icon}
      </img>

      {open && props.children}
    </li>
  );
};

export default NavItem;
