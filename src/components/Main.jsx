import React from 'react'

const Main = ({content="기본 컨텐츠", bgcolor}) => {
  return (
    <div style={{background:bgcolor,
        padding:0,
        margin:0
    }}>
        {content}
    </div>
  )
}

export default Main