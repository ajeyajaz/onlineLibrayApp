import './App.css'
import HomePage from './pages/HomePage'
import BrowseBook from './pages/BrowseBook'
import AllBooks from './pages/AllBooks'
import CategoryBooks from './pages/CategoryBooks'
import BookDetail from './pages/BookDetail'
import { BrowserRouter, Routes, Route } from 'react-router'
// import { bookCategories } from './utils/mockData'
// import { useState } from 'react'

function App() {

  // const [allBook, setAllBook] = useState(bookCategories);
  // const [filteredBook, setFilteredBook] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path='/books' element={<BrowseBook />}>
            <Route index element={<AllBooks />} />
            <Route path=':category' element={<CategoryBooks />} />
          </Route>
          <Route path=':category/:id' element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
