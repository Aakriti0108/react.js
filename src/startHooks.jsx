// video 31

// import React, { useState } from 'react';

// const Hooks = () =>{
//     const state = useState();
//     console.log(state);
//     let [count,setCount] = useState(0);

//     const IncNum = () =>{
//       setCount(count + 1);
//   }

//   return (
//     <>
//     <div>
//     <h1> {count} </h1>
//     <button onClick={IncNum}>click Me</button>
//     </div>
//     </>

//   );
// };

// export default Hooks;

// video 32

// import React, { useState } from 'react';

// const Hooks =()=>{
//   let newTime = new Date().toLocaleTimeString();
//   const [ctime,setCtime]=useState(newTime);


// const UpdateTime = () =>{
//    newTime = new Date().toLocaleTimeString();
//    setCtime(newTime);
// }
// return(
//   <>
//   <h1>{ctime}</h1>
//   <button onClick={UpdateTime}>GET TIME</button>
//   </>
// )
// }

// export default Hooks;

// video 33

import React, { useState } from 'react';

const Hooks = () =>{
  let time = new Date().toLocaleTimeString();
  const [ctime,setCtime ] = useState(time);
  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime,2000);

<<<<<<< HEAD
  return(
    <>
    <h1>{ctime}</h1>
    </>
  )


}
=======
  return (

    <div>
    <h1> {count} </h1>
    <button onClick={IncNum}>click Me</button>
    </div>
    
  );
};
>>>>>>> d9a9886a221a387a0f034522abecb5491df678ee

export default Hooks;