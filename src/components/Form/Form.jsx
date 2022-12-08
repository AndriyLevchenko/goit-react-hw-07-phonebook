import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/createApiSlice';
import { selectContacts } from 'redux/selectors';
import css from 'components/Form/Form.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const inputChangeName = event => {
    setName(event.currentTarget.value)
  }
  const inputChangeNumber = event => {
    setNumber(event.currentTarget.value)
  }

  const handleSabmit = event => {
    event.preventDefault();
    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({name, number}));
    }
    setName ('');
    setNumber ('');
  }

  return (
    <form onSubmit={handleSabmit} className={css.form}>
      <p className={css.title}>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={inputChangeName}
      />
      <p className={css.title}>Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={inputChangeNumber}
      />
      <button 
        className={css.button} 
        type="submit"
      >Add contact</button>
    </form>
  )
}
