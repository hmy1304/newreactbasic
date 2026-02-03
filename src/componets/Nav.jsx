import React from 'react'
import "./style/Nav.css"

const Nav = () => {
    const navList= [
        { label: "page 2", path: "/page2" },
        { label: "page 3", path: "/page3" },
        { label: "page 4", path: "/page4" },
        { label: "page 5", path: "/page5" },
        { label: "page 6", path: "/page6" }
    ]

    return (
        <nav>
            <h3 className="nav-title">
                navigation links
            </h3>

            <ul className="nav-list">
                {navList.map((nav,i) => (
                    <li key={i}>
                        {nav.label}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav