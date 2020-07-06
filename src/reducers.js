import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    studentsSearchField: ''
}

export const searchStudents = (state=initialState, action={}) => {
    console.log(action.type)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD :
            return { ...state, studentsSearchField: action.payload};
        default:
            return state;
    }
}