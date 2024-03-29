


import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getStateSelector } from 'redux/selector';
import { deleteContactsThunk } from 'redux/metods';

export const ContactList = () => {
  const {
    contacts: { contacts },
  } = useSelector(getStateSelector);
  const { filter } = useSelector(getStateSelector);

  const dispatch = useDispatch();

  const filterName = contacts.items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    
    dispatch(deleteContactsThunk(id));
  };

  return (
    <ul children={css.list}>
      {contacts.isLoading && <p>Loading...</p>}
      {contacts.error && (
        <p>Oops! Error: {contacts.error}</p>
      )}
      {filterName.map(item => (
        <li className={css.item} key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          < button
            className={css.button}
            type="button"
            onClick={() => deleteContact(item.id)}
            disabled={contacts.isDeleting}
          >
            {contacts.isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
       </ul>
  );
};
