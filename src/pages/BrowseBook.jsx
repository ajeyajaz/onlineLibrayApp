import { useState } from "react";
import { Outlet } from "react-router";
import { useBooks } from "../context/BookContext";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";


function BrowseBook() {

    const {categories,setSearch} = useBooks();

    const handleSearch = e => {
        setSearch(e.target.value); 
    }


    return (
        <>
            <NavBar categories={categories} />

            <SearchBox onChange={handleSearch}/>

                {/* a child page will be dilsplayed here ->allbooks,categoryBooks */}
            <Outlet/> 
            
        </>

    )
}

export default BrowseBook;