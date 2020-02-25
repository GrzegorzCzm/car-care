import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMore from 'mdi-material-ui/MenuDownOutline';
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
    {expenses.map((expense) => {
      const { id } = expense;
      return (
        <ExpansionPanel key={id}>
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <Typography className={styles.heading}>General settings</Typography>
            <Typography className={styles.secondaryHeading}>I am an expansion pane</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <SingleExpense expense={expense} />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    })}
  </div>
);


export default withStyles(styles)(Expenses);
