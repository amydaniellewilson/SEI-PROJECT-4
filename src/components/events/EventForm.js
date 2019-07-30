import React from 'react'

const EventForm = ({ data, handleChange, handleSubmit }) => (
  <form className="event-form-wrap" onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      className="text-event"
      name="name"
      placeholder="Name"
      onChange={handleChange}
      value={data.name || ''}
    />
    <label className="label">Date</label>
    <input
      className="text-event"
      name="date"
      placeholder="Date"
      onChange={handleChange}
      value={data.date || ''}
    />
    <label className="label">Time</label>
    <input
      className="text-event"
      name="time"
      placeholder="Time"
      onChange={handleChange}
      value={data.time || ''}
    />
    <label className="label">Address</label>
    <input
      className="text-event"
      name="address"
      placeholder="Address"
      onChange={handleChange}
      value={data.address || ''}
    />
    <label className="label">Postcode</label>
    <input
      className="text-event"
      name="postcode"
      placeholder="Postcode"
      onChange={handleChange}
      value={data.postcode || ''}
    />
    <label className="label">Industry</label>
    <input
      className="text-event"
      name="industry"
      placeholder="Industry"
      onChange={handleChange}
      value={data.industry || ''}
    />
    <label className="label">Image</label>
    <input
      className="text-event"
      name="image"
      placeholder="Image"
      onChange={handleChange}
      value={data.image || ''}
    />
    <label className="label">Details</label>
    <textarea
      className="textarea"
      name="details"
      placeholder="Details"
      onChange={handleChange}
      value={data.details || ''}
    />
    <button type="submit" className="event-button">Submit</button>
  </form>
)

export default EventForm
