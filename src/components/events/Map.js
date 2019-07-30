import React from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from 'mapbox-gl-geocoder'

mapboxgl.accessToken = process.env.MAPBOX

class Map extends React.Component {
  constructor() {
    super()

    this.markers = []
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-0.1, 51.5074],
      zoom: 11
    })

    this.markers.forEach(marker => marker.remove())
    this.markers = this.props.markers.map(point => {
      return new mapboxgl.Marker()
        .setLngLat({ lat: point.lat, lng: point.lng })
        .addTo(this.map)

        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            `<main>
          <h1 class="title is-4">${point.name}</h1>
          <h2 class="subtitle is-6">${point.date} ${point.time}</h2>
          <h2 class="subtitle is-5">${point.address}
          ${point.postcode}</h2>
           <button class="button">
           <a href="/events/${point.id}" class="subtitle is-6 is-link popuptext" target="_blank" rel="noopener noreferrer">Details
           </a>
           </button>
        </main>`
          ))
    })
    // this.map.addControl(new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   country: 'gb',
    //   city: 'london'
    // }), 'top-left')
    // this.map.addControl(new mapboxgl.NavigationControl(), 'top-left')
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
