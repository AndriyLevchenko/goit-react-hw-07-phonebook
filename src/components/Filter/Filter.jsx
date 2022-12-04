import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { inputFilterForm } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const inputID = nanoid();
    return (
        <div>
            <p className={css.title}>Find contacts by name</p>
            <input
                className={css.input}
                id={inputID}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={filter}
                onChange={e => dispatch(inputFilterForm(e.target.value))}
            />
        </div>
    )
}
