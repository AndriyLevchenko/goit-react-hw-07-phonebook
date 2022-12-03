import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import css from 'components/App.module.css';

export const App = () => {
  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
}

