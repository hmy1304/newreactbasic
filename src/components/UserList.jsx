import React,{useState,useEffect, useMemo} from 'react'
import axios from 'axios'


const UserList = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)
    const [keyword, setKeyword] = useState("")
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
            setLoading(false)
        })
        .catch((err)=> {
            console.error("데이터를 가져오지 못햇습니다.", err)
            setError("데이터를 가져오지 못했습니다.")
            setLoading(false)
        })
        
    },[])
    
    const filtered = useMemo(()=> {
        return user.filter((u)=> 
        u.name.toLowerCase().includes(keyword.toLowerCase()))
        .sort()
    },[keyword, user])

    if(loading) return <p>로딩중...</p>
    if(error) return <p>{error}</p>


    return (
        <div>
            <h2>사용자 목록</h2>
            <input 
            onChange={(e)=>setKeyword(e.target.value)}
            value={keyword}
            type="text" 
            placeholder='이름을 검색하시오.'/>
            <ul>
                {filtered.map((u) => (
                    <li key={u.id}>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.email}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList