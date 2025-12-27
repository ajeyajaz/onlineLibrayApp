
function BookDetailCard({book}) {

    return (
        <div className="border w-40 h-50">
            <div className="h-20">
                <img src={book.image} alt="" className="object-cover" />
            </div>
            <div>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.description}</p>
                <p>{book.rating}</p>
            </div>
        </div>
    )
}

export default BookDetailCard;