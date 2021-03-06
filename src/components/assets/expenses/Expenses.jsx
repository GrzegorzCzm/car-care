import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';

import SingleExpenseWithStyles from './SingleExpense';
import SingleExpenseCompactWithStyles from './SingleExpenseCompact';
import { sortingOrder, getSortedItems } from '../../../utils/sortUtils';
import SortingWidgetWithStyles from '../common/SortingWidget';

const styles = (theme) => ({
  listRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paramLine: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 600,
    },
    [theme.breakpoints.up('md')]: {
      width: 600,
    },
  },
});

export const Expenses = (props) => {
  const { classes, expenses } = props;

  const [isFullView, setFullView] = useState(false);
  const [sortParams, setSortParams] = useState({ field: 'date', type: 'date', order: sortingOrder.DESC });

  return (
    <Box className={classes.listRoot}>
      <Box className={classes.paramLine}>
        <SortingWidgetWithStyles sortParams={sortParams} setSortParams={setSortParams} />
        <Box>
          <FormControlLabel
            className="switch-button"
            control={(
              <Switch
                checked={isFullView}
                onChange={() => setFullView(!isFullView)}
                value="Switch"
                color="primary"
              />
    )}
            label="Full view"
          />
        </Box>
      </Box>
      <Box className={classes.listRoot}>
        { isFullView
          ? getSortedItems({ items: expenses, sortParams }).map((expense) => (
            <SingleExpenseWithStyles
              key={expense.id}
              expense={expense}
            />

          ))
          : (
            <List className={classes.listRoot}>
              {getSortedItems({ items: expenses, sortParams }).map((expense) => (
                <SingleExpenseCompactWithStyles expense={expense} key={expense.id} />
              ))}
            </List>
          )}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

Expenses.propTypes = {
  classes: PropTypes.shape({
    listRoot: PropTypes.string.isRequired,
    paramLine: PropTypes.string.isRequired,
  }).isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(Expenses));
