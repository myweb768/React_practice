import { useRef, useState, useEffect } from 'react'
// import './App.css'

function App() {
  const inputRef = useRef(null);
  //For Input Operation
  function handelInputClick(){
    inputRef.current.value = "";
  }

  //For Counter
  // const countRef = useRef(0)
  const [count, setCount] = useState(0);
  function handelCounterClick(){
    // countRef.current ++;
    // console.log(countRef.current);
    setCount(count + 1);
  }

  function handelResetClick(){
    setCount(0)
  }

  //Text Showing
  const [text, setText] = useState('');
  function handelTextShow(){
    setText(text)
}

//Test UseEffect
useEffect(()=>{
  if(text == "") return;
  // console.log("React UseEffect!!")
      let timer = setInterval(()=>{
    console.log("Timmer Running...")
  }, 1000)

  return (()=>{
    console.log("Cleanup running")
    clearInterval(timer)
  })
},[text]);

  return (
    <>
  <div className='border-2 my-3 rounded-md border-blue-500 flex flex-col' >
    <h2>Input Test</h2>
    <input ref = {inputRef} className="p-4 m-2" type="text"  placeholder='Text Here...'/>    
    <button onClick={handelInputClick} className='bg-green-600 text-white p-3 m-3 rounded-md '>Click</button>
  </div>
    
    <div className='border-2 my-3 rounded-md border-blue-500 flex flex-col' >
      <h2>Counter Test</h2>
    <h1>{count}</h1>
    <div className='flex'>
    <button onClick={handelCounterClick} className='bg-green-600 text-white w-1/2 p-3 m-3 rounded-md '>Incrise(+)</button>
    <button onClick={handelResetClick} className='bg-yellow-600 text-white w-1/2 p-3 m-3 rounded-md '>Reset(⟳)</button>
    </div>    
  </div>
  <div className='border-2 my-3 rounded-md border-blue-500 flex flex-col' >
    <h2>Input Text Showing</h2>
    <input value ={text} onChange={(event)=>setText(event.target.value)}   className="p-4 m-2" type="text"  placeholder='Text Here...'/>    
    <h2 className='overflow-hidden text-ellipsis'>{text}</h2>
  </div>
    </>
  )
}

export default App;
