import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMore from 'mdi-material-ui/MenuDownOutline';
import SingleExpense from './SingleExpense';

const expenses = [
  {
    id: 0, date: '2018-08-19', item: 'tires', cost: 35, description: 'some details here', address: 'dummy address',
  },
  {
    id: 1, date: '2018-08-13', item: 'wheels', cost: 85, description: 'some more details here', address: 'dummy second address',
  },
  {
    id: 2, date: '2018-07-10', item: 'wheels', cost: 85, description: 'some more details here', address: 'dummy third address',
  },
];

const styles = (theme) => ({
  root: {
    width: '100%',
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
