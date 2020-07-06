import React, {Component} from "react";
import './App.css'
import StudentList from "./students/StudentList";
import StudentSearch from "./students/StudentSearch";


class App extends Component {
    constructor() {
        super();
        this.state = {
            Students: [],
            studentsSearchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ Students: users })
            )
    }

    onStudentSearchChange = (event) => {
        this.setState({studentsSearchField: event.target.value});
    }

    render() {
        const filteredStudents = this.state.Students.filter(students => {
            return students.name.toLowerCase().includes(this.state.studentsSearchField.toLowerCase())
        })
        return (
            <div>
                <div className='tc'>
                    <h1 className='f2'>Caucasus University</h1>
                    <StudentSearch searchChange={this.onStudentSearchChange} />
                    <StudentList Students={filteredStudents}/>
                </div>
            </div>
        )
    }
}

export default App;
