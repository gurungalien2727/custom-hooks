import React, {useState} from 'react';
// import useIncrement  from './useIncrement';
import useFetchUsers from './useFetchUsers';

function App() {
  
  const {status, users, setPage} = useFetchUsers(null);
  return (
    <>
    <h3>Custom Hooks</h3>
    {status === 'fetching' ? <p>Fetching</p> :
    <>
    <button onClick = {()=> setPage((page)=>page+1)}>Change Page </button>
    {console.log(users)}
    </>}
    
    </>
  );
}

export default App;
