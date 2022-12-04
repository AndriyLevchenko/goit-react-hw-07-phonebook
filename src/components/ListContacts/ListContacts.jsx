import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
// import PropTypes from "prop-types";
import css from 'components/ListContacts/ListContacts.module.css';

export const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>{filteredContacts.map(({ id, name, number }) => (
      <li key={id} className={css.titleName}>
      <p className={css.name}>: {name}: {number}</p>
      <button 
      className={css.button} 
      type="button"
      onClick={() => dispatch(deleteContact(id))}
      >Delete</button>
      </li>)
    )}</ul>
  )
}

// ListContacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };