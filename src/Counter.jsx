import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count+1); 
    }
    const handleNegativeCount = () => {
        setCount(count -1);
    }
    return (
        <div style={{border:"2px solid yellow", padding: "20px"}}>
            <h1>The Live Counter = {count}</h1>
            <button style={{marginRight: "20px"}} onClick={handleCount}>Positive-Count</button>
            <button onClick={handleNegativeCount}>Negative-Count</button>
        </div>
    )
}