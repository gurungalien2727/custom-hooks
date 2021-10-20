import React, {useState} from 'react';
// import useIncrement  from './useIncrement';
import useFetchUsers from './useFetchUsers';

function App() {
  
  const [page, setPage] = useState(1);
  const {status, users} = useFetchUsers(`https://randomuser.me/api/?page=${page}&results=10`);
  return (
    <>
    <h3>Custom Hooks</h3>
    {status === 'fetching' ? <p>Fetching</p> :
    <>
    <p>Page : {page}</p>
    <button onClick = {()=> setPage((page)=>page+1)}>Change Page </button>
    {console.log(users)}
    </>}
    
    </>
  );
}

export default App;
