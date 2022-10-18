import React from 'react';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ListContacts } from 'components/ListContacts/ListContacts';
import css from 'components/App.module.css';


export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandler = contact => {
    const duplicateName = this.state.contacts.find(prevState => 
      prevState.name === contact.name);
    if (duplicateName) {
      alert(`${contact.name} is already on contacts`);
      return
    } 
      this.setState(prevState => ({contacts: [contact, ...prevState.contacts],
  }))}

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  inputFilterForm = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  getFilteredContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  // У формі прописуєм onSubmit як назву пропсу (це не сам сабміт)
  render () {
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h2 className={css.title}>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler}/>
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.inputFilterForm}/>
        <ListContacts contacts={filteredContacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  }
};
