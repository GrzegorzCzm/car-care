import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';

import { sortingOrder } from '../../../utils/sortUtils';


const styles = () => ({
  paramLine: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export const SortingWidget = (props) => {
  const { classes, sortParams, setSortParams } = props;
  const { field, type, order } = sortParams;
  const isAscOrder = order === sortingOrder.ASC;

  return (
    <Box className={classes.paramLine}>
      <Typography>Sort</Typography>
      <IconButton aria-label="DESC" size="small" onClick={() => setSortParams({ ...sortParams, order: sortingOrder.DESC })}>
        <KeyboardArrowDownIcon fontSize="large" color={!isAscOrder ? 'action' : 'disabled'} />
      </IconButton>
      <IconButton aria-label="deASClete" size="small" onClick={() => setSortParams({ ...sortParams, order: sortingOrder.ASC })}>
        <KeyboardArrowUpIcon fontSize="large" color={isAscOrder ? 'action' : 'disabled'} />
      </IconButton>
    </Box>
  );
};

SortingWidget.propTypes = {
  classes: PropTypes.shape({
    paramLine: PropTypes.string.isRequired,
  }).isRequired,
  sortParams: PropTypes.shape({
    field: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
  setSortParams: PropTypes.func.isRequired,
};

export default withStyles(styles)(SortingWidget);
