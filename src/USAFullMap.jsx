import React, { Component } from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import bezirke from './uSA20m.json';
import { json } from 'd3-fetch';
//get data from data file(s)

const data = [];


for (let key of Object.keys(bezirke.features)) {
  const bezirk = bezirke.features[key];
  data.push(bezirk.geometry.coordinates[0]);
  // console.log('State =>', bezirk.properties.NAME)
}

// console.log('data', data)

function getColor(d) {
  return d > 300000 ? '#800026' :
    d > 270000 ? '#BD0026' :
      d > 235000 ? '#E31A1C' :
        d > 200000 ? '#FC4E2A' :
          d > 170000 ? '#FD8D3C' :
            d > 135000 ? '#FEB24C' :
              d > 100000 ? '#FED976' :
                '#FFEDA0';
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

const mapCenter = [36.084621, -96.921387];
const zoomLevel = 4;

class USAFullMap extends Component {
  constructor(props) {
    super(props);
    this.state = { currentZoomLevel: zoomLevel };

  }

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on('zoomend', () => {
      const updatedZoomLevel = leafletMap.getZoom();
      this.handleZoomLevelChange(updatedZoomLevel);
    });

  }

  handleZoomLevelChange(newZoomLevel) {
    this.setState({ currentZoomLevel: newZoomLevel });
  }

  render() {

    return (
      <div>
        {console.log(json)}
        <Map
          ref={m => { this.leafletMap = m; }}
          center={mapCenter}
          zoom={zoomLevel}
        >
          <GeoJSON
            data={bezirke}
            style={style}
            onClick={() => {
              console.log('Clicked', bezirke.features[0].properties.NAME)
            }}
          />
        </Map>
      </div>
    );
  }
}

export default USAFullMap;
