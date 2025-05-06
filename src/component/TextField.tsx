import React from "react";
import { useState } from "react";

interface TextFieldProps {
    name: string;
    setName: (newName: string) => void;
}

const TextFIeld: React.FC<TextFieldProps> = ({ name, setName }) => {
    const [tempName, setTempName] = useState(name)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempName(e.target.value)
    }

    const handleClick = () => {
        setName(tempName)
    }

    return(
        <div>
            <input 
            type="text" 
            value={tempName} 
            onChange={handleChange} 
            placeholder="Nama Ngana" />
            <button onClick={handleClick}>submit</button>
        </div>
    )
}

export default TextFIeld