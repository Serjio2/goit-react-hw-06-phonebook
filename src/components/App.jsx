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

// **********************************************************
// use class

// export class App extends Component {
//     state = {
//       contacts: [],
//       filter: '',
//     };

//     componentDidMount() {
//       const savedLocalStorage = localStorage.getItem('contact');
//       if (savedLocalStorage !== null) {
//         this.setState({
//           contacts: JSON.parse(savedLocalStorage),
//         });
//       }
//     }

//     componentDidUpdate(prevState) {
//       if (prevState.contacts !== this.state.contacts) {
//         localStorage.setItem('contact', JSON.stringify(this.state.contacts));
//       }
//     }

//     addContact = newName => {
//       if (
//         this.state.contacts.map(contact => contact.name).includes(newName.name)
//       ) {
//         alert(`${newName.name} is already in contacts`);
//       } else {
//         this.setState(prevState => {
//           return {
//             contacts: [...prevState.contacts, newName],
//           };
//         });
//       }
//     };

//     changeFilter = newFilter => {
//       this.setState({
//         filter: newFilter,
//       });
//     };

//     handleDelete = id => {
//       this.setState(prevState => {
//         return {
//           contacts: prevState.contacts.filter(contact => contact.id !== id),
//         };
//       });
//     };

//     render() {
//       const { contacts, filter } = this.state;

//       const visibleContacts = contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//       );

//       return (
//         <div>
//           <GlobalStyle />

//           <Section title="Phonebook">
//             <ContactForm addContact={this.addContact} />
//           </Section>

//           <Section title="Contacts">
//             <Filter value={filter} onChange={this.changeFilter} />
//             <ContactList
//               contacts={visibleContacts}
//               onDelete={this.handleDelete}
//             />
//           </Section>
//         </div>
//       );
//     }
//   }
