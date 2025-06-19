import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div data-theme="dim">
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
