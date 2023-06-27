import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { getContactsThunk } from 'redux/metods';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStateSelector } from 'redux/selector';

const ContactsPage = () => {
  const { auth } = useSelector(getStateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isLoggedIn) {
      dispatch(getContactsThunk());
    }
  }, [dispatch, auth.isLoggedIn]);

  return (
    <>
      <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#010101',
          }} >
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
export default ContactsPage;
