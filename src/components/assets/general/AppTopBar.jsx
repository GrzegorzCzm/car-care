import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from 'mdi-material-ui/Menu';

import { toggleMenu } from '../../../actions/navigation';


const AppTopBar = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Menu onClick={toggleMenu} />
      <Typography variant="title" color="inherit">
        Car Care
      </Typography>
    </Toolbar>
  </AppBar>
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleMenu }, dispatch);
}

export default connect(null, mapDispatchToProps)(AppTopBar);
