import React, { useState } from 'react';

const Question = ({ question, onCorrect, onWrong }) => {
    const [selectedKeys, setSelectedKeys] = useState([]);
    
    const handleKeyClick = (key) => {
        const newSelectedKeys = [...selectedKeys, key];
        setSelectedKeys(newSelectedKeys);

        const correctKeys = question.keys;

        for (let i = 0; i < newSelectedKeys.length; i++) {
            if (newSelectedKeys[i] !== correctKeys[i]) {
                onWrong();
                return;
            }
        }

        if (newSelectedKeys.length === correctKeys.length) {
            onCorrect();
        }
    };

    const availableKeys = ['Ctrl', 'Shift', 'Alt', 'P', 'X', 'C', 'V', 'F', '`', 'K', 'S'];

    return (
        <div className="question">
            <h3>{question.question}</h3>
            <div className="key-options">
                {availableKeys.map((key) => (
                    <button
                        key={key}
                        onClick={() => handleKeyClick(key)}
                        disabled={selectedKeys.includes(key)}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
