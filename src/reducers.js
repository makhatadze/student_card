import {
    CHANGE_SEARCH_FIELD,
    REQUEST_STUDENTS_FAILED,
    REQUEST_STUDENTS_SUCCESS,
    REQUEST_STUDENTS_PENDING
} from "./constants";

const initialStateSearch = {
    studentsSearchField: ''
}

export const searchStudents = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD :
            return {...state, studentsSearchField: action.payload};
        default:
            return state;
    }
}

const initialStateStudents = {
    isPending: false,
    students: [],
    error: ''
}

export const requestStudents = (state = initialStateStudents, action = {}) => {
    switch (action.type) {
        case REQUEST_STUDENTS_PENDING:
            return {...state, isPending: true};
        case REQUEST_STUDENTS_SUCCESS:
            return {...state, students: action.payload, isPending: false};
        case REQUEST_STUDENTS_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}