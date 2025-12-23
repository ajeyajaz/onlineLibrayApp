import BookGrid from "../components/BookGrid";
import { useOutletContext } from "react-router";

function AllBooks() {

    const { userInput, bookCategories } = useOutletContext();

    const filteredBooks = bookCategories.map((cat) => {
        return {
            ...cat,
            books:cat.books.
                filter(book => 
                    book.title.toLowerCase().includes(userInput) ||  
                    book.author.toLowerCase().includes(userInput))        
        }
    });

    // console.log('filter', filteredBooks);

    return (
        <>
            {filteredBooks
                .map(category =>
                    <BookGrid key={category.id}
                        id={category.id}
                        category={category.name}
                        books={category.books} />)}
        </>
    )
}

export default AllBooks