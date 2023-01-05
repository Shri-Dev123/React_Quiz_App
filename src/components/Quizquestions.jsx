import { useContext } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { quizContext } from "../App"
import questions from "../helpers/questions"


const Quizquestions = () => {
    const useQuizContext = useContext(quizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [quizButton, setQuizButton] = useState(true)
    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState(30)





    const questionsHandler = () => {
        console.log(questions.length, currentQuestion)
        if (currentQuestion === questions.length - 1) {

            setQuizButton(false);

        } else {
            setQuizButton(true)
            setCurrentQuestion(currentQuestion + 1)
            setTimer(30)
        }
    }

    const submitHandler = () => {
        useQuizContext.setQuizPage("EndScreen")
    }

    const answerChecker = (event) => {
        if (questions[currentQuestion].answer === event.target.innerText)
            useQuizContext.setScore(score => score + 1)
            questionsHandler()
        return score

    }

    const timerInterval = useRef();

    useEffect(() => {
        timerInterval.current = setInterval(() => {
            if (timer > 0) {

                setTimer(timer - 1)
            } else {
                questionsHandler()
            }
        }, 1000)
        return () => {
            clearInterval(timerInterval.current)

        };

    }, [timer]);
    
    return (
        <>
            <h2>{quizButton ? "Quiz questions" : "Quiz finished"}</h2>
            {quizButton === true && <div>
                <h2>Question attempt time remaining in seconds {timer}</h2>
                <h3>{questions[currentQuestion].prompt}</h3>
                <button type="submit" onClick={answerChecker}>{questions[currentQuestion].optionA}</button>
                <button type="submit" onClick={answerChecker}>{questions[currentQuestion].optionC}</button>
                <button type="submit" onClick={answerChecker}>{questions[currentQuestion].optionB}</button>
                <button type="submit" onClick={answerChecker}>{questions[currentQuestion].optionD}</button>
            </div>}
            <br />
            {quizButton === true ? <button type="submit" onClick={questionsHandler}>Next-Question</button> : <button type="submit" onClick={submitHandler}>Submit-Quiz</button>}
        </>
    )
}

export default Quizquestions


