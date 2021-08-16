import React, { useState, useCallback } from 'react';
import ItemsList from './itemList';

function App() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'blue' : 'black'
    };

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, index) => `Element ${index}`);
    }, [count])

    return (
        <div>
            <h1 style={styles}>Count of elements: {count}</h1>
            <button
                className="btn btn-success"
                onClick={() => setCount(prev => prev + 1)}
            >
                add
            </button>
            <button
                className="btn btn-warning"
                onClick={() => setColored(prev => !prev)}
            >
                change
            </button>
            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    );
}

export default App;
