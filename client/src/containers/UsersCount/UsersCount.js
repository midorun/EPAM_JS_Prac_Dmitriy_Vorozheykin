import React, { useState, useEffect } from 'react'

const UsersCount = ({ socket }) => {

  const [usersCount, setUsersCount] = useState(0)

  useEffect(() => {
    socket.on('user', (usersCount) => setUsersCount(usersCount))
    return () => socket.off('user')
  }, [socket])

  return (
    <span className="mode-selected__users-count">Активных пользователей: {usersCount}</span>
  )
}

export default UsersCount
