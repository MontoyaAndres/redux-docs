import axios from 'axios';
import findIndex from 'lodash/findIndex';
import * as CONSTANS from '../Constans/contacts';
import { apiURL } from '../utils/http';

// Actions creators
export function cleanForm() {
  return {
    type: CONSTANS.STATE_CONTACTS.CLEAN_FORM,
    payload: {
      name: '',
      phone: ''
    }
  };
}

export function saveName(name) {
  return {
    type: CONSTANS.STATE_CONTACTS.SAVE_NAME,
    payload: {
      name
    }
  };
}

export function savePhone(phone) {
  return {
    type: CONSTANS.STATE_CONTACTS.SAVE_PHONE,
    payload: {
      phone
    }
  };
}

// actions creators GET CONTACTS
export function getContactsSTART() {
  return {
    type: CONSTANS.GET_CONTACTS.START,
    payload: {
      contacts: [],
      loading: true,
      error: ''
    }
  };
}

export function getContactsCOMPLETED(contacts) {
  return {
    type: CONSTANS.GET_CONTACTS.COMPLETED,
    payload: {
      contacts,
      loading: false,
      error: ''
    }
  };
}

export function getContactsERROR(error) {
  return {
    type: CONSTANS.GET_CONTACTS.ERROR,
    payload: {
      error,
      loading: false
    }
  };
}

// Async actions creators
export function getContacts() {
  return (dispatch, getState) => {
    dispatch(getContactsSTART());

    return axios.get(`${apiURL}/contacts`)
      .then(({data}) => dispatch(getContactsCOMPLETED(data)));
  };
}

// actions creators CREATE CONTACTS
export function createContactSTART() {
  return {
    type: CONSTANS.CREATE_CONTACT.START,
    payload: {
      loading: true,
      error: ''
    }
  };
}

export function createContactCOMPLETED(contact) {
  return {
    type: CONSTANS.CREATE_CONTACT.COMPLETED,
    payload: {
      contact,
      loading: false,
      error: ''
    }
  };
}

export function createContactERROR(error) {
  return {
    type: CONSTANS.CREATE_CONTACT.ERROR,
    payload: {
      error,
      loading: false
    }
  };
}

// Async Action Creator
export function createContact(name, phone) {
  return (dispatch, getState) => {
    dispatch(createContactSTART());

    return axios.post(`${apiURL}/contacts`, { name, phone })
      .then(({ item: contact }) => dispatch(createContactCOMPLETED(contact)));
  };
}

// Actions creators UPDATE CONTACT
export function updateContactSTART() {
  return {
    type: CONSTANS.UPDATE_CONTACT.START,
    payload: {
      loading: true,
      error: ''
    }
  };
}

export function updateContactCOMPLETED(contact, index) {
  return {
    type: CONSTANS.UPDATE_CONTACT.COMPLETED,
    payload: {
      contact,
      index,
      loading: false,
      error: ''
    }
  };
}

export function updateContactERROR(error) {
  return {
    type: CONSTANS.UPDATE_CONTACT.ERROR,
    payload: {
      error,
      loading: false
    }
  };
}

// Async Action Creator
export function updateContact(name, phone, uid) {
  return (dispatch, getState) => {
    dispatch(updateContactSTART());

    // Validation
    const { contacts } = getState().contacts;
    const index = findIndex(contacts, { uid });

    if (index === -1) {
      return dispatch(updateContactERROR('contact wasn\'t found'));
    }

    return axios.put(`${apiURL}/contacts/${uid}`, { name, phone })
      .then(({ item: contact }) => dispatch(updateContactCOMPLETED(contact, index)));
  }; 
}

// Actions creators DELETE CONTACT
export function deleteContactSTART() {
  return {
    type: CONSTANS.DELETE_CONTACT.START,
    payload: {
      loading: true,
      error: ''
    }
  };
}

export function deleteContactCOMPLETED(index) {
  return {
    type: CONSTANS.DELETE_CONTACT.COMPLETED,
    payload: {
      index,
      loading: false,
      error: ''
    }
  };
}

export function deleteContactERROR(error) {
  return {
    type: CONSTANS.DELETE_CONTACT.ERROR,
    payload: {
      error,
      loading: false
    }
  };
}

// Async Action Creator
export function deleteContact(uid) {
  return (dispatch, getState) => {
    dispatch(deleteContactSTART());

    // Validation
    const { contacts } = getState().contacts;
    const index = findIndex(contacts, { uid });
    
    if (index === -1) {
      return dispatch(deleteContactERROR('Contact wasn\'t found'));
    }

    return axios.delete(`${apiURL}/contacts/${uid}`)
      .then(() => dispatch(deleteContactCOMPLETED(index)));
  };
}
