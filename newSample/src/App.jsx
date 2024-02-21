import React, { useState, useMemo } from 'react';

const ExampleComponent = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const expensiveComputation = (param1, param2) => {
        // Simulating an expensive computation
        console.log("Performing expensive computation");
        return param1 + param2;
    };

    const memoizedValue = useMemo(() => expensiveComputation(a, b), [a, b]);

    return (
        <div>
            <div>
                <label>Value of A:</label>
                <input
                    type="number"
                    value={a}
                    onChange={(e) => setA(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Value of B:</label>
                <input
                    type="number"
                    value={b}
                    onChange={(e) => setB(parseInt(e.target.value))}
                />
            </div>
            <div>Memoized Value: {memoizedValue}</div>
        </div>
    );
};

export default ExampleComponent;
