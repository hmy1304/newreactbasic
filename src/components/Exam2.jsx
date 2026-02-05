import React, { useState } from 'react'

const Exam2 = () => {
    const [text, setText] = useState("hello")

    const onClickbutton = () => {
        text === "hello" ? setText("goodbye"):setText("hello")
    }

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={onClickbutton}>클릭</button>
        </div>
    )
}

export default Exam2