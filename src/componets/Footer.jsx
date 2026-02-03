import React from 'react'
import "./style/Footer.css"

const Footer = () => {
    const footerMenu =[
        { label: "contact us", path: "/contact" },
        { label: "affiliates", path: "/affiliates" },
        { label: "help", path: "/help" },
        { label: "follow us", path: "/follow" }
    ]
    return (
    
        <footer>
            <h2 className='footer-title'>
                FOOTER SECTION
            </h2>
            <div className="nav-wrap">
                <h3 className="nav-title">
                    navigation links
                </h3>
                <ul className="nav-list">
                    {footerMenu.map((menu, i) => (
                        <li key={i}>
                            {menu.label}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer