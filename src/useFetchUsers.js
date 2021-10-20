import React, {useState, useEffect} from 'react';

const useFetchUsers = (url) =>{

    console.log('Fetch User component');
    console.log(url);

const [users, setUsers] = useState([]);
const [status, setStatus] = useState('fetching');


useEffect(()=>{
   setStatus('fetching');
   fetch(url)
   .then(response => response.json())
   .then(jsonResponse=>{
       setUsers(jsonResponse.results);
       setStatus('fetched');
   })
}, [])

return {status, users};

}

export default useFetchUsers;