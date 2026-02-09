import React, {useEffect,useState,useMemo} from 'react'
import axios from 'axios'

const DummyJason = () => {
    const [userId, setUserId] = useState(1)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://dummyjson.com/users/${userId}`)
        .then((res)=>{
            setUser(res.data)
            setLoading(false)
        })
        .catch((err)=> {
            console.err("데이터를 가져오지 못했습니다.", err)
            setError("데이터를 가져오지 못했습니다.")
            setLoading(false)
        })
    },[userId])

    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>목록</h2>
            <button onClick={()=> setUserId(1)}>1번</button>
            <button onClick={()=> setUserId(2)}>2번</button>
            <button onClick={()=> setUserId(3)}>3번</button>
            {loading && <p>로딩중...</p>}
            {user && (
                <div>
                    <p>이름:{user.firstName}</p>
                    <p>이메일:{user.email}</p>
                    <p>나이:{user.age}</p>
                    <p>이미지:</p>
                    <img src={user.image}></img>
                </div>
            )}

        </div>
    )
}

export default DummyJason