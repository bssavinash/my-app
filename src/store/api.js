import axios from 'axios'
import { useState } from 'react';
import PostForm from './PostForm.js';


export default function Api() {
    const [posts, setPosts] = useState('')
    const [error, setError] = useState('')
    const [isPost, setIsPost] = useState(false)
    const handleGet = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => {
                setError('error retriving data')
            })

    }
    const handlePost = () => {
        setIsPost(!isPost)
        
    }
    return (
        <div>
            <button onClick={handleGet}>Get</button>
            {
                posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
            }
            {error ? <div>{error}</div> : null}
            <button onClick={handlePost}> Post </button>
            {isPost ? <PostForm /> : null}
        </div>
    )
}