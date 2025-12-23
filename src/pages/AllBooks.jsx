import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router";
import filterBook from "../utils/filterBook";

function AllBooks() {

    const { userInput, bookCategories } = useOutletContext();

    const filtered = filterBook(bookCategories, userInput);

    
    return (
        <>
            {filtered
                .map(category =>
                    <BookGrid key={category.id}
                        category={category.name}
                        books={category.books} />)}
        </>
    )
}

export default AllBooks