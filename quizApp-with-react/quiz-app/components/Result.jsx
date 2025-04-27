import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation(); //user's selected answers and original quiz questions including correct answer
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (!state) {
    return (
      <div>
        <p>No result found. Please take the quiz First</p>
      </div>
    );
  }

  const { userAnswers, questions } = state; //destructuring the state
  const question = questions[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];
  const isCorrect = userAnswer === question.correctAnswer;

  const score = questions.reduce((total, question, index) => {
    return total + (userAnswers[index] === question.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>
        You scored {score} out of {questions.length}
      </p>
      <button onClick={() => navigate("/")}>Try Again</button>
      <hr />

      <h3>Review:</h3>
      <div
        style={{
          padding: "10px 15px",
          marginBottom: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Your Score: {score} / {questions.length}
      </div>
      <div>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <div dangerouslySetInnerHTML={{ __html: question.question }} />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {question.options.map((option, idx) => {
            const isUserAnswer = option === userAnswer;
            const isCorrectAnswer = option === question.correctAnswer;
            let backgroundColor = "white";

            if (isUserAnswer && isCorrect) backgroundColor = "lightgreen";
            else if (isUserAnswer && !isCorrect) backgroundColor = "#ffcccc";
            else if (!isUserAnswer && isCorrectAnswer)
              backgroundColor = "#d3f9d8";

            return (
              <li key={idx}>
                <button
                  disabled
                  dangerouslySetInnerHTML={{ __html: option }}
                  style={{
                    backgroundColor,
                    margin: "5px",
                    cursor: "not-allowed",
                    padding: "10px 15px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </li>
            );
          })}
        </ul>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setCurrentQuestion((prev) => prev - 1)}
            disabled={currentQuestion === 0}
            style={{ marginRight: "10px" }}
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={() => navigate("/")}>Retake Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
