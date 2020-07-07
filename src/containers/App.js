import React, {Component} from "react";
import {connect} from 'react-redux'
import './App.css'
import StudentList from "../students/StudentList";
import StudentSearch from "../students/StudentSearch";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import {setStudentsSearchField, requestStudents} from "../actions";

const mapStateToProps = state => {
    return {
        studentsSearchField: state.searchStudents.studentsSearchField,
        students: state.requestStudents.students,
        isPending: state.requestStudents.isPending,
        error: state.requestStudents.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onStudentSearchChange: (event) => dispatch(setStudentsSearchField(event.target.value)),
        onRequestStudents: () => dispatch(requestStudents())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestStudents()
    }

    render() {
        const {studentsSearchField, onStudentSearchChange, students, isPending} = this.props
        const filteredStudents = students.filter(students => {
            return students.name.toLowerCase().includes(studentsSearchField.toLowerCase())
        })
        return isPending ?
            <h1>Loading</h1> :
            (
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
