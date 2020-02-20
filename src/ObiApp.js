import React from "react";
import CardDeck from "./CardDeck";

export default class ObiApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colorMode:true
        }
    }

    render(){
        return(<div>
            <button onClick={this._changeColor}> {this.state.colorMode ? "Black and White" : "      Full Color      "}</button>
            <CardDeck colorMode={this.state.colorMode} />
        </div>)
    }

    _changeColor =()=>{
        let newState = {...this.state};
        newState.colorMode = !newState.colorMode;
        this.setState(newState);
    }    
}
