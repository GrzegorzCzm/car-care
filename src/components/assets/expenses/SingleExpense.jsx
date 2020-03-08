import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardHeader, CardContent, IconButton, Typography, Box, Chip,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MapWidget from '../common/MapWidget';


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
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
  },
  detailsText: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});


const SingleExpense = (props) => {
  const { expense, classes } = props;
  const {
    id, date, item, cost, address, description,
  } = expense;

  return (
    <Card key={id} className={classes.card}>
      <CardHeader
        avatar={(
          <Chip label={`${cost} PLN`} />
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={item}
        subheader={date}
      />
      <CardContent className={classes.details}>
        <MapWidget position={{ lat: 51.109372, lng: 16.958476 }} />
        <Box className={classes.detailsText}>
          <Typography component="p">
            {description}
          </Typography>
          <Typography component="p">
            {address}
          </Typography>
        </Box>


      </CardContent>
    </Card>
  );
};

SingleExpense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    secondaryHeading: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    detailsText: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(SingleExpense);
