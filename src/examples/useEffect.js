import React, { useState, useEffect } from 'react';

function App() {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const mouseMoveHandler = e => {
        setPos({
            x: e.clientX,
            y: e.clientY,
        });
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((json) => setData(json));

        return () => console.log('clean type');
    }, [type]);

    // Like Life Cycle ComponentDidMount
    useEffect(() => {
        console.log('ComponentDidMount');
        window.addEventListener('mousemove', mouseMoveHandler);

        // Delete listener on destruct component
        return () => window.removeEventListener('mousemove', mouseMoveHandler);
    }, []);

    return (
        <div>
            <h2>Resourse: {type}</h2>
            <button className="btn btn-primary" onClick={() => setType('users')}>Users</button>
            <button className="btn btn-primary" onClick={() => setType('todos')}>Todo</button>
            <button className="btn btn-primary" onClick={() => setType('posts')}>Posts</button>

            <pre>
                {/*{JSON.stringify(data, null, 2)}*/}
                {JSON.stringify(pos, null, 2)}
            </pre>
        </div>
    );
}

export default App;
