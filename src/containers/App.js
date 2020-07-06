import React, {Component} from "react";
import { connect } from 'react-redux'
import './App.css'
import StudentList from "../students/StudentList";
import StudentSearch from "../students/StudentSearch";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import { setStudentsSearchField} from "../actions";

const mapStateToProps = state => {
    return {
        studentsSearchField: state.studentsSearchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStudentSearchChange: (event) => dispatch(setStudentsSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            Students: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({Students: users})
            )
    }

    render() {
        const { Students } = this.state;
        const { studentsSearchField, onStudentSearchChange } = this.props

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
                        <StudentSearch searchChange={onStudentSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
