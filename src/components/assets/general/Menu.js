
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import Drawer from '@material-ui/core/Drawer';

import {toggleMenu} from '../../../actions/navigation';

class Menu extends Component {

constructor(props) {
  super(props);
  this.state = { 
    isDrawerOpen: props.navigation.isMenuShown 
  };
}


  componentWillReceiveProps(nextProps){
    this.setState({ isDrawerOpen: nextProps.navigation.isMenuShown});
  }

  render() {
    return (
        <Drawer open={this.state.isDrawerOpen} onClose={this.props.toggleMenu}>
            some position
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
  return bindActionCreators({toggleMenu}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);
