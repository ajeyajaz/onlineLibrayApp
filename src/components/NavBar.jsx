import { Link } from "react-router";

export default function NavBar({categories}) {
    return (
        <>
            <nav className="flex justify-end gap-3">
                {categories.map(cat => <Link key={cat.id} to={`${cat.name}`}>{cat.name}</Link>)}
            </nav>
        </>
    )
}