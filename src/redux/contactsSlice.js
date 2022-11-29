import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice ({
    name: 'contacts',
    initialState: {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push({
                id: nanoid(),
                number: action.payload.number,
                name: action.payload.name,
            });
        },
        deleteContact(state, action) {
            state.filter(contact => contact.id !== action.payload.id)
        },
        inputFilterForm(state, action) {
            state.filter = action.payload;
        },
    },
})

export const {addContact, deleteContact, inputFilterForm} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;