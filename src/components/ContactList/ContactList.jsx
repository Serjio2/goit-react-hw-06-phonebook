import { nanoid } from 'nanoid';
import { StyledContactList } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  return (
    <StyledContactList>
      {contacts.map(contact => (
        <li key={nanoid()}>{contact.name}: {contact.number}
        {/* <button onClick={() => onDelete(contact.id)}>Delete</button> */}
        </li>
      ))}
    </StyledContactList>
  );
};
