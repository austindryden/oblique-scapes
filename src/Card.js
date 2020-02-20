import React from "react";

export default function Card({image, strat}){
    return(
        <div className="card">
            <img src={image} alt="Noguchi Playscape"></img>
            <h2>{strat}</h2>
        </div>
    )
}
    