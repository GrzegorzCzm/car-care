
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';


class Menu extends Component {

  

constructor(props) {
  super(props);
  this.state = { 
    isDrawerOpen: true 
  };
  this.toggleDrawer = this.toggleDrawer.bind(this);
}


  toggleDrawer(open){
    this.setState({
      isDrawerOpen: open,
    });
  }

  render() {
    return (
        <Drawer open={this.state.isDrawerOpen} onClose={() => this.toggleDrawer(false)}>
            some position
        </Drawer>
    );
  }
}

export default Menu;
