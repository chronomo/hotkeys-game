import React, { useEffect } from 'react';

const WellDoneScreen = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.reload();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="well-done-screen">
            <h1>Well Done!</h1>
        </div>
    );
};

export default WellDoneScreen;
