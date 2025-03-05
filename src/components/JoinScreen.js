import React from 'react';

function JoinScreen({ start }) {
    return (
        <div className="join-screen">
            <h2>Join the Quiz</h2>
            <p>Click the button below to start the quiz.</p>
            <button onClick={start}>Start Quiz</button>
        </div>
    );
}

export default JoinScreen;