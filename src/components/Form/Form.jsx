import React from 'react';
import { nanoid } from 'nanoid';
import css from 'components/Form/Form.module.css';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  }

  inputChange = event => {
    const {name, value} = event.currentTarget;
    this.setState({[name]: value})
  }

  handleSabmit = event => {
    const {name, number} = this.state;
    event.preventDefault();

    const contact = {
      id: nanoid(4),
      name: name,
      number: number,
    };
    this.props.onSubmit(contact);
    this.resetForm();
  }

  resetForm = () => {
    this.setState ({name: '', number: ''})
  }

  render () {
    const {name, number} = this.state;
    return (
      <form onSubmit={this.handleSabmit} className={css.form}>
        <p className={css.title}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.inputChange}
        />
        <p className={css.title}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.inputChange}
        />
        <button 
          className={css.button} 
          type="submit"
        >Add contact</button>
      </form>
    )
  }
}