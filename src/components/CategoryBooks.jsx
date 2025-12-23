import BookGrid from "./BookGrid";
import filterBook from "../utils/filterBook";
import { useParams } from "react-router"
import { useOutletContext } from "react-router";

function CategoryBooks() {

    const { userInput, bookCategories } = useOutletContext();
    const { category } = useParams();


    const cat = bookCategories.filter(cat => {
        return cat.name.toLowerCase() === category.toLocaleLowerCase()
    })


    if (!cat.length) {
        return <p>category not found...</p>
    }

    const [filtered] = filterBook(cat, userInput);

    
    return (
        <>
            {
                <BookGrid category={filtered.category} books={filtered.books} />
            }
        </>
    )
}

export default CategoryBooks