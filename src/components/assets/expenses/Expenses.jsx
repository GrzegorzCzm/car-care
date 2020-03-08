import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import SingleExpense from './SingleExpense';
import expenses from '../../../tests/data/testData';


const styles = () => ({
  listRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const Expenses = (props) => {
  const { classes } = props;
  return (
    <Box className={classes.listRoot}>
      { expenses.map((expense) => (
        <SingleExpense
          key={expense.id}
          expense={expense}
        />
      ))}
    </Box>
  );
};


Expenses.propTypes = {
  classes: PropTypes.shape({
    listRoot: PropTypes.string.isRequired,
  }).isRequired,
};
export default withStyles(styles)(Expenses);
