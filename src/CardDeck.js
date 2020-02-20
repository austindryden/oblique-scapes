import React from "react";
import Card from "./Card";
import axios from "axios";
const api = "https://cors-anywhere.herokuapp.com/http://brianeno.needsyourhelp.org/draw";

export default class CardDeck extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardStack:[{
                strat:"Overtly resist change",
                image:"/images/noguchi42.jpg"    
            }
            ],
            currentCardIndex:0
        }
    }
    render(){
        return(<div className="card-deck">
            <button onClick={this._newCardClick}>draw a card.</button>
            <Card image={this.state.cardStack[this.state.currentCardIndex].image} strat={this.state.cardStack[this.state.currentCardIndex].strat} /><br />
            {this.state.currentCardIndex < (this.state.cardStack.length-1) ? <button onClick={this._backClick}>back</button>:""}
            {/* <button onClick={this._backClick}>back</button> */}
            {(this.state.currentCardIndex!==0) ? <button onClick={this._forwardClick}>forward</button> : "" }
            {/* <button onClick={this._forwardClick}>forward</button> */}
        </div>)
    }
    _backClick = () => {
        let newState={...this.state};
        if(newState.currentCardIndex < (newState.cardStack.length-1)){
            newState.currentCardIndex +=1;
        }
        this.setState(newState);
        console.log("heres the back thing!!!!!!!!");
    }

    _forwardClick = async ()=> {
        let newState={...this.state};
        if(newState.currentCardIndex > 0){
            newState.currentCardIndex -=1;
        }
        this.setState(newState);
        console.log("Heres the forward thing!");
    }
    _newCardClick = async () =>{
        let newStrat = await axios.get(api, {headers:{'X-Requested-With':'XMLHttpRequest'}});
        let newCard = {strat:newStrat.data.strategy, image:"/images/noguchi" + String(Math.ceil(Math.random()*55)) + ".jpg"};
        let newState = {...this.state};
        newState.cardStack = [...this.state.cardStack];
        newState.cardStack.splice(newState.currentCardIndex,0,newCard);

        console.log(newState.currentCardIndex);
        this.setState(newState);
    }
}