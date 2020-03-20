import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  itemWrapper: {
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
  itemHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },
  itemContent: {
    marginLeft: 10,
  },
});

export const SingleExpenseCompact = (props) => {
  const { expense, classes } = props;
  const {
    id, date, item, cost, description,
  } = expense;

  return (
    <Box key={id} className={classes.itemWrapper}>
      <ListItem key={id}>
        <ListItemAvatar>
          <Chip label={`${cost} PLN`} />
        </ListItemAvatar>
        <ListItemText
          className={classes.itemContent}
          primary={(
            <Box className={classes.itemHeaderWrapper}>
              <Typography className={classes.heading}>{item}</Typography>
              <Typography className={classes.secondaryHeading}>{date}</Typography>
            </Box>
)}
          secondary={description}
        />
      </ListItem>
      <Divider component="li" />
    </Box>
  );
};

SingleExpenseCompact.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    itemWrapper: PropTypes.string.isRequired,
    itemHeaderWrapper: PropTypes.string.isRequired,
    itemContent: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    secondaryHeading: PropTypes.string.isRequired,

  }).isRequired,
};

export default withStyles(styles)(SingleExpenseCompact);
