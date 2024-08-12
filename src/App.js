import React, { useState, useEffect } from 'react';
import { questions } from './data';
import PlayButton from './components/PlayButton';
import Question from './components/Question';
import GameOverScreen from './components/GameOverScreen';
import WellDoneScreen from './components/WellDoneScreen';

function App() {
    const [gameState, setGameState] = useState('start'); // 'start', 'playing', 'gameover', 'welldone'
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setGameState('gameover');
        }
    }, [timeLeft, gameState]);

    const startGame = () => {
        setShuffledQuestions(shuffleArray(questions).slice(0, 7));
        setGameState('playing');
        setScore(0);
        setTimeLeft(20);
        setCurrentQuestionIndex(0);
    };

    const handleCorrectAnswer = () => {
        if (currentQuestionIndex === 6) {
            setGameState('welldone');
        } else {
            setScore(score + 1);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleWrongAnswer = () => {
        setGameState('gameover');
    };

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="app">
            {gameState === 'start' && <PlayButton onClick={startGame} />}
            {gameState === 'playing' && (
                <div>
                    <h2>Time Left: {timeLeft} seconds</h2>
                    <Question
                        question={shuffledQuestions[currentQuestionIndex]}
                        onCorrect={handleCorrectAnswer}
                        onWrong={handleWrongAnswer}
                    />
                </div>
            )}
            {gameState === 'gameover' && <GameOverScreen />}
            {gameState === 'welldone' && <WellDoneScreen />}
        </div>
    );
}

export default App;

