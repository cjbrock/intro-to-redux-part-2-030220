import { createStore } from 'redux'

const todos = [
  {id: 1, name: "Fix air conditioning", complete: false},
  {id: 2, name: "Start final project", complete: false},
  {id: 3, name: "Teach study group", complete: true},
  {id: 4, name: "Finish labs", complete: false},
  {id: 5, name: "Learn Redux", complete: true},
  {id: 6, name: "Get shit together", complete: false},
  {id: 7, name: "Try not to cry at final one on ones", complete: false}
]


function todosReducer(state = todos, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      // write whatever code we need to do to perform our actions
      const newState = state.map(todo => todo.id == action.payload ? { ...todo, complete: !todo.complete } : todo )
      return newState

    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store