import { createContext, useReducer } from "react";

export const ExamsContext = createContext()

export const examsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_EXAMS':
            return {
                exams: action.payload
            }
        case 'CREATE_EXAM':
            return {
                exams: [action.payload, ...state.exams]
            }
        case 'DELETE_EXAM':
            return {
                exams: state.exams.filter((exam) => exam._id !== action.payload._id)
            };
            
        default:
            return state
    }
}
export const ExamsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(examsReducer, {
        exams: []
    })
    return (
        <ExamsContext.Provider value={{...state, dispatch}}>
            {children}
        </ExamsContext.Provider>
    )
}