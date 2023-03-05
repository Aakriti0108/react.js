//  ###video9###

// import React from 'react';
// import ReactDOM from 'react-dom'

// ReactDOM.render(
//   <>
//   <h1>Hello World</h1>
//   <p>plz subscribe </p>
//   </>,
//   document.getElementById("root")
// );


// ###video10##

// import React from 'react';
// import ReactDOM  from 'react-dom';

// ReactDOM.render(
//   <div>
//   <h1>list of websites</h1>
//   <p>here there r</p>
//   <ol>
//   <li>The Dark</li>
//   <li>My Dark</li>
//   </ol>
//   </div>,
//   document.getElementById("root")
// );

//  ###video11##

// import React from "react";
// import ReactDOM from "react-dom";

// const flname = "vinod"
// ReactDOM.render(
//   <>
//   <h1>my name is {flname}</h1>
//   <p> my lucky number is {5+5}</p>
//   </>,document.getElementById("root")
// );

// ### video12 ##

// import React from "react"
// import ReactDOM from "react-dom"

// const flname = "vinod"
// const lname = "thapa"
// const x = 2;
// const y = 3;
// ReactDOM.render(
//   <>
//   <h1>{`my name is ${flname} ${lname}`}</h1>
//   <p>{`my lucky name is ${x+y}`}</p>
//   </>,document.getElementById("root")
// );


 // cHALLENGE 2

// import React from "react"
// import ReactDOM from "react-dom"

// const name = "Aakriti"
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// const currDateTime = new Date().toLocaleString();

// ReactDOM.render(
//   <>
//   <h1>my name is {name}</h1>
//   <p>currDate is {currDate}</p>
//   <p>currTime is = {currTime}</p>
//   <p>currDateTime is = {currDateTime}</p>
//   </>,document.getElementById("root"));

//VIDEO 13

// import React from 'react';
// import ReactDOM  from 'react-dom';

// const name = 'vinod';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/200/300";
// const links = "https://www.google.com/";

// ReactDOM.render(
//       <>
//       <h1 contentEditable="true">my name is {name}</h1>
//       <img src={img1} alt="random Images"/>
//       <img src={img2} alt="random Images"/>
//       <a href={links} target="_blank">
//       <img src={img3} alt="random Images"/>
//       </a>
//       </>
//   , document.getElementById("root")
// );

// video 14 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const name = 'vinod';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";
// const links = "https://www.google.com/";

// ReactDOM.render(
//   <>
//         <h1 className="heading">my name is {name}</h1>
       
//         <div className='img_div'>
//         <img src={img1} alt="random Images"/>
//         <img src={img2} alt="random Images"/>
//         <a href={links} target="_blank">
//         <img src={img3} alt="random Images"/>
//         </a>
//         </div>
//   </>
//   ,document.getElementById("root"));

// video 15

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const name = 'vinod';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";
// const links = "https://www.google.com/";

// ReactDOM.render(
//   <>
//         <h1 className="heading">my name is {name}</h1>
       
//         <div className='img_div'>
//         <img src={img1} alt="random Images"/>
//         <img src={img2} alt="random Images"/>
//         <a href={links} target="_blank">
//         <img src={img3} alt="random Images"/>
//         </a>
//         </div>
//   </>
//   ,document.getElementById("root"));


// video 16

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const name = 'vinod';
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";
// const links = "https://www.google.com/";


// const heading=
//   {color:'#fa9191',
//   textAlign: 'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px #ffe9c5',
//   margin:'50px 0',
//   fontFamily: "'Josefin Sans', sans-serif'"
// }

// ReactDOM.render(
//   <>
//         <h1 
//         style={heading}>my name is {name} </h1> 
//         <div className='img_div'>
//         <img src={img1} alt="random Images"/>
//         <img src={img2} alt="random Images"/>
//         <a href={links} target="_blank">
//         <img src={img3} alt="random Images"/>
//         </a>
//         </div>
//   </>
//   ,document.getElementById("root"));


// challenge 3

// import React from 'react';
// import ReactDOM  from 'react-dom';
// import './index.css';

// let currDate = new Date(2020,5,5,17).getHours();


// let greeting ="";
// const cssStyle = {};

//             if(currDate >=1 && currDate<12)
//             {
//                   greeting = 'Good Morning ';
//                   cssStyle.color = "blue";
//             }

//             else if(currDate >=12 && currDate<19)
//             {
//             greeting = 'Good AfterNoon';
//             cssStyle.color = "green";
//             }
//             else
//             {
//               greeting = 'Good Night';
//               cssStyle.color = 'pink';
//             }
      
//    ReactDOM.render(<h1 style={{color:"red"}}>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>,document.getElementById("root"));

// video 18

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

      ReactDOM.render(
            <App/>
            ,document.getElementById("root"));
