import React from "react";
import CardDeck from "./CardDeck";
import About from "./About";

export default class ObiApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colorMode:false,
            aboutMode:false
        }
    }

    render(){
        return(<div>
            <button onClick={this._changeAbout}>{this.state.aboutMode ? "use this project" : "about this project" }</button><br />
            <button style={{display:""}} onClick={this._changeColor}> {this.state.colorMode ? "Black and White" : "      Full Color      "}</button>
            {/* <div style={{display:(this.state.aboutMode ? "":"none")}}><About colorMode={this.state.colorMode} />  </div>
            <div style={{display:(this.state.aboutMode ? "none":"")}}><CardDeck colorMode={this.state.colorMode} /></div> */}
            {this.state.aboutMode && <About handleClick={this._changeAbout} colorMode={this.state.colorMode} />}
            <CardDeck colorMode={this.state.colorMode} />
        </div>)
    }

    _changeAbout = ()=>{
        let newState = {...this.state};
        newState.aboutMode = !newState.aboutMode;
        this.setState(newState);
    }

    _changeColor =()=>{
        let newState = {...this.state};
        newState.colorMode = !newState.colorMode;
        this.setState(newState);
    }    
}
