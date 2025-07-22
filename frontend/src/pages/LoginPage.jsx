import React, { useEffect, useState } from 'react'
import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = () => {
        const data = {
            email,
            password
        }
        setLoading(true)
        axios
            .post('http://localhost:5555/api/v1/users/login', data)
            .then((res) => {
                localStorage.setItem('token', res.data.token); 
                console.log(res.data.token)
                setLoading(false);
                alert('Login successful!');
                navigate(from);
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
                alert('An error happened, Please check the console')
            })
    }
    return (
        <div className='p-4'>
            <BackButton />
            {loading ? <Spinner /> : ''}
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <h1 className='text-3xl my-4'>Login</h1>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginPage