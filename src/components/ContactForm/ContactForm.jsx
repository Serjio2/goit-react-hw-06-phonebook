// import { Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { StyledForm, StyledInput } from './ContactForm.styled';
import { useSelector, useDispatch } from "react-redux";
// import { addContact, getContactsItems } from "../../redux/contactSlice";
// import { useEffect } from 'react';

// const schema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   number: Yup.number().required('Required'),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

export const ContactForm = () => {

  const dispatch = useDispatch();

  const contactsItems = useSelector(state => state.contacts);

  //  const handleSubmitForm = (event) => {
    // addContact({ ...value, id: nanoid() });
    // event.resetForm();
  // };

  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [formState.isSubmitSuccessful, reset]);


  // const addNewContact = data => {

  //   dispatch(addContact(data));
    
  // };
  
    return (
      // <form
        // initialValues={initialValues}
        // validationSchema={schema}
        // onSubmit={handleSubmitForm(addNewContact)}
      // >
        <form >
          <label>
            <p>Name:</p>
            <input type="text" name="name" placeholder="Input name" />
            {/* <ErrorMessage name="name" component="span"/> */}
          </label>

          <label>
            <p>Number:</p>
            <input type="tel" name="number" placeholder="Input number" />
            {/* <ErrorMessage name="number" component="span"/> */}
          </label>

          <button  type="submit">Add contact</button>
        </form>
      // </form>
    );
  
}
