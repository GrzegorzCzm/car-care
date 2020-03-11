import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MapWidgetWithStyles, { MapWidget } from '../MapWidget';


describe('MapWidget', () => {
  const props = {
    position: {
      lat: 51.109372,
      lng: 16.958476,
    },
  };


  it('should renders correctly', () => {
    const propsWithClasses = {
      classes: {
        map: 'map-class',
      },
      ...props,
    };

    const wrapper = shallow(<MapWidget {...propsWithClasses} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should contains map style in classes prop', () => {
    const expectedClasses = { map: 'MapWidget-map-1' };

    const wrapper = shallow(<MapWidgetWithStyles {...props} />);

    expect(wrapper.prop('classes')).toEqual(expectedClasses);
  });
});
