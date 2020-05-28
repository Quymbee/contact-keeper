import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: 'jill',
        email: 'jill@gmail.com',
        phone: '11111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'harry',
        email: 'harry@gmail.com',
        phone: '2222',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  //add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //delete contact

  //set current

  //clear current

  //update contact

  //filter

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
