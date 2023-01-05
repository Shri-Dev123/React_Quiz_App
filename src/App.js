import "./App.css"
import { createContext } from "react";
import { useState } from "react";
import EndScreen from "./components/EndScreen";
import Mainmenu from "./components/Mainmenu";
import Quizquestions from "./components/Quizquestions";

export const quizContext = createContext()

function App() {


  const [quizPage, setQuizPage] = useState("mainMenu")
  const[score,setScore] = useState(0)
  return (
    <>
      <quizContext.Provider value={{quizPage,setQuizPage,score,setScore}}>

        {quizPage === "mainMenu" && <Mainmenu />}
        {quizPage === "quizQuestions" && <Quizquestions />}
        {quizPage === "EndScreen" && <EndScreen />}
      </quizContext.Provider>
    </>


  )

}

export default App;
