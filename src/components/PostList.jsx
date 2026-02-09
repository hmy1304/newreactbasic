import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'

const PostList = () => {
    const [post, setPost] =useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data)
            setPost(res.data.slice(0,10))
            setLoading(false)
        })
        .catch((err)=>{
            console.err("데이터를 가져오지 못했습니다", err)
            setError("데이터를 가져오지 못했습니다.")
            setLoading(false)
        })
    },[])

    if(loading) return <p>로딩중...</p>
    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>목록</h2>
            
            <ul>
                {post.map((p)=>(
                    <li key={p.id}>
                        {p.title} 
                        {p.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList