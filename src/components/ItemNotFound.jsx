import { Link } from "react-router";

function ItemNotFound({ message }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="text-lg font-medium text-gray-700">
                {message}
            </p>
            <Link
                to='/'
                className="text-blue-600 hover:underline font-medium"
            > back to home</Link>
        </div>
    )
}

export default ItemNotFound