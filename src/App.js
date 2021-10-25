import React, {useState} from 'react';
// import useIncrement  from './useIncrement';
//import useFetchUsers from './useFetchUsers';
import useCountHook from './useCountHook';

function App() {
  
  const [count, setCount] = useCountHook();
  
  return (
    <>
    <h3>Custom Hooks</h3>
    <p>Count: {count}</p>
    <button onClick = {()=> setCount(count => count + 1)}>Click</button>
    
    </>
  );
}

export default App;
