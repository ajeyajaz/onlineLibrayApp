import BookCard from "./BookCard"

function BookGrid({category, books }) {
    return (
        <>
            <h2 className="text-2xl">{category}</h2>

            <div className="flex flex-1 flex-wrap gap-2">
                {!books.length && <p>book not found</p>}
                {books.map(book => <BookCard book={book} key={book.id}/>)} 
            </div>
        </>
    )
}

export default  BookGrid