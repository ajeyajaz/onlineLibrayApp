import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router"


function CategoryBooks() {


    
    const { filteredCategories } = useOutletContext();

    if (!filteredCategories.length) {
        return <p>no books found...</p>
    }

    return (
        <>
            {
                <BookGrid category={filteredCategories[0].name} books={filteredCategories[0].books} />
            }
        </>
    )
}

export default CategoryBooks