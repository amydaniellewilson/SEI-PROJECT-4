import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import { Link } from 'react-router-dom'

class EventShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null }
    this.handleAttend = this.handleAttend.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res.data }))
      .catch(err => console.log(err))
  }

  handleAttend(e) {
    e.preventDefault()
    axios.post(`/api/events/${this.props.match.params.id}/attending`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(console.log('attending list', this.state.event.attending))
      .then(this.getEvents())
      .catch(err => console.log(err))
  }

  // attendees(){
  //   axios.get(`/api/events/${this.props.match.params.id}/attending`)
  //     .then(console.log(this.state.event.attending))
  // }

  handleDelete() {
    axios.delete(`/api/events/${this.props.match.params.id}`, {
      headers: { Authorization: `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/events'))
      .catch(err => console.log(err.response))
  }

  isOwner() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.event.id
  }


  render() {
    const { event } = this.state
    if (!event) return null
    console.log(this.state.event.attending)
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
              <br />
              <Link className="button" to={`/events/edit/${event.id}`}
              >
              Edit
              </Link>

              <button onClick={this.handleDelete} className="button">Cancel</button>

              <hr />
              <h4 className="event-title title is-4">Attending</h4>
              {this.state.event.attending.length > 0 ?
                this.state.event.attending.map((attendee, i)  => ( <h3 key={i}> {attendee.username} </h3> ))
                :
                <p>No one attending yet.</p>
              }
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
              <h4 className="title is-5">Created by {event.creator.username}</h4>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default EventShow
