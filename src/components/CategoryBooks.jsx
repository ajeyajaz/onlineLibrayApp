import BookGrid from "./BookGrid";
import { useParams } from "react-router"
import { useOutletContext } from "react-router";

function CategoryBooks() {

    const { userInput, bookCategories } = useOutletContext();
    const { category } = useParams();


    const cat = bookCategories.filter( cat => cat.name.toLowerCase() === category.toLowerCase())
        

    if (!category) {
        return <p>category not found...</p>
    }

    const [filtered] = cat.map((cat) => {
        return {
            ...cat,
            books: cat.books.
                filter(book =>
                    book.title.toLowerCase().includes(userInput) ||
                    book.author.toLowerCase().includes(userInput))
        }
    });


    return (
        <>
            {
                <BookGrid id={filtered.id} category={filtered.category} books={filtered.books} />
            }
        </>
    )
}

export default CategoryBooks