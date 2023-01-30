import React from 'react'

const CommentList = ({ com }) => {
    console.log(com)
    const smallText = {
        color: 'gray',
        fonSize: '8px'
    }
    
   
    return (
        <div style={{
           // marginLeft: "53vw",
            //marginTop: "3vh",
           // width: "700px",
        }}>
            {com.map((item, idx) => (
                <p key={'num' + idx + item.text}> 
                    {item.text}
                    <span style={smallText}> {item.time}</span>
                </p>
            ))}
        </div>
    )
}

export default CommentList