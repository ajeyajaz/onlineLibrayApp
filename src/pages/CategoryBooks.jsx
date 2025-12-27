import BookGrid from "../components/BookGrid"
import { useOutletContext } from "react-router"
import ItemNotFound from '../components/ItemNotFound'

function CategoryBooks() {


    const { filteredBook } = useOutletContext();

    if (!filteredBook.length) {
        return <ItemNotFound message={'no book found'}/>
    }

    return (
        <>
            {
                <BookGrid category={filteredBook[0].name} books={filteredBook[0].books} />
            }
        </>
    )
}

export default CategoryBooks