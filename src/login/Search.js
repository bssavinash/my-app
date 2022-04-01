
export default function Search(props) {
    const handleChange = e => {
        props.change(e.target.value)
        
    }
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search here</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
                onChange = {handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}
