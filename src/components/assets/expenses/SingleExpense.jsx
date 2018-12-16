import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMore from 'mdi-material-ui/MenuDownOutline';

import { withStyles } from '@material-ui/core/styles';
import SingleExpenseDetails from './SingleExpenseDetails';

const styles = (theme) => ({
  card: {
    margin: 10,
  },
  map: {
    height: 40,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '66.66%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});


const SingleExpense = (props) => {
  const { expense } = props;
  const { id, date, item } = expense;

  return (
    <ExpansionPanel key={id}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Typography className={styles.heading}>{item}</Typography>
        <Typography className={styles.secondaryHeading}>{date}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <SingleExpenseDetails expense={expense} />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
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
};

export default withStyles(styles)(SingleExpense);
