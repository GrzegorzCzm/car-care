import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import toJson from 'enzyme-to-json';

import ConnectedAppTopBar, { AppTopBar } from '../AppTopBar';


describe('AppTopBar', () => {
  const props = {
    toggleMenuAction: jest.fn(),
  };

  it('should renders correctly', () => {
    const wrapper = shallow(<AppTopBar {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call toggle menu function when click on menu', () => {
    const wrapper = shallow(<AppTopBar {...props} />);
    wrapper.find('.Menu').prop('onClick')();


    expect(props.toggleMenuAction).toHaveBeenCalled();
  });

  it('should dispatch action', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
      navigation: {
        isMenuShown: false,
      },
    });

    const expectedActions = [{ type: 'TOGGLE_MENU' }];

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedAppTopBar />
      </Provider>,
    );

    wrapper.find('AppTopBar').prop('toggleMenuAction')();

    expect(store.getActions()).toEqual(expectedActions);
  });
});
