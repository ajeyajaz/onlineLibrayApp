import { useRef } from "react";
import Form from "../components/Form";
import { useState } from "react";
import Error from "../components/Error";
import { addBook } from "../utils/newBookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function AddBook() {

    const titleRef = useRef(null);
    const authorRef = useRef(null);
    const descriptionRef = useRef(null);
    const ratingsRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errMsg, setErrMsg] = useState('');

    const book = {
        id: crypto.randomUUID(),
        title: '',
        author: '',
        description: '',
        rating: '',
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleRef.current.value.trim();
        const author = authorRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const rating = ratingsRef.current.value.trim();

        
        if (!title) {
            setErrMsg('the title field cannot be empty..');
            return;
        }

        if (!author) {
            setErrMsg('the author field cannot be empty..');
            return;
        }

        if (!description) {
            setErrMsg('the description field cannot be empty..');
            return;
        }

        if (!rating) {
            setErrMsg('the rating field cannot be empty..');
            return;
        }

        if (isNaN(rating) || (parseFloat(rating) < 0 || parseFloat(rating) > 5)) {
            setErrMsg('the rating must be between 1 to 5..');
            return;
        }

        setErrMsg('');

        book.title = title;
        book.author = author;
        book.description = description;
        book.rating = parseFloat(rating);

        dispatch(addBook(book));
        navigate('/books', {replace:true})
    }

    return (
        <>
            {errMsg && <Error message={errMsg} />}

            <Form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="title name"
                        className="border"
                        ref={titleRef} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="author name"
                        className="border"
                        ref={authorRef}
                    />
                </div>
                <div>
                    <textarea
                        className="border"
                        placeholder="description"
                        ref={descriptionRef}
                    >
                    </textarea>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="ratings 1 to 5"
                        className="border"
                        ref={ratingsRef}
                    />
                </div>
                <button type="submit">AddBook</button>
            </Form>
        </>
    )
}

export default AddBook;