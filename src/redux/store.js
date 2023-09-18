import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');

const myContacts = createReducer( [], {
  [addContact]: (state, action) =>  state.push(action.payload)
} );

export const store = configureStore({
  reducer: {
    contacts: myContacts,
    filter: '',
  },
});
