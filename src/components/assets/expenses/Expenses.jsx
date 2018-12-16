import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import SingleExpense from './SingleExpense';
import expenses from '../../../tests/data/testData';


const styles = (theme) => ({
  root: {
    width: '70%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

const Expenses = () => (
  <div className="Root">
    { expenses.map((expense) => (
      <SingleExpense
        key={expense.id}
        expense={expense}
      />
    ))}
  </div>
);


export default withStyles(styles)(Expenses);
