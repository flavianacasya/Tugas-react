import { useState } from "react";

const Counter: React.FC = () => {
    const [like, setLike] = useState(0);

    const handleLike = () => {
        setLike(like+1);
    }


    return (
        <div>
            <button onClick={handleLike}>likes : {like}</button>
        </div>
    )
}

export default Counter;