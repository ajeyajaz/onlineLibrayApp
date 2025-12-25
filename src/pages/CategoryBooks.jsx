import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router"


function CategoryBooks() {


    const { filteredBook } = useOutletContext();

    if (!filteredBook.length) {
        return <p>no books found...</p>
    }

    return (
        <>
            {
                <BookGrid category={filteredBook[0].name} books={filteredBook[0].books} />
            }
        </>
    )
}

export default CategoryBooks