import configureStore from 'redux-mock-store';
import _ from 'lodash';

import { contactsCleanFormMiddleware } from '../../app/middlewares/contacts';

import {
  CREATE_CONTACT,
  UPDATE_CONTACT,
  STATE_CONTACTS
} from '../../app/Constans/contacts';

import {
  createContactCOMPLETED, // it must works
  updateContactCOMPLETED, // it must works
  deleteContactCOMPLETED, // it doesn't must work
  cleanForm
} from '../../app/actions/contacts';

const middlewares = [contactsCleanFormMiddleware];
const mockStore = configureStore(middlewares);

describe('CONTACTS - MIDDLEWARE', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it(`contactsCleanFormMiddleware must execute cleanForm() when ${CREATE_CONTACT.COMPLETED}`, () => {
    store.dispatch(createContactCOMPLETED({
      name: 'Andrés',
      phone: '332132831231'
    }));

    const current = _.chain(store.getActions())
      .filter({ type: STATE_CONTACTS.CLEAN_FORM })
      .first()
      .value();

    const expected = cleanForm();

    expect(current).toEqual(expected);
  });

  it(`contactsCleanFormMiddleware must execute cleanForm() when ${UPDATE_CONTACT.COMPLETED}`, () => {
    store.dispatch(updateContactCOMPLETED({
      name: 'Andrés',
      phone: '332132831231'
    }));

    const current = _.chain(store.getActions())
      .filter({ type: STATE_CONTACTS.CLEAN_FORM })
      .first()
      .value();

    const expected = cleanForm();

    expect(current).toEqual(expected);
  });

  it(`
    contactsCleanFormMiddleware must not execute cleanForm() when ${CREATE_CONTACT.COMPLETED} and ${UPDATE_CONTACT.COMPLETED}
  `, () => {
    store.dispatch(deleteContactCOMPLETED(0)); // index

    const current = _.chain(store.getActions())
      .filter({ type: STATE_CONTACTS.CLEAN_FORM })
      .first()
      .isUndefined()
      .value();

    const expected = true;

    expect(current).toEqual(expected);
  });
});
