import  { CHANGE_SEARCH_FIELD } from "./constants";

export const setStudentsSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

