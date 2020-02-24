import React from "react";

export default function About({handleClick, colorMode}){
    // let colorStyle = colorMode ? {"backgroundColor" :"rgba(68,119,174,0.6)"} : {"backgroundColor" :"rgba(0,0,0,0.4)"};
    return(<div onClick={handleClick} className="about-popover" style={colorMode ? {"backgroundColor" :"rgba(68,119,174,0.6)"} : {"backgroundColor" :"rgba(0,0,0,0.4)"}}>
        <p>heres some words in the About Component!!!</p>
        </div>)
}