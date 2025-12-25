import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router";

function AllBooks() {


    const { filteredBook } = useOutletContext();


    if (!filteredBook.length) {
        return <p>no books found</p>
    }

    return (
        <>
            {filteredBook
                .map(category =>
                    <BookGrid key={category.id}
                        category={category.name}
                        books={category.books} />)}
        </>
    )
}

export default AllBooks