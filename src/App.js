import React, { useState } from 'react';
import JoinScreen from './components/JoinScreen';
import QuizScreen from './components/QuizScreen';

function App() {
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        console.log("Start Quiz button clicked");
        setQuizStarted(true);
    };

    const retryQuiz = () => {
        setQuizStarted(false);
    };

    return (
        <div className="App">
            {quizStarted ? (
                <QuizScreen retry={retryQuiz} />
            ) : (
                <JoinScreen startQuiz={startQuiz} />
            )}
        </div>
    );
}

export default App;