import { useState } from 'react'
import './App.css'
import Counter from './component/Counter'
import Greeting from './component/Greeting'
import TextFIeld from './component/TextField'
function App() {
  const [name, setName] = useState('')       
  
  return (
    <>
      <div>
        <Greeting name={name} age={19} gender={'topdom'} />
        <TextFIeld name={name} setName={setName} />
        <Counter />
      </div>
    </>
  )
}
export default App
