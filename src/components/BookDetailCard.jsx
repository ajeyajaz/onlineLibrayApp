
function BookDetailCard({ book }) {

    return (
        <div className="w-64 shrink-0 rounded-lg border bg-white shadow-sm overflow-hidden">
            <div className="h-40 w-full">
                <img src={book.image} alt={book.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-3 space-y-1">
                <p className="font-semibold text-sm">{book.title}</p>
                <p className="text-xs text-gray-500">{book.author}</p>

                <p className="text-xs text-gray-600 line-clamp-2">
                    {book.description}
                </p>

                <p className="text-xs font-medium mt-1">
                    ⭐ {book.rating}
                </p>
            </div>
        </div>
    )
}

export default BookDetailCard;