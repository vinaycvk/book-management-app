import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/login' element={<LoginPage />}/>
      <Route path='/books/register' element={<Register />}/>

      <Route element= {<ProtectedRoute />}>
          <Route path='/books/create' element={<CreateBook />}/>
          <Route path='/books/edit/:id' element={<EditBook />}/>
          <Route path='/books/delete/:id' element={<DeleteBook />}/>
      </Route>
      
     
      <Route path='/books/details/:id' element={<ShowBook />}/>
      
    </Routes>
  )
}

export default App