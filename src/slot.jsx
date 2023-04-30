import React from 'react';


const SlotMachine =(props)=>{
     let x = props.x;
     let y =  props.y;
     let z = props.z;

      if( x===y && y===z)
      {
        return(
            <>
            <div className='slot-machine'>
              <h1>
                {x} {y} {z}
              </h1>
              <h1> This is matching....</h1>
              <hr />
            </div>
            </>
        )
      }
      else
      {
        return(
            <>
            <div className='slot-machine'>
              <h1>
                {x} {y} {z}
              </h1>
              <h1> This is not matching....</h1>
              <hr />
            </div>
            </>
        )
      }
}

const Slot = () =>{
 
    return (
        <>
        <h1 className='heading_style'> 🎰 WELCOME TO 🎰<span style={{color:"orange"}}>Slot Machine</span> 🎰</h1>

            <div className='sloting'>
            <SlotMachine x='😄' y='🏩' z='😄'  />
            <SlotMachine x='😄' y='😄' z= '😅'/> 
            <SlotMachine x='👩‍❤️‍👩' y='😄' z='😈' />  
            <SlotMachine x='😄' y='🥉' z='😄'/>  
            </div>
          
        </>
    )
};

export default  Slot;