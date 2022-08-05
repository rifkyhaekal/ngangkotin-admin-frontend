// import React, { Component } from 'react';
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';
// import swal from 'sweetalert';

// class Logout extends Component {
//   async componentDidMount() {
//     try {
//       await axios.delete('auth', localStorage.getItem('refreshToken'), {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       localStorage.removeItem('refreshToken');
//       localStorage.removeItem('accessToken');
//       return <Navigate to='/login' replace={true} />;
//     } catch (error) {
//       console.log(error);
//       swal('Logout gagal!', error.response.data.message, 'error');
//     }
//   }

//   render() {
//     return <></>;
//   }
// }

// export default Logout;
