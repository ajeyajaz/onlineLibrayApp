import BookCard from "./BookCard"

function BookGrid({category, books }) {
    return (
        <>
            <h2 className="text-2xl text-center">{category}</h2>

            <div className="flex space-y-15 space-x-5 flex-wrap justify-center my-auto">
                {books.map((book) => <BookCard book={book} category={category} key={book.id} />)} 
            </div>
        </>
    )
}

export default  BookGrid