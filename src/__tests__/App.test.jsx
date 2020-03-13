import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  it('has Menu, TopBar and four Routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Connect(Menu)').length).toBe(1);
    expect(wrapper.find('Connect(AppTopBar)').length).toBe(1);
    expect(wrapper.find('Route').length).toBe(4);
  });
});
