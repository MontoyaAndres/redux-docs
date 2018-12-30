import map from 'lodash/map';

// store
import store from '../../app/store';

// some actions
import { saveName, savePhone } from '../../app/actions/contacts';

describe('STORE', () => {
  it('Verify if the state has the sections expected', () => {
    const sections = map(store.getState(), (value, key) => key);

    const current = sections;
    const expected = ['contacts'];
    expect(current).toEqual(expected);
  });

  it('Verify if the dispatch update the state', () => {
    store.dispatch(saveName('Andrés'));
    store.dispatch(savePhone('3213726060'));

    const current = store.getState().contacts;
    const expected = {
      name: 'Andrés',
      phone: '3213726060',
      contacts: [],
      loading: false,
      error: ''
    };
    expect(current).toEqual(expected);
  });
});
