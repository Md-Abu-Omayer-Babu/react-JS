import { useState } from "react"
import "./index.css"

function App() {
  const [color, setColor] = useState("white")

  return (
    <div 
    onClick={() => setColor("white")} 
    className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 px-3 py-2 rounded-1xl">
          <h1>Click any button to change the display color!!!</h1>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 px-3 py-2 rounded-3xl">
            <button 
              onClick={(event) => {
                event.stopPropagation(event)
                setColor("red")
              }} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}>
              Red
            </button>

            <button 
              onClick={(event) => {
                event.stopPropagation(event)
                setColor("green")
              }} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}>
              Green
            </button>

            <button 
              onClick={(event) => {
                event.stopPropagation(event)
                setColor("blue")
              }} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}>
              Blue
            </button>

            <button 
              onClick={(event) => {
                event.stopPropagation(event)
                setColor("yellow")
              }} 
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor:"yellow"}}>
              Yellow
            </button>

            <button 
              onClick={(event) => {
                event.stopPropagation(event)
                setColor("purple")
              }} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"purple"}}>
              Purple
            </button>
            
            <button 
              onClick={(event) => {
                event.stopPropagation(event)
                setColor("lime")
              }} 
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor:"lime"}}>
              Lime
            </button>

            <button 
              onClick={(event) => {
                event.stopPropagation(event)
                setColor("violet")
              }} 
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor:"violet"}}>
              Violet
            </button>


          </div>
        </div>
    </div>
  )
}

export default App
