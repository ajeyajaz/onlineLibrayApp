export default function SearchBox({onChange}) {

    return (
        <div>
            <input
                type="text"
                className="border w-3xl"
                onChange={onChange} />

        </div>
    )
}   