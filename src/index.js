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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

//       ReactDOM.render(
//             <App/>
//             ,document.getElementById("root"));

//mini project

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(<App/>,document.getElementById("root"));

// video 20

// 1st part
// import React from "react";
// import ReactDOM  from "react-dom";
// import youtuber from "./App";

// ReactDOM.render(
//     <div>
//     <ol>
//     <li>Thapa</li>
//     <li>{youtuber}</li>
//     </ol>
//     </div>,document.getElementById("root")
// );

//2nd part
// import React from "react";
// import ReactDOM from "react-dom";
// import youtuber,{favProg,myName,myNames} from "./App";

// ReactDOM.render(
//     <React.Fragment>
//     <ol>
//     <li>Thapa</li>
//     <li>{youtuber}</li>
//     <li>{favProg}</li>
//     <li>{myName()}</li>
//     <li>{myNames()}</li>
//     </ol>
//     </React.Fragment>,document.getElementById("root")
// );
 
//3rd part
// import React from "react";
// import ReactDOM from "react-dom";
// import * as ques from "./App";

// ReactDOM.render(
//     <React.Fragment>
//     <ol>
//     <li>Thapa</li>
//     <li>{ques.default}</li>
//     <li>{ques.favProg}</li>
//     <li>{ques.myName()}</li>
//     <li>{ques.myNames()}</li>
//     </ol>
//     </React.Fragment>,document.getElementById("root")
// );

// video 21
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

//     ReactDOM.render(
//        <App />,document.getElementById("root")
//     );


// video 22

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Card'
// ReactDOM.render(
//    <React.Fragment>
//    <Card imgsrc="https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//        title ="A bag "
//        sname= "DARK"  
//        link= "https://unsplash.com/photos/oCXVxwTFwqE"/>
//    <Card imgsrc="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60h.com/photos/nvQemFKRBUo"
//    title ='A blue bag' 
//    sname ="Blue"
//    link ='https://unsplash.com/photos/nvQemFKRBUo' />
//    <Card  imgsrc="https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//     title = 'A Pink Bag'
//     sname = "pink" 
//     link ="https://unsplash.com/photos/N8CwCRjp0LA"/>
//    </React.Fragment>,document.getElementById("root"));


// video 23 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Sdata from './Sdata';
// import Card from './Card';
// import './index.css'

// ReactDOM.render(
//     <React.Fragment>
//     <h1 className='heading_style'>List All the bags </h1>
//     <Card 
//     imgsrc={Sdata[0].imgsrc}
//     title={Sdata[0].title}
//     sname={Sdata[0].sname}
//     link={Sdata[0].link}
//     />
//     <Card 
//     imgsrc={Sdata[1].imgsrc}
//     title={Sdata[1].title}
//     sname={Sdata[1].sname}
//     link={Sdata[1].link}
//     />
//     <Card 
//     imgsrc={Sdata[2].imgsrc}
//     title={Sdata[2].title}
//     sname={Sdata[2].sname}
//     link={Sdata[2].link}
//     />
//     <Card 
//     imgsrc={Sdata[3].imgsrc}
//     title={Sdata[3].title}
//     sname={Sdata[3].sname}
//     link={Sdata[3].link}
//     />
//     <Card 
//     imgsrc={Sdata[4].imgsrc}
//     title={Sdata[4].title}
//     sname={Sdata[4].sname}
//     link={Sdata[4].link}
//     />
//     </React.Fragment>
    
//     ,document.getElementById("root"));


// video 24 1st 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Card';
// import Sdata from './Sdata';
// import './index.css'
// function ncard(val)
// {
//     console.log(val);
//    return(
//     <Card 
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//     />)
// }

// ReactDOM.render(<React.Fragment>
//     <h1 className="heading_style">List ALL 5 Bags</h1>
//     {Sdata.map(ncard)}
//     </React.Fragment>,document.getElementById("root"));

// 2nd video

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './Card';
// import Sdata from './Sdata';
// import './index.css';

// ReactDOM.render(
//     <React.Fragment>
//     <h1 className='heading_style'>List of all Lists</h1>
//     {Sdata.map((val)=>
//     <Card
//         key={val.id}
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         link={val.link}
//         />)}
//     </React.Fragment>,document.getElementById("root"));
 

// video 26

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from "./App";

// ReactDOM.render(
//     <App/>,document.getElementById("root"));

// video 27

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// import Slot from "./slot";

// ReactDOM.render(<Slot />,document.getElementById("root"));


// video 30

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';

ReactDOM.render(
    <React.Fragment>
    <h1 className='heading_style'>List of all Lists</h1>
    {Sdata.map((val)=><Card
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />)}
    </React.Fragment>,document.getElementById("root"));
 