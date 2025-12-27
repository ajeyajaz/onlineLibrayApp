export default function NavBar({children}) {
    return (
        <div className="flex gap-3 justify-end p-2 bg-black/40">
            {children}
        </div>
    )
}