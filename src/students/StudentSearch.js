import React from "react";

const StudentSearch = ({studentsSearchField, searchChange}) => {
    return (
        <input
            className='pa3 ba b--green bg-light-blue'
            type='search'
            placeholder='search student'
            onChange={searchChange}
        />
    );
}

export default StudentSearch;