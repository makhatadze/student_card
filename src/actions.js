import {
    CHANGE_SEARCH_FIELD,
    REQUEST_STUDENTS_PENDING,
    REQUEST_STUDENTS_SUCCESS,
    REQUEST_STUDENTS_FAILED
} from "./constants";

export const setStudentsSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestStudents = ()=> (dispatch) => {
    dispatch({type: REQUEST_STUDENTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_STUDENTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_STUDENTS_FAILED, payload: error}))
}