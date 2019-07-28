import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ name, occupation, image, location, id}) => {
  return (
    <div className="card-wrapper">
      <div className="card-wrap profile">
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <Link to={`/users/${id}`}>
        <div className="card-image profile-img--two">
          <img src={image} alt={name} />
        </div>
        <div className="details user">
          <h2>{name}
            <br/>
            <span className="job-title">{occupation} {location}</span>
          </h2>
        </div>
      </Link>
    </div>
    </div>
    </div>
  )
}

export default UserCard
