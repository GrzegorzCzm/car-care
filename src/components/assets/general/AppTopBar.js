import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from 'mdi-material-ui/Menu'



class AppTopBar extends Component {
  render() {
    return (
        <AppBar position="static" color="default">
          <Toolbar>
            <Menu />
            <Typography variant="title" color="inherit">
              Car Care
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

export default AppTopBar;
