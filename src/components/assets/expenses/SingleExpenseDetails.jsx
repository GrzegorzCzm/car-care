import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
  card: {
    margin: 10,
  },
  map: {
    height: 40,
  },

});


const SingleExpenseDetails = (props) => {
  const { expense, classes } = props;
  const {
    id, date, item, cost, description, address,
  } = expense;

  return (
    <Typography>
      <Card className={classes.card} key={id}>
        <CardMedia
          address={address}
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
            Cost:
            {' '}
            {cost}
          </Button>

        </CardActions>
      </Card>
    </Typography>
  );
};


SingleExpenseDetails.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.shape({
      margin: PropTypes.number.isRequired,
    }),
    map: PropTypes.shape({
      height: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(SingleExpenseDetails);
