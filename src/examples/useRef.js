import React, { useRef, useState, useEffect } from 'react';

function App() {
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');

    useEffect(() => {
        renderCount.current++;
        prevValue.current = value
    }, [value]);

    const focus = () => inputRef.current.focus();

    return (
        <div>
            <h1>Count of renders {renderCount.current}</h1>
            <h2>Previous state: {prevValue.current}</h2>
            <input
                type="text"
                onChange={e => setValue(e.target.value)}
                value={value} ref={inputRef}
            />
            <button className="btn btn-success" onClick={focus}>focus</button>
        </div>
    );
}

export default App;
