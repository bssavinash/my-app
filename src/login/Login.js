import { useState } from "react"
import AddForm from "./AddForm"
import credentials from './Credentials.json'
import Dashboard from "./dashboard"
import SignUp from "./Signup"

export default function Login(props) {
    const emailPattern = /^[a-z0-9](\.?[a-z0-9]){5,}@[a-z]{4,5}\.?com$/
    const [data, setData] = useState({
        username: '', password: ''
    })
    const [isLogin,setIsLogin] = useState(false)
    const [isSignup,setIsSignup] = useState(false)
   
    const [errors, setErrors] = useState({
        username: '', password: ''
    })
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleValidations = (data) => {
        let error = {...errors}
        if(!emailPattern.test(data.username)) {
            error = {
                ...error,
                username: 'Invalid userName'
            }
        }
        setErrors({...error})
        return error
    }
    const handleSubmit = e => {
        e.preventDefault();
        const validationsResult = handleValidations(data)
        console.log('validationsResult', validationsResult)
        if(data.username === credentials.username && data.password === credentials.password){
            setIsLogin(true)
        }
    }

    const handleClick = e => {
        setIsSignup(!isSignup)
    }
    
    return (
        <div>
            {(props.register === 1) ? 'Successfully registered' : null}
            {isSignup ? <SignUp/> :
            isLogin ? <Dashboard/> : 
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td> Username</td><td><input type='text' name='username' value={data.username} onChange={handleChange} /></td>
                            {errors.username && <span>{errors.username}</span>}
                        </tr>
                        <tr>
                            <td> Password</td><td><input type='password' name='password' value={data.password} onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <button>Login</button>
                <button onClick = {handleClick}>Signup</button>
                
            </form>
            
            }
             
             
        </div>
    )
}