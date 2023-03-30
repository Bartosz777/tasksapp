import { createContext, useReducer } from 'react' 

export const TaskContext = createContext()


export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': 
            return {
                tasks: [action.payload, ...state.tasks]
            }
        case 'SET_TASKS':
            return {
                tasks: action.payload
            }
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter(t => t._id !== action.payload._id)
            }
        default:
            return state
    }
}



export const TaskContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(taskReducer, { tasks: null })


    return (
        <TaskContext.Provider value={{ ...state, dispatch }}>
            { children }
        </TaskContext.Provider>
    )
}