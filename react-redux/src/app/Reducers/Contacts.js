import cloneDeep from 'lodash/cloneDeep';
import * as CONSTANS from '../Constans/contacts';

const initialState = {
  name: '',
  phone: '',
  contacts: [],
  loading: false,
  error: ''
};

export default function contacts(state = cloneDeep(initialState), action) {
  const { type, payload } = action;

  switch (type) {
    case CONSTANS.STATE_CONTACTS.CLEAN_FORM:
    case CONSTANS.STATE_CONTACTS.SAVE_NAME:
    case CONSTANS.STATE_CONTACTS.SAVE_PHONE:
    case CONSTANS.GET_CONTACTS.START:
    case CONSTANS.GET_CONTACTS.COMPLETED:
    case CONSTANS.GET_CONTACTS.ERROR:
    case CONSTANS.CREATE_CONTACT.START:
    case CONSTANS.CREATE_CONTACT.ERROR:
    case CONSTANS.UPDATE_CONTACT.START:
    case CONSTANS.UPDATE_CONTACT.ERROR:
    case CONSTANS.DELETE_CONTACT.START:
    case CONSTANS.DELETE_CONTACT.ERROR:
      return {
        ...state,
        ...payload
      };
    
    case CONSTANS.CREATE_CONTACT.COMPLETED: {
      const { contact, ...props } = payload;
      return {
        ...state,
        ...props,
        contacts: [
          ...state.contacts,
          contact
        ]
      };
    }

    case CONSTANS.UPDATE_CONTACT.COMPLETED: {
      const { contact, index, ...props } = payload;
      return {
        ...state,
        ...props,
        contacts: [
          ...state.contacts.slice(0, index),
          contact,
          ...state.contacts.slice(index + 1)
        ]
      };
    }

    case CONSTANS.DELETE_CONTACT.COMPLETED: {
      const { index, ...props } = payload;
      return {
        ...state,
        ...props,
        contacts: [
          ...state.contacts.slice(0, index), // defore
          ...state.contacts.slice(index + 1) // after
        ]
      };
    }

    default:
      return state;
  }
}
