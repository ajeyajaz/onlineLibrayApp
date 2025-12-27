
export function filterBookBytitleAuthor(books, query) {

    // filters by an id or author
    const data = books.map((cat) => {
        return {
            ...cat,
            books: cat.books.
                filter(book =>
                    book.title.toLowerCase().includes(query) ||
                    book.author.toLowerCase().includes(query))
        }
    }).filter(cat => cat.books.length > 0);
    return data;
}


export function filterCategory(books, query) {
    return books.find(cat => {
        return cat.name.toLowerCase() === query;
    });
}


export function getBookById(books, id) {
    return books.find(book => book.id === id);

}

export function getPopularBooks(books) {
    const data = books.map((cat) => {
        return {
            ...cat,
            books: cat.books.
                filter(book => book.popular)
        }
    }).filter(cat => cat.books.length > 0);
    return data;
}