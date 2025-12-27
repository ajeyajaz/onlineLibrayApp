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

            <h1>Welcome</h1>
            <div>
                <h2>Book categories</h2>
                {categories.map(categorie => <div key={categorie.id}>{categorie.name}</div>)}
            </div>
            <div>
                <h2> Popular books</h2>
                {popularBooks
                    .map(cat => <BookGrid books={cat.books} category={cat.name} key={cat.id} />)}
            </div>
        </>
    )
}

export default HomePage