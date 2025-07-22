import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginAndRegisterButton = () => {

    const navigate = useNavigate()

    return (
        <div className='flex justify-end items-center gap-x-4'>
            <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={() => navigate('/books/login')}
            >
                Login
            </button>
            <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={() => navigate('/books/register')}
            >
                Register
            </button>
        </div>
    )
}

export default LoginAndRegisterButton