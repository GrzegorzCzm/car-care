import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import expensesData from '../../../../helpers/data/expensesData';

import SingleExpenseWithStyles from '../SingleExpense';


describe('SingleExpense', () => {
  const props = {
    expense: expensesData[0],
  };

  it('should renders correctly', () => {
    const wrapper = shallow(<SingleExpenseWithStyles {...props} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should show Suspense with Spinner before map component is loaded', () => {
    const wrapper = mount(<SingleExpenseWithStyles {...props} />);

    expect(wrapper.find('Suspense').length).toBe(1);
    expect(wrapper.find('Spinner').length).toBe(1);
  });
});
