import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('You have been logged out.');
        navigate('/');
    }

    return (
        <div className='flex justify-end items-center gap-x-4'>
            <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={() => handleLogout()}
            >
                Logout
            </button>
        </div>
    )
}

export default LogoutButton