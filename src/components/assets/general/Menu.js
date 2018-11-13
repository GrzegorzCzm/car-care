
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { toggleMenu } from '../../../actions/navigation';

const menuContent = [
  { label: "Home", path: "/" },
  { label: "Expenses", path: "/expenses" },
  { label: "Refueling", path: "/refueling" },
  { label: "Settings", path: "/settings" }
];


class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: props.navigation.isMenuShown
    };
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ isDrawerOpen: nextProps.navigation.isMenuShown });
  }

  render() {
    return (
      <Drawer open={this.state.isDrawerOpen} onClose={this.props.toggleMenu}>
        <MenuList>
          {menuContent.map(menuItem =>
            <Link key={menuItem.label} to={menuItem.path} style={{ textDecoration: 'none' }}>
              <MenuItem onClick={this.props.toggleMenu}>
                {menuItem.label}
              </MenuItem>
            </Link >
          )}
        </MenuList>
      </Drawer>
    );
  }
}


function mapStateToProps(state) {
  return {
    navigation: state.navigation
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleMenu }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
