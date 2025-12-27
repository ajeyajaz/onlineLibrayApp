import { Link } from "react-router"

function BookCard({book, category}){
  
    return(
        <div className="w-60">
            <div >
                <img src={book.image} alt="" className="w-[100%] h-60 object-cover" />
            </div>
            <div>
                <p className="text-center text-lg p-2">{book.title}</p>
                <Link to={`/${category}/${book.id}`} className="border block p-1 text-center bg-blue-200 rounded-md">more</Link>
            </div>
        </div>
    )
}

export default BookCard