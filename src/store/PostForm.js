import { useState } from "react"
import React from 'react'
export default function PostForm() {
    const [data, setData] = useState({userId : '',title: '',body: ''
})
    
    const handleSubmit = (e) => {
        console.log(data)
    }
    const handleChange = (e) => {
            setData({...data, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                UserId<input type='text' name='userId' value={data.userId} onChange={handleChange}/>
                Title<input type='text' name='title' value={data.title} onChange={handleChange}/>
                Body<input type='text' name='body' value={data.body} onChange={handleChange}/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}