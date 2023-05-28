import React from "react";
import Sdata from "./Sdata";
import Card from "./Card"

const NetFlix = () =>{
    return(
        <Card
        key={Sdata[2].id}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}
        />
    );   
}


export default NetFlix;