import { createContext, useContext } from "react";
import { bookCategories as categories } from "../utils/mockData";

const BookContext = createContext();


export function BookProvider({children}){

    <BookContext.Provider value={
        {categories}
    }>
        {children}
    </BookContext.Provider>
}


export const useBooks = () => useContext(BookContext);



