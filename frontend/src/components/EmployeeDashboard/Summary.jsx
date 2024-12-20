import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useAuth } from '../../context/authContext'

const SummaryCard = () => {
    const {user} = useAuth()
  return (
    <div className='p-6'>
    <div className="flex bg-white rounded">
        <div className={`text-3xl flex justify-center items-center bg-red-800 text-white px-4`}>
            <FaUser />
        </div>
        <div className="py-1 pl-4">
            <p className="text-lg font-semibold">Welcome Back</p>
            <p className="text-xl font-bold">{user.name}</p>
        </div>
    </div>
    </div>
  )
}
export default SummaryCard