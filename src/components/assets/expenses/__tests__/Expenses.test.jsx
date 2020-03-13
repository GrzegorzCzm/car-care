import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

import expensesData from '../../../../helpers/data/expensesData';
import ConnectedExpenses, { Expenses } from '../Expenses';


describe('Expenses', () => {
  const props = {
    expenses: expensesData,
    classes: {
      listRoot: 'expenses-list',
    },
  };

  it('should renders correctly', () => {
    const wrapper = shallow(<Expenses {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should contains classes prop and store with expenses list', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      expenses: expensesData,
    });

    const expectedClasses = { listRoot: 'Expenses-listRoot-1' };

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedExpenses />
      </Provider>,
    );

    expect(wrapper.find('Expenses').prop('classes')).toEqual(expectedClasses);
    expect(wrapper.find('Provider').prop('store').getState().expenses.length).toBe(3);
  });
});
