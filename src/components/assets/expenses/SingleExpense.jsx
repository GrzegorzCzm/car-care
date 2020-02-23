import React from 'react';
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

const SingleExpense = (props) => {
  const {
    expense: {
      id, date, item, cost, description,
    },
  } = props;

  return (
    <Card className={styles.card} key={id}>
      <CardMedia
        className={styles.map}
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
        <Typography component="p">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          {date}
        </Button>
        <Button size="small" color="primary">
          Cost:
          {cost}
        </Button>
      </CardActions>
    </Card>
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
