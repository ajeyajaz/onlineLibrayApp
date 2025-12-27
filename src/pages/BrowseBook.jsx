import { useEffect, useState } from "react";
import { Outlet, useParams, useMatch, Link } from "react-router";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import { filterBookBytitleAuthor, filterCategory } from "../utils/filterBook";
import { bookCategories } from "../utils/mockData";
import { useSelector } from "react-redux";


function BrowseBook() {

    const [search, setSearch] = useState('');
    const [allBook] = useState(bookCategories);
    const [filteredBook, setFilteredBook] = useState([]);

    const newBooks = useSelector(state => state.newBook.books);

    const { category } = useParams();
    const isCategoryPage = useMatch("/books/:category");

    useEffect(() => {

        if (isCategoryPage) {
            const cat = filterCategory(allBook, category.toLowerCase());
            if (!cat) return;

            setFilteredBook(filterBookBytitleAuthor([cat], search.toLowerCase()));
        }
        else {
            setFilteredBook(filterBookBytitleAuthor(allBook, search.toLowerCase()));
        }

    }, [isCategoryPage, search]);



    const handleSearch = e => {
        setSearch(e.target.value);
    }


    return (
        <>
            <NavBar>
                <nav className="flex justify-end gap-3">
                    {allBook.map(cat => <Link key={cat.id} to={`${cat.name}`}>{cat.name}</Link>)}
                </nav>
            </NavBar>

            <SearchBox onChange={handleSearch} value={search} />

            {!isCategoryPage && <div>
                {newBooks.length && <h2>new books</h2>}
                {
                    newBooks.map(book =>
                        <div className="w-40 h-30 border">
                            <div>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                                <p>{book.description}</p>
                                <p>{book.ratings}</p>
                            </div>
                        </div>)
                }
            </div>}

            <Outlet context={{
                filteredBook
            }} />
        </>

    )
}

export default BrowseBook;