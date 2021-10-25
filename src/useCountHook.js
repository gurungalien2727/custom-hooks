import React, {useState} from 'react';

const useCountHook = () =>{
const [count, setCount] = useState(0);

return [count, setCount];

}

export default useCountHook;