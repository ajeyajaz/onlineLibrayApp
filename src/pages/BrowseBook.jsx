import { useEffect, useState } from "react";
import { Outlet, useParams, useMatch, Link} from "react-router";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import { filterBookBytitleAuthor, filterCategory } from "../utils/filterBook";
import { bookCategories } from "../utils/mockData";


function BrowseBook() {

    const [search, setSearch] = useState('');
    const [allBook] = useState(bookCategories);
    const [filteredBook, setFilteredBook] = useState([]);


    const { category } = useParams();
    const isCategoryPage = useMatch("/books/:category");

    useEffect(() => {
        
        if (isCategoryPage) {
            const cat = filterCategory(allBook, category.toLowerCase());
            if(!cat) return;
            
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

            <Outlet context={{
                filteredBook
            }} />
        </>

    )
}

export default BrowseBook;