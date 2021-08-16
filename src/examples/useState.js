import React, { useState } from 'react';

function computeInitialCounter() {
    console.log('Some calculations...');
    return Math.trunc(Math.random() * 20);
}

function App() {
    const [counter, setCounter] = useState(computeInitialCounter);

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    });

    const updateTitle = () => {
        setState(prevState => {
            return {
                ...prevState,
                date: Date.now()
            }
        });
    }

    return (
        <div>
            <h2>React Counter: {counter}</h2>
            <button
                className="btn btn-success"
                onClick={() => setCounter(prev => prev + 1)}
            >
                add
            </button>
            <button
                className="btn btn-danger"
                onClick={() => setCounter(prev => prev - 1)}
            >
                del
            </button>
            <button
                className="btn btn-default"
                onClick={updateTitle}
            >
                change title
            </button>
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    );
}

export default App;
