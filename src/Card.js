import React from "react";

export default function Card({image, strat, colorMode}){
    return(
        <div className="card">
            <img src={image} alt="Noguchi Playscape" style={colorMode ? {}:{filter: "grayscale(100%)"} }></img>
            <h2>{strat}</h2>
        </div>
    )
}
    