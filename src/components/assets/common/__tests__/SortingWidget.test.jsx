import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SortingWidgetWithStyles, { SortingWidget } from '../SortingWidget';


describe('SortingWidget', () => {
  const props = {
    sortParams: {
      field: 'data',
      type: 'data',
      order: 'DESC',
    },
    setSortParams: jest.fn(),
  };


  it('should renders correctly', () => {
    const propsWithClasses = {
      classes: {
        paramLine: 'expenses-paramLine',
      },
      ...props,
    };

    const wrapper = shallow(<SortingWidget {...propsWithClasses} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should contains map style in classes prop', () => {
    const expectedClasses = { paramLine: 'SortingWidget-paramLine-1' };

    const wrapper = shallow(<SortingWidgetWithStyles {...props} />);

    expect(wrapper.prop('classes')).toEqual(expectedClasses);
  });
});
