import React, {useState, useEffect} from 'react';

const useFetchUsers = () =>{

console.log('Fetch User component');
 
const [page, setPage] = useState(1);
const [url,setUrl] = useState(`https://randomuser.me/api/?page=${page}&results=10`);
const [users, setUsers] = useState([]);
const [status, setStatus] = useState('fetching');
console.log(page)


useEffect(()=>{
   setStatus('fetching');
   fetch(url)
   .then(response => response.json())
   .then(jsonResponse=>{
       setUsers(jsonResponse.results);
       setStatus('fetched');
   })
}, [])

return {status, users, setPage};

}

export default useFetchUsers;