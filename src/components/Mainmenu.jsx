import { useContext } from "react"
import { quizContext } from "../App"

const Mainmenu = () =>{
    const useQuizContext = useContext(quizContext)

const quizStarter = () =>{
    useQuizContext.setQuizPage("quizQuestions")
}    
    return (
        <>
        <h2>React Quiz App</h2>
        <button type="submit" onClick={quizStarter}>start-Quiz</button>

        </>
    )
}

export default Mainmenu