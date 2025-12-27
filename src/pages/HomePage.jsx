import { categories, bookCategories } from '../utils/mockData'
import { getPopularBooks } from '../utils/filterBook'
import BookGrid from '../components/BookGrid'
import { Link } from 'react-router'
import NavBar from '../components/NavBar'

function HomePage() {
    const popularBooks = getPopularBooks(bookCategories);
    return (
        <>
            <NavBar>
                <Link to='/'>Home</Link>
                <Link to='/books'>Browse Books</Link>
                <Link to='/add-book'>Add Book</Link>
            </NavBar>

            <h1 className='text-5xl text-center p-2'>Welcome</h1>
            <div>
                <h2 className='text-3xl my-4'>Available categories</h2>
                <ul className='flex'>
                    {categories.map(
                        categorie =>
                            <li key={categorie.id} className='list-none flex-1 text-center'>
                                {categorie.name}</li>)}
                </ul>
            </div>
            <div>
                <h2 className='text-3xl my-5 text-center'> Popular books</h2>
                {popularBooks
                    .map(cat => <BookGrid books={cat.books} category={cat.name} key={cat.id} />)}
            </div>
        </>
    )
}

export default HomePage