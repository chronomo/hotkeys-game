import React from 'react';

const PlayButton = ({ onClick }) => {
    return (
        <div className="play-button" onClick={onClick}>
            <h1>Play</h1>
        </div>
    );
};

export default PlayButton;
