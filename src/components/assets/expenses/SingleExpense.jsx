import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ExpandMore from 'mdi-material-ui/MenuDownOutline';

import SingleExpenseDetails from './SingleExpenseDetails';


const styles = (theme) => ({
  card: {
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
    alignSelf: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '66.66%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.secondary,
  },
});


const SingleExpense = (props) => {
  const { expense, classes } = props;
  const { id, date, item } = expense;

  return (
    <Box key={id} className={classes.card}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography className={classes.heading}>{item}</Typography>
          <Typography className={classes.secondaryHeading}>{date}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <SingleExpenseDetails expense={expense} />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  );
};

SingleExpense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    secondaryHeading: PropTypes.string.isRequired,
  }).isRequired,

};

export default withStyles(styles)(SingleExpense);
