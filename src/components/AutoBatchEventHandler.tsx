import { useState } from "react";
//import { flushSync } from "react-dom";

export const AutoBatchEventHandler = () => {
    console.log("AutoBatchEventHandler");
    const [state1, setState1] = useState<number>(0);
    const [state2, setState2] = useState<number>(0);

    const onClickUpdateButton = () => {
        console.log(state1);
        // flushSync(() => {
        //     setState1((state1) => state1 + 1);
        // });
        setState1((state1) => state1 + 1);
        console.log(state1);
        setState2((state2) => state2 + 1);
    }

    return (
        <div>  
            <p>Automatic Batching(EventHandler)</p>
            <button onClick={onClickUpdateButton}>Update State</button>
            <p>state1: {state1}</p>
            <p>state2: {state2}</p>
        </div>
    );
}