import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
    // console.log(counter)
  }
  
  const removeValue = () => {
    if(counter === 0){
      setCounter(0)
    }else{
      setCounter(counter - 1)
    }
    console.log(counter)
  }

  return (
    <>
      <h1>0-2 Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
