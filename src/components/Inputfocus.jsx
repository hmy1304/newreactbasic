import React, {useRef} from 'react'

const Inputfocus = () => {
    const inputRef = useRef(null)

    const focusInput=()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder='버튼 클릭시 포커스'/>
            <button onClick={focusInput}>focus</button>
        </div>
    )
}

export default Inputfocus