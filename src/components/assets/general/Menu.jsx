import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { toggleMenu } from '../../../actions/navigation';

const menuContent = [
  { label: 'Home', path: '/' },
  { label: 'Expenses', path: '/expenses' },
  { label: 'Refueling', path: '/refueling' },
  { label: 'Settings', path: '/settings' },
];

const Menu = (props) => {
  const { navigation, toggleMenuAction } = props;
  return (
    <Drawer open={navigation.isMenuShown} onClose={toggleMenuAction}>
      <MenuList>
        {menuContent.map((menuItem) => (
          <Link
            key={menuItem.label}
            to={menuItem.path}
            style={{ textDecoration: 'none' }}
          >
            <MenuItem onClick={toggleMenuAction}>
              {menuItem.label}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.navigation,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenuAction: () => { dispatch(toggleMenu()); },
});

Menu.propTypes = {
  navigation: PropTypes.shape({
    isMenuShown: PropTypes.bool.isRequired,
  }).isRequired,
  toggleMenuAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
