import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';


const styles = {
  card: {
    margin: 10,
  },
  map: {
    height: 40,
  },
};


const SingleExpense = props => {
  let { id, date, item, cost, description, address, classes } = props
  return (
    <Card className={classes.card}>
      <CardMedia
      className={classes.map}
        component="img"
        alt="MAP"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          {date}
        </Button>
        <Button size="small" color="primary">
          Cost: {cost}
        </Button>

      </CardActions>
    </Card>
  );
}


SingleExpense.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleExpense);
