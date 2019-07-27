import React from 'react'
import axios from 'axios'

class EventShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null, creator: null }
    this.handleAttend = this.handleAttend.bind(this)
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data, creator: res.data.creator }))
      .catch(err => console.log(err))
  }

  handleAttend(e) {
    e.preventDefault()
    axios.post(`/api/events/${this.props.match.params.id}/attending`)
      .then(() => this.props.history.push(`/events/${this.props.match.params.id}`))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.event) return null
    const { event } = this.state
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{event.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={event.image} alt={event.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Details</h4>
              <p>{event.details}</p>
              <hr />
              <h4 className="title is-4">When</h4>
              <p>{event.date} {event.time}</p>
              <hr />
              <h4 className="title is-4">Where</h4>
              <p>{event.address} {event.postcode}</p>
              <hr />
              <button
                className="button"
                onClick={this.handleAttend}
              >Attend
              </button>
              <hr />
              <h4 className="title is-5">Created by {this.state.creator.username}</h4>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default EventShow
