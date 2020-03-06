import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  map: {
    [theme.breakpoints.down('sm')]: {
      width: 300,
      height: 150,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 300,
      height: 300,

    },
    [theme.breakpoints.up('md')]: {
      width: 300,
      height: 300,
    },
  },
});


const MapWidget = (props) => {
  const { position, classes } = props;
  const zoom = 16;
  return (
    <Map center={position} zoom={zoom} className={classes.map}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};

MapWidget.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    map: PropTypes.string.isRequired,
  }).isRequired,
};


export default withStyles(styles)(MapWidget);
