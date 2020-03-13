import React from 'react';
import { shallow } from 'enzyme';

import SimpleMarker from '../SimpleMarker';


describe('SimpleMarker', () => {
  it('return svg object', () => {
    const wrapper = shallow(<SimpleMarker />);
    expect(wrapper.find('svg').length).toBe(1);
  });
});
