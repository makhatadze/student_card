import React, {Component} from "react";
import './App.css'
import StudentList from "../students/StudentList";
import StudentSearch from "../students/StudentSearch";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";


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
            .then(users => this.setState({Students: users})
            )
    }

    onStudentSearchChange = (event) => {
        this.setState({studentsSearchField: event.target.value});
    }

    render() {
        const {Students, studentsSearchField} = this.state;
        const filteredStudents = Students.filter(students => {
            return students.name.toLowerCase().includes(studentsSearchField.toLowerCase())
        })
        if (!Students.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div>
                    <div className='tc'>
                        <h1 className='f2'>Caucasus University</h1>
                        <StudentSearch searchChange={this.onStudentSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <StudentList Students={filteredStudents}/>
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                </div>
            )
        }
    }
}

export default App;
