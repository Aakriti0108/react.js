// import React from 'react';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

// function App()
// {
//     return (
//     <div>
//     <Heading />
//     <Para />
//     <List />
//     </div>
           
        
//     );
// }

// export default App;

//mini project

// import React from "react";

// function App()
// {
//     let currDate = new Date();
//     currDate = currDate.getHours();
//     let greeting = '';
//     const cssStyle = {};
//     if(currDate > 1 && currDate < 12)
//     {
//         greeting = "Good Morning";
//         cssStyle.color = "pink";

//     }
//     else if (currDate >= 12 && currDate < 20)
//     {
//         greeting = "Good AfterNoon ";
//         cssStyle.color = "orange";

//     }
//     else{
//         greeting = "Good Night";
//         cssStyle.color = "red";

//     }

//     return (
//         <React.Fragment>
//         <div>
//         <h1> Hello Sir , <span style = {cssStyle}>{greeting}</span>  </h1>
//         </div>
//         </React.Fragment>
//     );
// } 

// export default App;

// video 20

// 1st part 
// const youtuber = "Thapa Technical";
// export default youtuber;

//2nd part
// const youtuber = "Thapa Technical";
// const favProg = "React.js";

// function myName()
// {
//    let name = 'vinod';
//    return name;
// }

// function myNames()
// {
//     let name = 'thapa';
//     return name;
// }

// export default youtuber;
// export {favProg,myName,myNames};


// 3rd part
// const youtuber = "Thapa Technical";
// const favProg = "React.js";

// function myName()
// {
//    let name = 'vinod';
//    return name;
// }

// function myNames()
// {
//     let name = 'thapa';
//     return name;
// }

// export default youtuber;
// export {favProg,myName,myNames};


// video 21
// import React from 'react';

// import {add,sub,mult,div} from './Calc';

// function App()
// {
//    return (
//     <div>
//     <ul>
//     <li>{add(40,4)}</li>
//     <li>{sub(40,4)}</li>
//     <li>{mult(40,4)}</li>
//     <li>{div(40,4)}</li>
//     </ul>
//     </div>
//        );
// }

// export default App;

// video 26

// import React from "react";
// import Amazon from "./amazon";
// import Netflix from "./netflix"

// const favSeries = 'Amazon`';
// const FavS = ()=>{
// if(favSeries === "netflix")
// {
//    return <Netflix />;
// }
// else
// {
// return <Amazon />
// }
// }


// const App = () =>(
//     <>
//     <h1 className ="heading_style"> List of all 5 NetFlex</h1>
//     <FavS />
//     </>
// )

// export default App;

// video 27

// import React from "react";
// import Amazon from "./amazon";
// import Netflix from "./netflix";

// let FavSeries ="netflix";
// const App = () => (
//     <>
//     <h1 className="heading_style"> LIST OF 5 Netflix Series in 2020</h1>

//     {FavSeries === "netflix" ? <Netflix /> : <Amazon />}
//     </>
// );

// export default App;

// video 29

// import React from "react";

// const App = () =>{
//     let x ="Aakriti 😃";
    
//     return <h1 style={{color:"yellow"}}> My Name is Miss.<span style={{color:"green"}}>{x}</span></h1>
// }
// export default App;

// video 28

// import React  from "react";

// const App = () =>{
//    return (
//             <>
            
//             </>
//    );
// };

// export default App;


// import React, { useState } from "react";

// const App = () =>{
//     const purple = "pink";
//     const clickMe = 'Click Me';
//     const [bg, setBg] = useState(purple);
//     const [name, setName] = useState(clickMe);

//     const bgChange = () =>{
//         let newbg = '#34495e';
//         let newName = 'ounch';
//         setBg(newbg);
//         setName(newName);
//         // console.log('clicked!!'); 
//     }

//     const bgChanges = () =>{
//         let newbg = 'yellow';
//         let newName = 'wow';
//         setBg(newbg);
//         setName(newName);
//         // console.log('clicked!!'); 
//     }

//     return(
//         <>
//         <div style={{ backgroundColor: bg }}>
//             <button onClick={bgChange} onDoubleClick={bgChanges}> {name} </button>
//         </div>
//         </>
//     )
// }

// export default App;

