import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';

export const Filter = ({value, onChange}) => {
    return (
        <div>
            <p className={css.title}>Find contacts by name</p>
            <input
                className={css.input}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};