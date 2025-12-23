
export default function filterBook(bookCategories, value){ 

    // filters by an id or author
    return bookCategories.map((cat) => {
        return {
            ...cat,
            books:cat.books. 
                filter(book => 
                    book.title.toLowerCase().includes(value) ||  
                    book.author.toLowerCase().includes(value))        
        }
    });
}

