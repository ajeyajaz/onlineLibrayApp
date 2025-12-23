import './App.css'
import HomePage from './pages/HomePage'
import BrowseBook from './pages/BrowseBook'
import AllBooks from './pages/AllBooks'
import CategoryBooks from './components/CategoryBooks'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          <Route  element={<BrowseBook />}>
            <Route path='/all-books' element={<AllBooks />} />
            <Route path='/books/:category' element={<CategoryBooks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
