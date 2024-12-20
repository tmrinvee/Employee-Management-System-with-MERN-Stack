import React from 'react'
import { useAuth } from '../../context/authContext'

const Navbar = () => {
    const {user, logout} = useAuth()
  return (
    <div className='flex items-center justify-between h-12 px-5 text-white bg-red-800'>
        <p >Welcome {user.name}</p>
        <button className='px-4 py-1 bg-amber-500 hover:bg-amber-400' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar