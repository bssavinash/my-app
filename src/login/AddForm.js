import React, { useState } from 'react'
import { AddItem } from './listofUsers.slice'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from './dashboard'
import Login from './Login'

export default function AddForm(props) {
    const dispatch = useDispatch()
    const [isSubmit, setIsSubmit] = useState(false)
    const [item, setItem] = useState({ firstname: '', lastname: '', email: '', mobile: '', username: '' })
    const handleChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        // e.preventDefault()
        dispatch(AddItem(item))
        // props.handleAddClick()
        setIsSubmit(!isSubmit)
    }
    return (
        <div>
            {isSubmit ? <Dashboard /> :
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
                        <button type='submit' >Submit</button>
                    </table>
                </form>
            }
        </div>
    )
}