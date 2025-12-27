import { Link } from "react-router";

function ItemNotFound({ message }) {
    return (
        <div>{message}
            <Link to='/'> back to home</Link>
        </div>
    )
}

export default ItemNotFound