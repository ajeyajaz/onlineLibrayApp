import { useState } from "react";
import { Outlet, useParams, useMatch, Link } from "react-router";
import { useBooks } from "../context/BookContext";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import {filterBook} from "../utils/filterBook";

function BrowseBook() {

    const [search, setSearch] = useState('');
    const { categories } = useBooks(); // all category books data 

    const params = useParams();
    const isCategoryPage = useMatch("/books/:category");  //to check the user on the CategoryPage

    let filteredCategories = [];

    //if it's category page ? dispay only a category books
    if (isCategoryPage) {

        const cat = categories.find(cat => {
            return cat.name.toLowerCase() === params.category.toLowerCase();
        });

        filteredCategories = filterBook([cat], search.toLowerCase());
    }
    // else display all categories books
    else {
        filteredCategories = filterBook(categories, search.toLowerCase());
    }


    const handleSearch = e => {
        setSearch(e.target.value);
    }


    return (
        <>
            <NavBar>
                <nav className="flex justify-end gap-3">
                    {categories.map(cat => <Link key={cat.id} to={`${cat.name}`}>{cat.name}</Link>)}
                </nav>
            </NavBar>

            <SearchBox onChange={handleSearch} value={search} />

            {/* a child page will be dilsplayed here ->allbooks,categoryBooks */}
            <Outlet context={{
                filteredCategories,
            }} />
        </>

    )
}

export default BrowseBook;