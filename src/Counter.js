import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(1);

    useEffect(()=> {
        document.title = `Count (${counter})`;
    });

    return (
        <button onClick={() => {setCounter(counter+1);}}>Count({counter})</button>
    );
};

export default Counter;