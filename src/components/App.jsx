import { GlobalStyle } from './GlobalStyle';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

const getLocalStorage = () => {
  const savedLocalStorage = localStorage.getItem('contact');
  if (savedLocalStorage !== null) {
    return JSON.parse(savedLocalStorage);
  } else {
    return [];
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getLocalStorage);
  const [filter, setFilter] = useState('');

  // record in LocalStorage
  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newName => {
    if (contacts.map(contact => contact.name).includes(newName.name)) {
      alert(`${newName.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, newName]);
    }
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <GlobalStyle />

      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={handleDelete} />
      </Section>
    </div>
  );
};
