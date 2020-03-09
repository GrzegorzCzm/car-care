import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Refueling from '../Refueling';


describe('Refueling', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Refueling />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
