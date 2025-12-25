import React from 'react'
import { categories, popularBooks } from '../utils/mockData'
import { Link } from 'react-router'

function HomePage() {

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
                <div className='flex flex-wrap gap-2'>
                    {popularBooks.map(book => {
                        return <div className='w-40 border' key={book.id}>
                            <div>
                                <img src={book.image} alt="" className='w-40 h-30 object-cover' />
                                <a href={'/'}>More details</a>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage