
export default function filterBook(categories, query) {

    // filters by an id or author
    const data = categories.map((cat) => {
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

