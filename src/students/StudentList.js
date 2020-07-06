import React from "react";
import StudentItem from "./StundentItem";

const StudentList = ({Students}) => {
    return (
        <div>
            {
                Students.map((student, i) => {
                    return (
                        <StudentItem
                            key={i}
                            id={Students[i].ID}
                            name={Students[i].Name}
                            gender={Students[i].Gender}/>
                    )
                })
            }
        </div>
    )
}

export default StudentList;