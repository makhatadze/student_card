import React from 'react'

const StudentItem = ({id, name, email}) => {
    return (
        <div className='student-item bg-light-green dib br3 pa3 ma2 grow'>
            <img alt="Student" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default StudentItem;