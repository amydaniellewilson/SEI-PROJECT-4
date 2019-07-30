import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ name, occupation, image, location, id}) => {
  return (
    <Link to={`/users/${id}`}>
      <div className="card-wrapper">
        <div className="card-wrap profile">
          <div className="card-outside column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <div className="card-image profile-img--two">
              <img src={image} alt={name} />
            </div>
            <div className="details user">
              <h2 className="profile-name">{name}
                <br/>
                <span className="job-title">{occupation} from {location}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default UserCard
