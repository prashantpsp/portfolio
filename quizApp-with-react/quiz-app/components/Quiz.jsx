import { useState } from "react";
import { useQuizData } from "../src/data/useQuizData"
import { useNavigate } from "react-router-dom";

function Quiz(){
    const {questions, loading}=useQuizData();
    const [currentQuestion, setCurrentQuestion]=useState(0);
    const [answers, setAnswers]=useState({});
    const navigate = useNavigate();
    if (loading)
        return <div><h2>Loading Quiz...</h2></div>
    
    const question=questions[currentQuestion];

    const handleSelect=(option)=>{
        setAnswers({
            ...answers,
            [currentQuestion]:option,
        })
        console.log(currentQuestion+" "+option);
        
    };

    const isSelected = (option) => answers[currentQuestion] === option;
    
    const handleSubmit=()=>{
        navigate('/result', {
            state:{
                userAnswers:answers,
                questions:questions,
            },
        });
    };


    return(
        <div>
            <div>
                <p>Question {currentQuestion+1} of {questions.length}</p>
            </div>
            <h2 dangerouslySetInnerHTML={{__html:question.question}} />
            <ul>
                {question.options.map((option,idx)=>(
                    <li key={idx}>
                        <button onClick={()=>handleSelect(option)} dangerouslySetInnerHTML={{__html:option}} style={{backgroundColor: isSelected(option) ? 'lightgreen' : 'white', margin:'5px',}} />
                    </li>
                ))}
            </ul>
            <div style={{marginTop:'20px'}}>
                <button onClick={()=>{setCurrentQuestion((prev)=>prev-1)}}
                                    disabled={currentQuestion===0}
                                    style={{marginRight:'10px'}}
                >
                    Prev
                </button>
                <button onClick={()=>handleSubmit()}
                        // disabled={}
                >
                    Submit
                </button>
                <button onClick={()=>{setCurrentQuestion((prev)=>prev+1)}}
                                    disabled={currentQuestion===questions.length-1}    
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Quiz