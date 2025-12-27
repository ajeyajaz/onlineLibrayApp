import { useLocation } from "react-router"
import { Link } from "react-router";

function NotFound() {
    const location = useLocation();

    return (
        <div className="flex flex-col items-center gap-3 p-6">
            <p className="text-gray-700 font-mono">the past does not exist {location.pathname}</p>
            <Link to='/' className="text-gray-700">back to home</Link>
        </div>
    )
}

export default NotFound