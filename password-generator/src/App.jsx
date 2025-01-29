import './index.css';
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const bgimage = 'https://static.vecteezy.com/system/resources/previews/002/844/147/non_2x/closed-padlock-on-digital-background-cyber-security-free-vector.jpg';
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copy")

  
  // useRef
  const passwordRef = useRef(null)
  
  const passworGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    
    for(let i = 1; i <= length; i++){
      let indx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(indx)
    }
    
    setPassword(pass)
    
  }, [length, numberAllowed, charAllowed, setPassword])
  
  
  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, password.length);
  
      document.execCommand("copy");
  
      setCopyText("Copied!");
  
      setTimeout(() => {
        setCopyText("Copy");
      }, 1000);
    }
  }, [password]);
  
  
  

  useEffect(() => {
    passworGenerator()
  },[length, numberAllowed, charAllowed, passworGenerator])

  return (
    <>
      <div className='items-center justify-center'
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full max-w-md text-center shadow-md rounded-lg px-4 py-3 bg-green-400 font-semibold">
          <h1 className='flex shadow rounded-lg justify-center'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3 bg-amber-50'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500'>
              {copyText}
            </button>
          </div>
          <div className='flex text-sm gap-x-2 '>
            <div className='flex items-center gap-x-1'>
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) =>{
                  setLength(e.target.value)
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id="numberInput"
                onClick={() =>
                  setNumberAllowed((prev) => !prev)
                }
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id="characterInput"
                onClick={() =>
                  setCharAllowed((prev) => !prev)
                }
              />
              <label htmlFor="numberInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
