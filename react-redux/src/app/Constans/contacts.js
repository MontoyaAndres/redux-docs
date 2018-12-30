import { defineAction } from '../utils/defineAction';
import { START, COMPLETED, ERROR } from './statesFrequently';

const actionsHttp = [START, COMPLETED, ERROR];

//Local state
export const STATE_CONTACTS = defineAction('STATE_CONTACTS',
  ['CLEAN_FORM', 'SAVE_NAME', 'SAVE_PHONE']
);

// HTTP petitions
export const GET_CONTACTS = defineAction('GET_CONTACTS', actionsHttp);
export const CREATE_CONTACT = defineAction('CREATE_CONTACT', actionsHttp);
export const UPDATE_CONTACT = defineAction('UPDATE_CONTACT', actionsHttp);
export const DELETE_CONTACT = defineAction('DELETE_CONTACT', actionsHttp);
