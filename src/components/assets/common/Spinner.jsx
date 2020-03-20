import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

const spinnerSize = {
  large: 80,
  medium: 40,
  small: 20,
};
const Spinner = ({ color, size }) => (
  <CircularProgress color={color} size={spinnerSize[size]} />
);

Spinner.defaultProps = {
  color: 'primary',
  size: 'medium',
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Spinner;
