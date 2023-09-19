import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StyledForm, StyledInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contactsSlice';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const allcontacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmitForm = (value, actions) => {
    if (allcontacts.find(contact => contact.name === value.name)) {
      return alert(`${value.name} is already in contacts`);
    }
    
    dispatch(addNewContact({ ...value, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmitForm}
    >
      <StyledForm>
        <label>
          <p>Name:</p>
          <StyledInput type="text" name="name" placeholder="Input name" />
          <ErrorMessage name="name" component="span" />
        </label>

        <label>
          <p>Number:</p>
          <StyledInput type="tel" name="number" placeholder="Input number" />
          <ErrorMessage name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
