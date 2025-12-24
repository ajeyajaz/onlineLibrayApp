import BookGrid from "../components/BookGrid";
import filterBook from "../utils/filterBook";
import { useParams, useOutletContext } from "react-router"
import { useBooks } from "../context/BookContext";

function CategoryBooks() {


    
    const { filteredCategories } = useOutletContext();

    if (!filteredCategories.length) {
        return <p>no books found...</p>
    }

    return (
        <>
            {
                <BookGrid category={filteredCategories[0].category} books={filteredCategories[0].books} />
            }
        </>
    )
}

export default CategoryBooks