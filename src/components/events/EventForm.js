import React from 'react'

const EventForm = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className="input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Date</label>
      <div className="control">
        <input
          className="input"
          name="date"
          placeholder="Date"
          onChange={handleChange}
          value={data.date || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Time</label>
      <div className="control">
        <input
          className="input"
          name="time"
          placeholder="Time"
          onChange={handleChange}
          value={data.time || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Address</label>
      <div className="control">
        <input
          className="input"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={data.address || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Postcode</label>
      <div className="control">
        <input
          className="input"
          name="postcode"
          placeholder="Postcode"
          onChange={handleChange}
          value={data.postcode || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Industry</label>
      <div className="control">
        <input
          className="input"
          name="industry"
          placeholder="Industry"
          onChange={handleChange}
          value={data.industry || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Image</label>
      <div className="control">
        <input
          className="input"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={data.image || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Details</label>
      <div className="control">
        <textarea
          className="textarea"
          name="details"
          placeholder="Details"
          onChange={handleChange}
          value={data.details || ''}
        />
      </div>
    </div>
    <button type="submit" className="button is-info">Submit</button>
  </form>
)

export default EventForm
