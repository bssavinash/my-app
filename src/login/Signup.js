import { Dashboard } from "@mui/icons-material"
import { useState } from "react"
import Login from "./Login"

export default function SignUp() {
    const [data, setData] = useState({ firstname: '', lastname: '', username: '', password: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const [count, setCount] = useState(0)
    const handleSubmit = e => {
        e.preventDefault()
        setCount({ count: count + 1 })

        if (data.firstname != '', data.lastname != '', data.username != '', data.password != '') { setIsSubmit(true) }
        else {
            setIsSubmit(false)
        }
    }
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {isSubmit ? <Dashboard/> :
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td> Fisrt Name</td><td><input type='text' name='firstname' value={data.firstname} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td> Last Name</td><td><input type='lastname' name='lastname' value={data.lastname} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td> Username</td><td><input type='text' name='username' value={data.username} onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td> Password</td><td><input type='password' name='password' value={data.password} onChange={handleChange} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button>SignUp</button>

                </form>
            }
        </div>
    )
}