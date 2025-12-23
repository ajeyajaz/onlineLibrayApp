import { useState } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import {bookCategories} from '../utils/mockData'

function BrowseBook() {

    const categories = ["fiction", "non-fiction", "sci-fi", "fantasy", "self-help"];

    const [userInput, setUserInput] = useState('');

    const handleOnChange = e => {
        setUserInput(e.target.value);
    }
 

    return (
        <>
            <nav className="flex justify-end gap-3">
                {categories.map(cat => <Link key={cat} to={`books/${cat}`}>{cat}</Link>)}
            </nav>

            <div>
                <input
                    type="text"
                    className="border w-3xl"
                    onChange={handleOnChange} />

            </div>

            <Outlet context={{
                userInput: userInput.toLowerCase(),
                bookCategories: bookCategories
                }}/>
        </>

    )
}

export default BrowseBook;