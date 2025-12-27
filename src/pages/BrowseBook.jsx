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

            {!isCategoryPage && newBooks.length > 0 && (
                <div className="mt-6">
                    <h2 className="mb-4 text-xl font-semibold">New Books</h2>

                    <div className="flex gap-4">
                        {newBooks.map(book => (
                            <div
                                key={book.id}
                                className="w-64 shrink-0 rounded-md border p-4 overflow-hidden"
                            >
                                <p className="font-medium">{book.title}</p>
                                <p className="text-sm text-gray-600">{book.author}</p>
                                <p className="text-sm line-clamp-3">{book.description}</p>
                                <p className="text-sm mt-2">⭐ {book.rating}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}


            <Outlet context={{
                filteredBook
            }} />
        </>

    )
}

export default BrowseBook;