import { Link } from "react-router"

function BookCard({book, category}){
  
    return(
        <div className="w-40 h-50">
            <div className="h-30 object-cover">
                <img src={book.image} alt="" />
            </div>
            <div>
                <p>{book.title}</p>
                <Link to={`/${category}/${book.id}`}>more</Link>
            </div>
        </div>
    )
}

export default BookCard