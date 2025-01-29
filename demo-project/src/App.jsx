import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const AddValue = () => {
    setCount(count + 1)
    console.log(count)
  }
  
  const removeValue = () => {
    if(count === 0){
      setCount(0)
    }else{
      setCount(count - 1)
    }
    console.log(count)
  }


  return (
    <>
      <h1>Counter-Project</h1>
      <h2>Counter: {count}</h2>
      <button
        onClick={AddValue}
      >AddValue</button>
    <button onClick={removeValue}>
      removeValue
    </button>
    </>
  )
}

export default App
