import React, { useState, useEffect } from 'react'
import { geoAlbersUsa, geoPath } from 'd3-geo';
import DetailsComponent from './DetailsComponent';
import usaGeoJSON from '../json/uSA20m.json';

function UsaMAP() {
  const [stateName, setStateName] = useState('')

  useEffect(() => {
  }, []);
  const projection = geoAlbersUsa();

  const pathGenerator = geoPath().projection(projection);

  const states = usaGeoJSON.features.map(feature => {
    return (
      <path
        key={feature.properties.GEO_ID}
        d={pathGenerator(feature)}
        stroke='black'
        fill='white'
        strokeWidth='3'
        className="state state-tooltip"
        title={feature.properties.NAME}
        onClick={() => setStateName(feature.properties.NAME)}
      />
    );
  });
  return (
    <div>
      <div style={{ textAlign: '', display: 'flex' }}>
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
        <div style={{ marginTop: '20px', marginLeft: '5%' }}>
          <h1>
            {stateName && <div className="">{stateName}</div>}
            <DetailsComponent stateName={stateName} />
          </h1>
        </div>
      </div >
    </div>
  )
}

export default UsaMAP