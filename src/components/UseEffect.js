import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
    const [count, setcount] = useState(0);

    useEffect(()=>{
        setcount(count+1);
        
        return () =>{
            console.log("unmounting this component");
        }
    },[])

    useEffect(()=>{
        console.log(count);
    },[count])

  return (
    <div>render at first {count} time</div>
  )
}

export default UseEffect