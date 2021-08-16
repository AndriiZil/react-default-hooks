import React, { useMemo, useState, useEffect } from 'react';

function complexCompute(num) {
    console.log('complexCompute');
    let i = 1;
    while (i < 1000000000) i++
    return num * 2;
}

function App() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => {
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored]);

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number]);

    useEffect(() => {
        console.log('styles changed');
    }, [styles]);


    return (
        <div>
            <h1 style={styles}>Calculated value: {computed}</h1>
            <button
                className="btn btn-success"
                onClick={() => setNumber(prev => prev + 1)}
            >
                add
            </button>
            <button
                className="btn btn-danger"
                onClick={() => setNumber(prev => prev - 1)}
            >
                sub
            </button>
            <button
                className="btn btn-warning"
                onClick={() => setColored(prev => !prev)}
            >
                Change
            </button>
        </div>
    );
}

export default App;
