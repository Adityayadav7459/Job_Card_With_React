import React from 'react'

const User = ({ name = 'Unknown' }) => {
  return (
    <div className="user">
      <h3>{name}</h3>
    </div>
  )
}

export default User
