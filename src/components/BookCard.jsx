
function BookCard({book}){

    return(
        <div className="w-40 h-50">
            <div className="h-30 object-cover">
                <img src={book.image} alt="" />
            </div>
            <div>
                <p>{book.title}</p>
                <a href="/">more</a>
            </div>
        </div>
    )
}

export default BookCard