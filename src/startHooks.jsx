import React, { useState } from 'react';



const Hooks = () =>{
    const state = useState();
    console.log(state);
    let [count,setCount] = useState(0);

    const IncNum = () =>{
      setCount(count + 1);
  }

  return (
    <>
    <div>
    <h1> {count} </h1>
    <button onClick={IncNum}>click Me</button>
    </div>
    </>

  );
};

export default Hooks;