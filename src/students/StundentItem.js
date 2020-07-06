import React from 'react'

const StudentItem = ({id, name, gender}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt="Student" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>FullName: {name}</h2>
                <p>Gender: {(gender === "1") ? 'female' : 'male'}</p>
            </div>
        </div>
    )
}

export default StudentItem;