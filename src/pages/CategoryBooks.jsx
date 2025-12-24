import BookGrid from "../components/BookGrid";
import filterBook from "../utils/filterBook";
import { useParams } from "react-router"
import { useBooks } from "../context/BookContext";

function CategoryBooks() {

    
    const { category} = useParams();
    const {categories, search} = useBooks();

    const cat = categories.find(cat => {
        return cat.name.toLowerCase() === category.toLowerCase();
    })


    if (!cat) {
        return <p>no category found...</p>
    }

    const [filteredBooks] = filterBook([cat], search);

    if(!filteredBooks){
        return  <p>no books found...</p>
    }


    return (
        <>
            {
                <BookGrid category={filteredBooks.category} books={filteredBooks.books} />
            }
        </>
    )
}

export default CategoryBooks