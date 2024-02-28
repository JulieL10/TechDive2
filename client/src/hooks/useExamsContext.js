import { ExamsContext } from "../context/ExamContext";
import { useContext } from 'react'

export const useExamsContext = () => {
    const context = useContext(ExamsContext)

    if(!context) {
        throw Error('useExamsContext must be used inside an ExamContextProvider')
    }

    return context
}