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
  item: {
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
});

export const SingleExpenseCompact = (props) => {
  const { expense, classes } = props;
  const {
    id, date, item, cost, address, description,
  } = expense;

  return (
    <Box key={id} className={classes.item}>
      <ListItem alignItems="flex-start" key={id}>
        <ListItemAvatar>
          <Chip label={`${cost} PLN`} />
        </ListItemAvatar>
        <ListItemText
          primary={item}
          secondary={(
            <>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {date}
              </Typography>
              { `${address} || ${description}`}
            </>
              )}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
};

SingleExpenseCompact.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    item: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(SingleExpenseCompact);
