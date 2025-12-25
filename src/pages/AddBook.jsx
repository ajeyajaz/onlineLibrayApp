import { useRef } from "react";
import Form from "../components/Form";
import { useState } from "react";
function AddBook() {

    const titleRef = useRef(null);
    const authorRef = useRef(null);
    const descriptionRef = useRef(null);
    const ratingsRef = useRef(null);

    const [errMsg, setErrMsg] = useState('');

    const book = {
        title: '',
        author: '',
        description: '',
        ratings: '',
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleRef.current.value.trim();
        const author = authorRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const ratings = ratingsRef.current.value.trim();

        if(!title){
            setErrMsg('the title field cannot be empty..');
            return;
        }
          
        if(!author){
            setErrMsg('the author field cannot be empty..');
            return;
        }
            
        if(!description){
           setErrMsg('the description field cannot be empty..');
           return;
        }
        
        if(!ratings){
            setErrMsg('the ratings field cannot be empty..');
            return;
        }

        if(isNaN(ratings) || (parseFloat(ratings) < 0 || parseFloat(ratings) > 5)){
            setErrMsg('the ratings must be between 1 to 5..');
            return;
        }
    
        setErrMsg('');

        book.title = title;
        book.author = author;
        book.description = description;
        book.ratings = parseFloat(ratings);
    }

    return (
        <>
            {errMsg && <p>{errMsg}</p>}

            <Form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="title name" className="border" ref={titleRef} />
                </div>
                <div>
                    <input type="text" placeholder="author name" className="border" ref={authorRef} />
                </div>
                <div>
                    <textarea className="border" placeholder="description" ref={descriptionRef}></textarea>
                </div>
                <div>
                    <input type="text" placeholder="ratings 1 to 5"  className="border" ref={ratingsRef} />
                </div>
                <button type="submit">AddBook</button>
            </Form>
        </>
    )
}

export default AddBook;