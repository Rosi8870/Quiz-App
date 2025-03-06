import { useState, useEffect, useRef, useCallback } from 'react';
import { flushSync } from 'react-dom';

function Question({ question, totalQuestions, currentQuestionIndex, setAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [seconds, setSeconds] = useState(10);
    const timer = useRef(null);
    const progressBar = useRef(null);

    const goToNextQuestion = useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        flushSync(() => {
            setAnswer(selectedOption);
        });
        setSelectedOption(null);
        setSeconds(10);
    }, [selectedOption, setAnswer]);

    useEffect(() => {
        progressBar.current.classList.remove('active');
        setTimeout(() => {
            progressBar.current.classList.add('active');
        }, 0);
        timer.current = setTimeout(goToNextQuestion, 10 * 1000); // 10 seconds

        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => {
            clearTimeout(timer.current); // Cleanup function
            clearInterval(interval);
        };
    }, [question, goToNextQuestion]);

    return (
        <div className="question">
            <div className="progress-bar" ref={progressBar}></div>
            <div className="question-count">
                <b>{currentQuestionIndex}</b> of <b>{totalQuestions}</b>
            </div>
            <div className="timer">
                Time left: {seconds} seconds
            </div>
            <div className="main">
                <div className="title">
                    <span>Question:</span>
                    <p>{question.title}</p>
                </div>
                <div className="options">
                    {question.options.map((option, index) => {
                        return (
                            <div
                                className={index === selectedOption ? 'option active' : 'option'}
                                key={index}
                                onClick={() => setSelectedOption(index)}
                            >
                                {option}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="control">
                <button onClick={goToNextQuestion}>Next</button>
            </div>
        </div>
    );
}

export default Question;