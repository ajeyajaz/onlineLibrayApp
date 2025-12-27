export default function SearchBox({ onChange, value }) {

    return (
        <div className="flex justify-center my-3">
            <input value={value}
                type="text"
                placeholder="search by Book title or author"
                className="w-[60%] outline-0 border p-1 "
                onChange={onChange} />
        </div>
    )
}   