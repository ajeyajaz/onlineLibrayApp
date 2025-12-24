import BookGrid from "../components/BookGrid";
import filterBook from "../utils/filterBook";
import { useBooks} from "../context/BookContext";
function AllBooks() {

    
    const {categories, search} = useBooks();

    const filteredBooks = filterBook(categories, search);

    if(!filteredBooks.length){
        return <p>no books found</p>
    }
    
    return (
        <>
            {filteredBooks
                .map(category =>
                    <BookGrid key={category.id}
                        category={category.name}
                        books={category.books} />)}
        </>
    )
}

export default AllBooks