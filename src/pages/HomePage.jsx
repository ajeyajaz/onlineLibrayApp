import React from 'react'
import { categories, bookCategories } from '../utils/mockData'
import { getPopularBooks } from '../utils/filterBook'
import BookDetailCard from '../components/BookDetailCard'
import { Link } from 'react-router'

function HomePage() {
    const popularBooks = getPopularBooks(bookCategories);

    return (
        <>
            <nav className='flex justify-end gap-3'>
                <Link to='/'>Home</Link>
                <Link to='/books'>Browse Books</Link>
                <Link to='/add-book'>Add Book</Link>
            </nav>

            <h1>Welcome</h1>
            <div>
                <h2>Book categories</h2>
                {categories.map(categorie => <div key={categorie.id}>{categorie.name}</div>)}
            </div>
            <div>
                <h2> Popular books</h2>
                {popularBooks
                    .map(book => <BookDetailCard book={book} key={book.id}/>)}
            </div>
        </>
    )
}

export default HomePage