import { createContext, useContext, useState } from "react";
import { bookCategories as categories } from "../utils/mockData";

const BookContext = createContext();


export function BookProvider({ children }) {

    const [search, setSearch] = useState('')
    return (
        <BookContext.Provider value={
            {
                categories,
                search,
                setSearch
            }
        }>
            {children}
        </BookContext.Provider>
    )
}


export const useBooks = () => useContext(BookContext);



