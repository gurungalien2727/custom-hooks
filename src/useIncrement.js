import React, {useState} from 'react';

const useIncrement = (c) =>{

const [count, setCount] = useState(c);

const increment = () =>{
    setCount(count+1);
}

return {count, increment};

}

export default useIncrement;