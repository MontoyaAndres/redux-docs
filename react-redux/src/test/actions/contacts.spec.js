import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

import * as CONSTANTS_CONTACT from '../../app/Constans/contacts';
import * as ACTIONS from '../../app/actions/contacts';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('contacts - actions', () => {
  describe('General Actions', () => {
    it('cleanForm() return the object expected', () => {
      const current = ACTIONS.cleanForm();
      const expected = {
        type: CONSTANTS_CONTACT.STATE_CONTACTS.CLEAN_FORM,
        payload: {
          name: '',
          phone: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('saveName(name) return the object expected', () => {
      const current = ACTIONS.saveName('Steve');
      const expected = {
        type: CONSTANTS_CONTACT.STATE_CONTACTS.SAVE_NAME,
        payload: {
          name: 'Steve'
        }
      };
      expect(current).toEqual(expected);
    });

    it('savePhone(phone) return the object expected', () => {
      const current = ACTIONS.savePhone('3134894611');
      const expected = {
        type: CONSTANTS_CONTACT.STATE_CONTACTS.SAVE_PHONE,
        payload: {
          phone: '3134894611'
        }
      };
      expect(current).toEqual(expected);
    });
  });

  describe('GET CONTACTS', () => {
    it('getContactsSTART() return the object expected', () => {
      const current = ACTIONS.getContactsSTART();
      const expected = {
        type: CONSTANTS_CONTACT.GET_CONTACTS.START,
        payload: {
          contacts: [],
          loading: true,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('getContactsCompleted(contact) return the object expected', () => {
      const mockContacts = [{ name: 'Steve', phone: '3213726060' }];

      const current = ACTIONS.getContactsCOMPLETED(mockContacts);
      const expected = {
        type: CONSTANTS_CONTACT.GET_CONTACTS.COMPLETED,
        payload: {
          contacts: mockContacts,
          loading: false,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('getContactsERROR(error) return the object expected', () => {
      const error = '';
      const current = ACTIONS.getContactsERROR(error);
      const expected = {
        type: CONSTANTS_CONTACT.GET_CONTACTS.ERROR,
        payload: {
          loading: false,
          error
        }
      };
      expect(current).toEqual(expected);
    });

    it('getContacts() return the object expected when is completed', (done) => {
      const mockContacts = [
        {
          name: 'Steve',
          phone: '3134894611',
          uid: 'asda!E3-##@$#@$#-DSFdsfs'
        }
      ];

      const stubAxiosGet = sinon.stub(axios, 'get')
        .callsFake(() => Promise.resolve({ data: mockContacts }));

      const store = mockStore({});
      // Execute Async Action Creator
      return store.dispatch(ACTIONS.getContacts())
        .then(() => {
          const current = store.getActions();
          const expected = [
            {
              type: CONSTANTS_CONTACT.GET_CONTACTS.START,
              payload: {
                contacts: [],
                loading: true,
                error: ''
              }
            },
            {
              type: CONSTANTS_CONTACT.GET_CONTACTS.COMPLETED,
              payload: {
                contacts: mockContacts,
                loading: false,
                error: ''
              }
            }
          ];
          stubAxiosGet.restore();
          expect(current).toEqual(expected);
          done();
        });
    });
  });

  describe('CREATE CONTACT', () => {
    it('createContactSTART() return the object expected', () => {
      const current = ACTIONS.createContactSTART();
      const expected = {
        type: CONSTANTS_CONTACT.CREATE_CONTACT.START,
        payload: {
          loading: true,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('createContactCOMPLETED(contact) return the object expected', () => {
      const mockContact = [{ name: 'Steve', phone: '3213726060' }];

      const current = ACTIONS.createContactCOMPLETED(mockContact);
      const expected = {
        type: CONSTANTS_CONTACT.CREATE_CONTACT.COMPLETED,
        payload: {
          contact: mockContact,
          loading: false,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('createContactERROR(error) return the object expected', () => {
      const error = '';

      const current = ACTIONS.createContactERROR(error);
      const expected = {
        type: CONSTANTS_CONTACT.CREATE_CONTACT.ERROR,
        payload: {
          error,
          loading: false
        }
      };
      expect(current).toEqual(expected);
    });

    it('createContact(name, phone) return the object expected when is completed', (done) => {    
      const mockContact = {
        uid: 'asda!E3-##@$#@$#-DSFdsfs',
        name: 'Steve',
        phone: '3213726060'
      };

      const stubAxiosPost = sinon.stub(axios, 'post')
        .callsFake(() => Promise.resolve({ item: mockContact }));

      const store = mockStore({});

      return store.dispatch(ACTIONS.createContact(mockContact.name, mockContact.phone))
        .then(() => {
          const current = store.getActions();
          const expected = [
            {
              type: CONSTANTS_CONTACT.CREATE_CONTACT.START,
              payload: {
                loading: true,
                error: ''
              }
            },
            {
              type: CONSTANTS_CONTACT.CREATE_CONTACT.COMPLETED,
              payload: {
                loading: false,
                contact: mockContact,
                error: ''
              }
            }
          ];
          stubAxiosPost.restore();
          expect(current).toEqual(expected);
          done();
        });
    });
  });

  describe('UPDATE CONTACT', () => {
    it('updateContactSTART() return the object expected', () => {
      const current = ACTIONS.updateContactSTART();
      const expected = {
        type: CONSTANTS_CONTACT.UPDATE_CONTACT.START,
        payload: {
          loading: true,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('updateContactCOMPLETED(contact, index) return the object expected', () => {
      const mockContacts = { name: 'Steve', phone: '3134894611' },
        index = 100;

      const current = ACTIONS.updateContactCOMPLETED(mockContacts, index);
      const expected = {
        type: CONSTANTS_CONTACT.UPDATE_CONTACT.COMPLETED,
        payload: {
          contact: mockContacts,
          index,
          loading: false,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('deleteContactERROR(error) return the object expected', () => {
      const error = '';
      const current = ACTIONS.updateContactERROR(error);
      const expected = {
        type: CONSTANTS_CONTACT.UPDATE_CONTACT.ERROR,
        payload: {
          error,
          loading: false
        }
      };
      expect(current).toEqual(expected);
    });

    it('updateContact(name, phone, uid) return the object expected when is completed', (done) => {
      const uid = 'asda!E3-##@$#@$#-DSFdsfs';
      const mockContact = {
        name: 'Steve',
        phone: '3213726060',
        uid
      };
      
      const mockState = {
        contacts: {
          name: '',
          phone: '',
          contacts: [mockContact],
          loading: false,
          error: ''
        }
      };

      // Stop and simulate a success call
      const stubAxiosUpdate = sinon.stub(axios, 'put')
        .callsFake(() => Promise.resolve({ item: mockContact }));
      
      const store = mockStore(mockState);

      // Execute Async Action Creator
      return store.dispatch(
        ACTIONS.updateContact(mockContact.name, mockContact.phone, uid)
      )
        .then(() => {
          const current = store.getActions(); // answer of store
          const expected = [
            {
              type: CONSTANTS_CONTACT.UPDATE_CONTACT.START,
              payload: {
                loading: true,
                error: ''
              }
            },
            {
              type: CONSTANTS_CONTACT.UPDATE_CONTACT.COMPLETED,
              payload: {
                contact: mockContact,
                loading: false,
                error: '',
                index: 0
              }
            }
          ];

          stubAxiosUpdate.restore();
          expect(current).toEqual(expected);
          done();
        });
    });
  });

  describe('DELETE CONTACT', () => {
    it('deleteContactSTART() return the object expected', () => {
      const current = ACTIONS.deleteContactSTART();
      const expected = {
        type: CONSTANTS_CONTACT.DELETE_CONTACT.START,
        payload: {
          loading: true,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('deleteContactCOMPLETE(index) return the object expected', () => {
      const index = 0;
      const current = ACTIONS.deleteContactCOMPLETED(index);
      const expected = {
        type: CONSTANTS_CONTACT.DELETE_CONTACT.COMPLETED,
        payload: {
          index,
          loading: false,
          error: ''
        }
      };
      expect(current).toEqual(expected);
    });

    it('deleteContactERROR(error) return the object expected', () => {
      const error = '';

      const current = ACTIONS.deleteContactERROR(error);
      const expected = {
        type: CONSTANTS_CONTACT.DELETE_CONTACT.ERROR,
        payload: {
          error,
          loading: false
        }
      };
      expect(current).toEqual(expected);
    });

    it('deleteContact(uid) return the object expected when is completed', (done) => {
      const uid = 'asda!E3-##@$#@$#-DSFdsfs';

      const mockState = {
        contacts: {
          name: '',
          phone: '',
          contacts: [
            {
              name: 'Steve',
              phone: '3134894611',
              uid
            }
          ],
          loading: false,
          error: ''
        }
      };
      const stubAxiosDelete = sinon.stub(axios, 'delete')
        .callsFake(() => Promise.resolve({ uid }));

      const store = mockStore(mockState);

      return store.dispatch(ACTIONS.deleteContact(uid))
        .then(() => {
          const current = store.getActions();
          const expected = [
            {
              type: CONSTANTS_CONTACT.DELETE_CONTACT.START,
              payload: {
                loading: true,
                error: ''
              }
            },
            {
              type: CONSTANTS_CONTACT.DELETE_CONTACT.COMPLETED,
              payload: {
                loading: false,
                error: '',
                index: 0
              }
            }
          ];
          stubAxiosDelete.restore();
          expect(current).toEqual(expected);
          done();
        });
    });
  });
});
