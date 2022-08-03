import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Ngankotin Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>MANAJEMEN</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Pengemudi</span>
            </li>
          </Link>
          <li>
            <PersonOutlinedIcon className='icon' />
            <span>Penumpang</span>
          </li>
          <li>
            <AirportShuttleIcon className='icon' />
            <span>Angkot</span>
          </li>
          <li>
            <RouteOutlinedIcon className='icon' />
            <span>Rute</span>
          </li>
          <p className='title'>TRANSAKSI</p>
          <li>
            <ReceiptOutlinedIcon className='icon' />
            <span>Order</span>
          </li>
          <li>
            <NoteOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <ReceiptLongOutlinedIcon className='icon' />
            <span>Laporan</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <SettingsIcon className='icon' />
            <span>Pengaturan</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profil</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Keluar</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption' onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className='colorOption' onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  );
};

export default Sidebar;
