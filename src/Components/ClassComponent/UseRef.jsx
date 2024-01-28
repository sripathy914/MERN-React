import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
    const [batchSize, updateBatch] = useState(0);
    const preBatch = useRef(batchSize);

    useEffect(() => {
        preBatch.current = batchSize;
    }, [batchSize]);

    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => {
                    updateBatch(e.target.value);
                }}/>
            <h1>
                Current: {batchSize} | Previous: {preBatch.current}
            </h1>
        </div>
    );
};

export default UseRefComponent;