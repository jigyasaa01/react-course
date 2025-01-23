import React, { useContext } from 'react'
import UserContext from '../context/USerContext'

function Profile() {
  const {user} = useContext(UserContext)
  if(!user) return <h1>User Not Logged In</h1>
  return (
    <div>
      <h1>Profile: {user.username}</h1>
    </div>
  )
}

export default Profile