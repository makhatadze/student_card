import React, {Component} from "react";
import StudentList from "./students/StudentList";
import {Students} from "./data/Students";
import StudentSearch from "./students/StudentSearch";


class App extends Component {
    constructor() {
        super();
        this.state = {
            Students: Students,
            studentsSearchField: ''
        }
    }

    onStudentSearchChange = (event) => {
        this.setState({studentsSearchField: event.target.value});
    }

    render() {
        const filteredStudents = this.state.Students.filter(students => {
            return students.Name.toLowerCase().includes(this.state.studentsSearchField.toLowerCase())
        })
        return (
            <div>
                <div className='tc'>
                    <h1>Caucasus University</h1>
                    <StudentSearch searchChange={this.onStudentSearchChange} />
                    <StudentList Students={filteredStudents}/>
                </div>
            </div>
        )
    }
}

export default App;
