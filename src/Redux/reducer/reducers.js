import { combineReducers } from 'redux'

const dropdownReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DROPDOWN':
      return action.payload
    default:
      return state
  }
}

const datePickerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATEPICKER':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  Dropdown: dropdownReducer,
  DatePicker: datePickerReducer,
})

export default rootReducer
