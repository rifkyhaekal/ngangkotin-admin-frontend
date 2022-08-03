import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import MoneyTwoToneIcon from '@mui/icons-material/MoneyTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';

const widget = ({ type }) => {
  let data;

  //temporary data
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutlineIcon className='icon' style={{ color: 'crimson', backgroundColor: 'rgba(255, 0, 0, 0.25)' }} />,
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: <ReceiptTwoToneIcon className='icon' style={{ color: 'goldenrod', backgroundColor: 'rgba(218, 165, 32, 0.2)' }} />,
      };
      break;
    case 'earning':
      data = {
        title: 'EARNIGS',
        isMoney: true,
        link: 'View net earnings',
        icon: <MoneyTwoToneIcon className='icon' style={{ color: 'green', backgroundColor: 'rgba(0, 128, 0, 0.2)' }} />,
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: <AccountBalanceWalletTwoToneIcon className='icon' style={{ color: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)' }} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && 'Rp'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default widget;
