import includes from 'lodash/includes';
import { CREATE_CONTACT, UPDATE_CONTACT } from '../../app/Constans/contacts';
import { cleanForm } from '../../app/actions/contacts';

export const contactsCleanFormMiddleware = store => next => action => {
  const cleanFormActions = [
    CREATE_CONTACT.COMPLETED,
    UPDATE_CONTACT.COMPLETED
  ];

  const mustCleanForm = includes(cleanFormActions, action.type);
  mustCleanForm && store.dispatch(cleanForm());

  return next(action);
};
