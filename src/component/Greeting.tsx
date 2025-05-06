interface GreetingProps{
    name?: string;
    age?: number;
    gender?: string;
}


const Greeting: React.FC<GreetingProps> = ({name, age, gender}) => {
    return (
        <div>
           <h1>hajimemaste watashi {name}, saya dari Jepun</h1>
           <h2>umurku {age}, kelaminku {gender}</h2>
           <p>nihao annyeong</p>
        </div>
    )
}

export default Greeting;