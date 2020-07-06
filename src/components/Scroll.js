import React from "react";

const Scroll = (props) => {
    return (
        <div  className='mt3 pt2' style={{overflowY: 'scroll', borderTop: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;