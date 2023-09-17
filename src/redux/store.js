import { configureStore, createReducer } from '@reduxjs/toolkit';



// const myContacts = createReducer( 10, {} );

export const store = configureStore({
  reducer: {
    contacts: myContacts,
    filter: '',
  },
});
