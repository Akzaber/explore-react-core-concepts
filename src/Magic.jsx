import { useState } from "react"

export default function Magic(){
    const [magic, setMagic] = useState(true);
    const magicStyle = {
        border: "5px solid skyBlue",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px"
    }
    const handleMagic = () => {
        setMagic(!magic);
    }
    return (
        <div style={magicStyle}>
            <h1>{magic?"Bangladesh":"Pakistan"}</h1>
            <button onClick={handleMagic}>Magic-Button</button>
        </div>
    )
}