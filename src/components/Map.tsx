import Pins from './Pins'
import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import { useStoreState } from '../hooks'

function Map() {
  const restaurants = useStoreState(state => state.restaurant.items)
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: 500,
    latitude: 59.334591,
    longitude: 18.063240,
    zoom: 10
  })

  return (
    <ReactMapGL
      {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      onViewportChange={setViewport}
    >
      <Pins restaurants={restaurants} />
    </ReactMapGL>
  )
}

export default Map
