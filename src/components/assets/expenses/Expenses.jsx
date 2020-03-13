import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import SingleExpenseWithStyles from './SingleExpense';

const styles = () => ({
  listRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export const Expenses = (props) => {
  const { classes, expenses } = props;
  return (
    <Box className={classes.listRoot}>
      { expenses.map((expense) => (
        <SingleExpenseWithStyles
          key={expense.id}
          expense={expense}
        />
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

Expenses.propTypes = {
  classes: PropTypes.shape({
    listRoot: PropTypes.string.isRequired,
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
