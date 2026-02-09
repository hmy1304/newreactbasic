import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'

const UserTest = () => {
    const [userId, setUserId] = useState(1)
    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)
    const [error, setError] =useState(null)
    const [keyword, setKeyword] = useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUser(res.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.err("데이터를 가져오는데 실패했습니다.", err)
            setError("데이터를 가져오는데 실패했습니다.")
            setLoading(false)
        })
    },[])

    const filtered = useMemo(() => {
        return user.filter((u)=>
        u.name.toLowerCase().includes(keyword.toLowerCase()))
        .sort()
    },[keyword,user])

    return (
        <div>
            <h2>목록</h2>
            <input 
            onChange={(e)=>setUser(e.target.value)}
            value={keyword}
            type="text" 
            placeholder='이름을 입력하시오'/>
            <ul>
                {filtered.map((u)=>(
                    <li key={u.id}>
                        {u.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserTest