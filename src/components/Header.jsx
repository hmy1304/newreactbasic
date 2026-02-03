import React from 'react'
import "./Header.css"

const Header = () => {
    const navList = [
        {title:"홈", desc:"홈으로 바로가기"},
        {title:"공지사항", desc:"공지사항으로 바로가기"},
        {title:"이벤트", desc:"이벤트로 바로가기"},
        {title:"커뮤니티", desc:"커뮤니티로 바로가기"}
    ]

    return (
        <header>
            <h1>title</h1>
            <ul className='navList'>
                {navList.map((nav,i)=>(
                    <li key={i}>
                        <span className='tit'>
                            {nav.title}
                        </span>
                        <span className='dsc'>
                            {nav.desc}
                        </span>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header