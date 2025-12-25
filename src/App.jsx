import './App.css'
import HomePage from './pages/HomePage'
import BrowseBook from './pages/BrowseBook'
import AllBooks from './pages/AllBooks'
import CategoryBooks from './pages/CategoryBooks'
import BookDetail from './pages/BookDetail'
import AddBook from './pages/AddBook'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<HomePage />}
          />

          <Route
            path='/books'
            element={<BrowseBook />}
          >
            <Route
              index
              element={<AllBooks />}
            />
            <Route
              path=':category'
              element={<CategoryBooks />}
            />
          </Route>
          <Route
            path=':category/:id'
            element={<BookDetail />}
          />
          <Route
            path='/add-book'
            element={ <AddBook/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
