
import css from 'components/ListContacts/ListContacts.module.css';
import PropTypes from 'prop-types';

export const ListContacts = ({contacts, onDeleteContact}) => {
    return (
        <ul>{contacts.map(contact => <li key={contact.id} className={css.titleName}>
            <p className={css.name}>: {contact.name}: {contact.number}</p>
            <button 
            className={css.button} 
            type=""
            onClick={() => onDeleteContact(contact.id)}
            >Delete</button>
            </li>)}
        </ul>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};