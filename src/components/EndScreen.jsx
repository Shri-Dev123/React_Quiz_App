import { useContext } from "react"
import { quizContext } from "../App"

const EndScreen = () =>{
    const useQuizContext = useContext(quizContext)
    const resetQuizScore = () =>{
        useQuizContext.setQuizPage("mainMenu")
        useQuizContext.setScore(0)

        console.log(useQuizContext.score)
    }
    return (
        <>
        <h2>your Quiz has been finished</h2>
        <h2>your Quiz score is {useQuizContext.score}/3</h2>
        <button onClick={resetQuizScore}>Restart-Quiz</button>
        </>
    )
}

export default EndScreen         