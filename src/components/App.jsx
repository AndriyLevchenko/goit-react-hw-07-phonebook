import {useState, useEffect} from 'react';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ListContacts } from 'components/ListContacts/ListContacts';
import css from 'components/App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = contact => {
    if (contacts.find(prevState => 
      prevState.name === contact.name)) {
      alert(`${contact.name} is already on contacts`);
      return
    } 
      setContacts(prevState => [contact, ...prevState],
  )}

  const deleteContact = contactId => {
   setContacts(prevState =>
    prevState.filter(contact => contact.id !== contactId)
  )
  }

  const inputFilterForm = (event) => {
    setFilter(event.currentTarget.value)
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  useEffect (() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect (() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    setContacts (parsedContacts)
  }, [])

  const filteredContacts = getFilteredContacts();
  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <Form onSubmit={formSubmitHandler}/>
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={inputFilterForm}/>
      <ListContacts contacts={filteredContacts} onDeleteContact={deleteContact}/>
    </div>
  );
}

