import React from 'react'

export default function Profile() {
    const auth = localStorage.getItem('user')
  return (
    <h1 className='profile'>Hello Mr. {JSON.parse(auth).name}</h1>
  )
}
