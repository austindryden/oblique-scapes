import React from "react";
import CardDeck from "./CardDeck";

export default class ObiApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color:true
        }
    }

    render(){
        return(<div>
            
            <CardDeck />
        </div>)
    }

    
}
