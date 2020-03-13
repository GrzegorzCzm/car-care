import React from 'react';
import { shallow } from 'enzyme';
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
});
