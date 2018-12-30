import cloneDeep from 'lodash/cloneDeep';
import * as CONSTANS from '../../app/Constans/contacts';
import * as ACTIONS from '../../app/actions/contacts';
import reducerContacts from '../../app/Reducers/Contacts';

describe('Contacts - Reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      name: '',
      phone: '',
      contacts: [],
      loading: false,
      error: ''
    };
  });

  describe('Generals Actions', () => {
    it('return initial state', () => {
      const current = reducerContacts(initialState, {});
      const expected = initialState;
      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.STATE_CONTACTS.CLEAN_FORM} return the object expected`, () => {
      const mockState = cloneDeep(initialState);

      initialState.name = 'Steve';
      initialState.phone = '312784001';

      const current = reducerContacts(initialState, ACTIONS.cleanForm());
      const expected = mockState;

      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.STATE_CONTACTS.SAVE_NAME} return the object expected`, () => {
      const mockState = cloneDeep(initialState);

      const name = 'Andrés';
      mockState.name = name;

      const current = reducerContacts(initialState, ACTIONS.saveName(name));
      const expected = mockState;

      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.STATE_CONTACTS.SAVE_PHONE} return the object expected`, () => {
      const mockState = cloneDeep(initialState);
      
      const phone = '3213726060';
      mockState.phone = phone;

      const current = reducerContacts(initialState, ACTIONS.savePhone(phone));
      const expected = mockState;

      expect(current).toEqual(expected);
    });
  });

  describe('GET CONTACTS', () => {
    const contact = {
      name: 'Andrés',
      phone: '3121321312',
      uid: 'abc!123'
    };

    it(`${CONSTANS.GET_CONTACTS.START} return the object expected`, () => {
      const mockInitialState = {
        ...initialState,
        contacts: [contact],
        loading: false,
        error: ''
      };

      const mockExpectedState = {
        ...initialState,
        contacts: [],
        loading: true,
        error: ''
      };

      const current = reducerContacts(mockInitialState, ACTIONS.getContactsSTART());
      const expected = mockExpectedState;

      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.GET_CONTACTS.COMPLETED} return the object expected`, () => {
      const mockInitialState = {
        ...initialState,
        contacts: [],
        loading: true,
        error: ''
      };

      const mockExpectedState ={
        ...initialState,
        contacts: [contact],
        loading: false,
        error: ''
      };

      const current = reducerContacts(mockInitialState, ACTIONS.getContactsCOMPLETED([contact]));
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.GET_CONTACTS.ERROR} return the object expected`, () => {
      const mockInitialState = {
        ...initialState,
        contacts: [],
        loading: true,
        error: ''
      };

      const mockExpectedState = {
        ...initialState,
        contacts: [],
        loading: false,
        error: 'there\'s an error'
      };

      // 'there's an error' is the supposed error
      const current = reducerContacts(mockInitialState, ACTIONS.getContactsERROR('there\'s an error'));
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });
  });

  describe('CREATE CONTACT', () => {
    it(`${CONSTANS.CREATE_CONTACT.START} return the object expected`, () => {
      const contact = { name: 'Steve', phone: '3213726060', uid: 'abc!123' };

      const mockInitialState = {
        ...initialState,
        contacts: [contact],
        loading: false,
        error: ''
      };

      const mockExpectedState = {
        ...initialState,
        contacts: [contact],
        loading: true,
        error: ''
      };

      const current = reducerContacts(mockInitialState, ACTIONS.createContactSTART());
      const expected = mockExpectedState;

      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.CREATE_CONTACT.COMPLETED} return the object expected`, () => {
      const contact = {
        name: 'Andrés',
        phone: '3213726060',
        uid: 'abc!1'
      };

      const newContact = {
        name: 'yoyo',
        phone: '312312312'
      };

      const mockInitialState = {
        ...initialState,
        contacts: [contact],
        loading: true
      };

      const mockExpectedState = {
        ...initialState,
        contacts: [contact, newContact],
        loading: false
      };

      const current = reducerContacts(mockInitialState, ACTIONS.createContactCOMPLETED(newContact));
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.CREATE_CONTACT.ERROR} return the object expected`, () => {
      const contact = { name: 'Andrés', phone: '2312312312', uid: 'abc!1' };

      const mockInitialState = {
        ...initialState,
        contacts: [contact],
        loading: true,
        error: ''
      };

      const mockExpectedState = {
        ...initialState,
        contacts: [contact],
        loading: false,
        error: 'some error xd'
      };

      const current = reducerContacts(mockInitialState, ACTIONS.createContactERROR('some error xd'));
      const expected = mockExpectedState;

      expect(current).toEqual(expected);
    });
  });

  describe('UPDATE CONTACT', () => {
    const contacts = [
      {
        name: 'John',
        phone: '32138260606',
        uid: 'abc!1'
      },
      {
        name: 'Jane',
        phone: '2312312312312',
        uid: 'abc!2'
      }
    ];

    it(`${CONSTANS.UPDATE_CONTACT.START} return the object expected`, () => {
      const mockInitialState = {
        ...initialState,
        contacts,
        loading: false
      };

      const mockExpectedState = {
        ...initialState,
        contacts,
        loading: true
      };

      const current = reducerContacts(mockInitialState, ACTIONS.updateContactSTART());
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.UPDATE_CONTACT.COMPLETED} return the object expected`, () => {
      const index = 0;
      const contactUpdated = {
        name: 'yole',
        phone: '2312312312',
        uid: 'abc!1'
      };

      const mockInitialState = {
        ...initialState,
        contacts,
        loading: true,
        error: ''
      };

      const mockExpectedState = {
        ...initialState,
        contacts: [
          contactUpdated,
          contacts[1]
        ],
        loading: false
      };

      const current = reducerContacts(mockInitialState, ACTIONS.updateContactCOMPLETED(contactUpdated, index));
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.UPDATE_CONTACT.ERROR} return the object expected`, () => {
      const error = 'there\'s an error';

      const mockInitialState = {
        ...initialState,
        contacts,
        loading: true,
        error: ''
      };

      const mockExpectedState = {
        ...initialState,
        contacts,
        loading: false,
        error
      };

      const current = reducerContacts(mockInitialState, ACTIONS.updateContactERROR(error));
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });
  });

  describe('DELETE CONTACT', () => {
    const contacts = [
      {
        name: 'John',
        phone: '32138260606',
        uid: 'abc!1'
      },
      {
        name: 'Jane',
        phone: '2312312312312',
        uid: 'abc!2'
      }
    ];

    it(`${CONSTANS.DELETE_CONTACT.START} return the object expected`, () => {
      const mockInitialState = {
        ...initialState,
        contacts,
        loading: false,
        error: 'error'
      };

      const mockExpectedState = {
        ...initialState,
        contacts,
        loading: true,
        error: ''
      };

      const current = reducerContacts(mockInitialState, ACTIONS.deleteContactSTART());
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.DELETE_CONTACT.COMPLETED} return the object expected`, () => {
      const index = 0;

      const mockInitialState = {
        ...initialState,
        contacts,
        loading: true
      };

      const mockExpectedState = {
        ...initialState,
        contacts: [
          contacts[1]
        ],
        loading: false
      };

      const current = reducerContacts(mockInitialState, ACTIONS.deleteContactCOMPLETED(index));
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });

    it(`${CONSTANS.DELETE_CONTACT.ERROR} return the object expected`, () => {
      const error = 'there\'s an error';

      const mockInitialState = {
        ...initialState,
        contacts,
        loading: true,
        error: ''
      };

      const mockExpectedState = {
        ...initialState,
        contacts,
        loading: false,
        error
      };

      const current = reducerContacts(mockInitialState, ACTIONS.deleteContactERROR(error));
      const expected = mockExpectedState;
      expect(current).toEqual(expected);
    });
  });
});
