import React from "react";
import StudentItem from "./StundentItem";
import './student.css'

const StudentList = ({Students}) => {
    return (
        <div>
            {
                Students.map((student, i) => {
                    return (
                        <StudentItem
                            key={i}
                            id={Students[i].id}
                            name={Students[i].name}
                            email={Students[i].email}/>
                    )
                })
            }
        </div>
    )
}

export default StudentList;