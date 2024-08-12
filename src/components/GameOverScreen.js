import React, { useEffect } from 'react';

const GameOverScreen = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="game-over-screen">
            <h1>Game Over!</h1>
        </div>
    );
};

export default GameOverScreen;
