export default function SearchBox({ onChange, value }) {

    return (
        <div>
            <input value={value}
                type="text"
                className="border w-3xl"
                onChange={onChange} />
        </div>
    )
}   