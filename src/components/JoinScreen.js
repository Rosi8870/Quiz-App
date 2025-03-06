import React from 'react';

function JoinScreen({ startQuiz }) {
    return (
        <div className="join-screen">
            <h2>JOIN THE QUIZ BY SOJAN</h2>
            <p>Click the button below to start the quiz.</p>
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
}

export default JoinScreen;