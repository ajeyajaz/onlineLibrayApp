function Form({ onSubmit, children }) {
    return (
        <div className="flex justify-center">
            <form onSubmit={onSubmit} className="flex flex-col gap-4 p-6 max-w-md bg-white rounded-lg shadow flex-1">
                {children}
            </form>
        </div>
    )
}


export default Form;