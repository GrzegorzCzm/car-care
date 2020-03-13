import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Settings from '../Settings';


describe('Settings', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Settings />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
