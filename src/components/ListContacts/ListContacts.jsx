import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from "prop-types";
import css from 'components/ListContacts/ListContacts.module.css';

export const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts)
  const filter = useSelector(getFilter);

  const filteredContacts = contacts?.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts) {
    return (
      <ul>{filteredContacts.map(contact => 
        <li key={contact.id} className={css.titleName}>
        <p className={css.name}>: {contact.name}: {contact.number}</p>
        <button 
        className={css.button} 
        type=""
        onClick={() => dispatch(deleteContact(contact.id))}
        >Delete</button>
        </li>)}
      </ul>
    )
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};