import { useParams, useNavigate } from "react-router"
import { filterCategory, getBookById } from "../utils/filterBook";
import BookDetailCard from "../components/BookDetailCard";
import { bookCategories as allBook } from "../utils/mockData";
import ItemNotFound from "../components/ItemNotFound";

function BookDetail() {

    const { category, id } = useParams();
    const navigate = useNavigate();

    const cat = filterCategory(allBook, category.toLowerCase());
    const book = getBookById(cat.books, id);

    if (!book) return <ItemNotFound message='no book found' />;

    return (
        <div className="flex flex-col items-center">
            <BookDetailCard book={book} />
            <button onClick={() => navigate('/books')}
                className="text-blue-600 hover:underline text-sm"
            >back to browse book</button>
        </div>
    )
}


export default BookDetail