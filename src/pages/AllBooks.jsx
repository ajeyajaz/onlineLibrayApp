import BookGrid from "../components/BookGrid";
import { bookCategories as allCategoryBooks } from "../utils/mockData"


function AllBooks() {

    console.log(allCategoryBooks);

    return (
        <>
            {allCategoryBooks
                .map(category =>
                    <BookGrid key={category.id}
                        id={category.id}
                        category={category.name}
                        books={category.books}/>)}
        </>
    )
}

export default AllBooks