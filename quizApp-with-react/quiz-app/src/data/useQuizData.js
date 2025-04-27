import { useEffect, useState } from "react";

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

export function useQuizData(){
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then(res=>res.json())
        .then(data=>{
            const formattedArray = data.results.map((q,index)=>{
                const answers = [...q.incorrect_answers, q.correct_answer];
                return {
                    id: index+1,
                    question: q.question,
                    correctAnswer: q.correct_answer,
                    options: shuffleArray(answers),
                };
            });
            setQuestions(formattedArray);
            setLoading(false);
        });
    },[]);
    return {questions,loading};
}