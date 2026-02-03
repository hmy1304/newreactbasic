import React from 'react'
import Nav from './Nav'
import "./style/Header.css"

const Header = () => {
  return (
    <header>
        <h1 className="title">Site Name</h1>
        <section className='head-sec'>
            <h2 className="sec-title">
                HEADERSECTION
            </h2>
            <Nav />
        </section>
    </header>
  )
}

export default Header