import { useLocation } from "react-router"
import { Link } from "react-router";

function NotFound() {
    const location = useLocation();
    const prefixUrl = 'http://localhost:5173';

    return (
        <>
            <p>the past does not exist {prefixUrl + location.pathname}</p>
            <Link to='/'>back to home</Link>
        </>
    )
}

export default NotFound