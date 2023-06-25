// // import { Form } from './Form/Form';
// // import { Filter } from './Filter/Filter';
// // import { ContactList } from './ContactList/ContactList';


// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

// import { useDispatch } from 'react-redux';

// import { useEffect } from 'react';
// import { getContactsThunk } from 'redux/metods';

// export const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getContactsThunk());
//   }, [dispatch]);

//   return (
//     <div
//           // style={{
//           //   display: 'flex',
//           //   flexDirection: 'column',
//           //   justifyContent: 'center',
//           //   alignItems: 'center',
//           //   color: '#010101',
//           // }}
//     >
//       <h1>Phonebook</h1>
//       <Form />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </div>
//   );
// };

import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserThunk } from 'redux/metods';
import RestrictedRoute from './RestrictedRouter';
import PrivateRoute from './PrivateRoute';
import { getStateSelector } from 'redux/selector';
export const App = () => {
  const { auth } = useSelector(getStateSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return auth.isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};
