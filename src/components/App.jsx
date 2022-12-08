import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/createApiSlice';
import { selectError, selectIsLoading } from 'redux/selectors';

import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import css from 'components/App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ListContacts />
    </div>
  );
}

