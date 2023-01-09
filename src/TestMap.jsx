import React from 'react';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import usaGeoJSON from './uSA20m.json'; // import the GeoJSON data for the United States

class TestMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: 'USA' // store the name of the state in the component's state
    };
  }

  render() {
    // create the map projection
    const projection = geoAlbersUsa();
    // create the path generator
    const pathGenerator = geoPath().projection(projection);

    // render the states on the map
    const states = usaGeoJSON.features.map(feature => {
      return (
        <path
          key={feature.properties.GEO_ID}
          d={pathGenerator(feature)}
          stroke='black'
          fill='white'
          stroke-width='3'
          className="state state-tooltip"
          title={feature.properties.NAME}
          onClick={() =>
            // (console.log('State Clicked =>', feature.properties.NAME) 
            this.setState({ stateName: feature.properties.NAME })
            // window.open(`https://en.wikipedia.org/wiki/${feature.properties.NAME}`)
          }
        />
      );
    });

    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          {/* <div style={{ border: '1px solid black', backgroundColor: 'white' }}> */}
          <svg
            width={800}
            height={500}
            style={{ backgroundColor: 'white' }}
            viewBox="0 0 960 500" >
            {states}
          </svg>
        </div>
        <h1>
          {this.state.stateName && <div className="state-name">{this.state.stateName}</div>}
        </h1>
      </div >
    );
  }
}

export default TestMap;
