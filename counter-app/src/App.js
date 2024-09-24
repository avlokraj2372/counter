import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100vw] h-[100vh] bg-[#344151] flex flex-col justify-center items-center text-white gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={()=>setCount(count-1)} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
           {count}
        </div>
        <button onClick={()=>setCount(count+1)} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>
      <button onClick={()=>setCount(0)} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>
        Reset
      </button>
    </div>
  );
}

export default App;
