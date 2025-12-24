import { useParams, useNavigate } from "react-router"
import { useBooks } from "../context/BookContext";
import { filterCategory} from "../utils/filterBook";
import BookDetailCard from "../components/BookDetailCard";


function BookDetail() {

    const { category, id } = useParams();
    const { categories } = useBooks();
    const navigate = useNavigate();

    const cat = filterCategory(categories, category.toLowerCase());
    
    const book = cat.books.find((book) => book.id == id);
    

    return (
        <>
            <BookDetailCard book={book}/>
            <button onClick={()=> navigate(-1)}>back to browse book</button>
        </>
    )
}


export default BookDetail