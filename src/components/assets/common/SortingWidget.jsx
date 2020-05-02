import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { sortingOrder } from '../../../utils/sortUtils';


const styles = () => ({
  paramLine: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export const SortingWidget = (props) => {
  const { classes, sortParams, setSortParams } = props;
  const { field, order } = sortParams;
  const isAscOrder = order === sortingOrder.ASC;

  const fieldsToTypeMapping = [
    { name: 'date', type: 'date' },
    { name: 'item', type: 'text' },
    { name: 'cost', type: 'number' },
    { name: 'address', type: 'text' },
  ];

  const changeSortingField = (event) => {
    const name = event.target.value;
    setSortParams({
      ...sortParams,
      field: name,
      type: fieldsToTypeMapping.find((menuItem) => menuItem.name === name).type,
    });
  };

  return (
    <Box className={classes.paramLine}>
      <IconButton aria-label="DESC" size="small" onClick={() => setSortParams({ ...sortParams, order: sortingOrder.DESC })}>
        <KeyboardArrowDownIcon fontSize="large" color={!isAscOrder ? 'action' : 'disabled'} />
      </IconButton>
      <IconButton aria-label="ASC" size="small" onClick={() => setSortParams({ ...sortParams, order: sortingOrder.ASC })}>
        <KeyboardArrowUpIcon fontSize="large" color={isAscOrder ? 'action' : 'disabled'} />
      </IconButton>
      <FormControl>
        <Select
          labelId="sortingFieldSelect"
          id="sortingFieldSelect"
          value={field}
          onChange={changeSortingField}
        >
          {
          fieldsToTypeMapping.map((menuItem) => (
            <MenuItem key={menuItem.name} value={menuItem.name}>
              {menuItem.name}
            </MenuItem>
          ))
          }
        </Select>
      </FormControl>
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
