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
      paramLine: 'expenses-paramLine',
    },
  };

  it('should renders correctly with compact list', () => {
    const wrapper = shallow(<Expenses {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should renders correctly with full list', () => {
    const wrapper = shallow(<Expenses {...props} />);
    const switchButtonControlProps = wrapper.find('.switch-button').props('control').control.props;
    switchButtonControlProps.onChange();

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should contains classes prop and store with expenses list', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      expenses: expensesData,
    });

    const expectedClasses = { listRoot: 'Expenses-listRoot-1', paramLine: 'Expenses-paramLine-2' };

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedExpenses />
      </Provider>,
    );

    expect(wrapper.find('Expenses').prop('classes')).toEqual(expectedClasses);
    expect(wrapper.find('Provider').prop('store').getState().expenses.length).toBe(3);
  });

  it('should change isFullView when setFullView clicked', () => {
    const wrapper = shallow(<Expenses {...props} />);
    const switchButtonControlProps = wrapper.find('.switch-button').props('control').control.props;

    expect(switchButtonControlProps.checked).toBe(false);
    switchButtonControlProps.onChange();
    expect(switchButtonControlProps.checked).toBe(false);
  });
});
