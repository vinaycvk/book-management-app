import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import BooksCard from '../../components/home/BooksCard';
import BooksTable from '../../components/home/BooksTable';
import LogoutButton from './LogoutButton';
import LoginAndRegisterButton from './LoginAndRegisterButton';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE_URL}/api/v1/books`)
      .then((respose) => {
        setBooks(respose.data.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })
  }, [])



  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('Card')}
        >
          Card
        </button>
      </div>
      {token ? (
        <LogoutButton />
      ) : (
        <LoginAndRegisterButton />
      )}

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />
      )}
    </div>
  )
}

export default Home