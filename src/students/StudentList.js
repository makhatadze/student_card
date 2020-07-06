import React from "react";
import StudentItem from "./StundentItem";

const StudentList = ({Students}) => {
    return (
        <div>
            <StudentItem id={Students[0].ID} name={Students[0].Name} gender={Students[0].gender}/>
            <StudentItem id={Students[1].ID} name={Students[1].Name} gender={Students[1].gender}/>
            <StudentItem id={Students[2].ID} name={Students[2].Name} gender={Students[2].gender}/>
        </div>
    )
}

export default StudentList;