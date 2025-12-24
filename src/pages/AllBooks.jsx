import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router";

function AllBooks() {


    const { filteredCategories } = useOutletContext();


    if (!filteredCategories.length) {
        return <p>no books found</p>
    }

    return (
        <>
            {filteredCategories
                .map(category =>
                    <BookGrid key={category.id}
                        category={category.name}
                        books={category.books} />)}
        </>
    )
}

export default AllBooks