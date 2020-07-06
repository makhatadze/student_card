import React from 'react'

const StudentItem = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt="Student" src='https://robohash.org/student/test?200x200' />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    )
}

export default StudentItem;