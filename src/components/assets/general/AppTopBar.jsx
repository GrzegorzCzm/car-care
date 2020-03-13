import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from 'mdi-material-ui/Menu';

import { toggleMenu } from '../../../actions/navigation';


export const AppTopBar = (props) => {
  const { toggleMenuAction } = props;
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Menu onClick={toggleMenuAction} className="Menu" />
        <Typography variant="subtitle1" color="inherit">
          Car Care
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenuAction: () => { dispatch(toggleMenu()); },
});

AppTopBar.propTypes = {
  toggleMenuAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AppTopBar);
