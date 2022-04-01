export default function EditForm(props){
    let item = props.item
    const handleSubmit = e => {
        e.preventDefault()
        props.change(item)
    }
    const handleChange = e => {
        e.preventDefault()
        item = {...item,[e.target.name]:e.target.value}
    }
    return(
        <form onSubmit={handleSubmit}>
        <table>
            <tr>
                <td>  FirstName <input type='text' name='firstname' value={item.firstname} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td> LastName <input type='text' name='lastname' value={item.lastname} onChange={handleChange} /></td>
            </tr>
            <tr>
                <td>Email <input type='text' name='email' value={item.email} onChange={handleChange} /></td></tr>
            <tr>
                <td>UserName<input type='text' name='username' value={item.username} onChange={handleChange} /></td></tr>
            <tr>
                <td>Mobile <input type='text' name='mobile' value={item.mobile} onChange={handleChange} /></td>
            </tr>
            <button type='submit' >Save</button>
        </table>
    </form>
    )
}