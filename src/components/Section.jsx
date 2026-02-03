import React from 'react'

const Section = () => {
    const user = {
        name:"Tom",
        isLogin:false
    }

    if(user.isLogin){
        return (
            <div>{user.name} 로그인</div>
        )
    } else {
        return (
            <div>{user.name} 로그아웃</div>
        )
    }

}

export default Section