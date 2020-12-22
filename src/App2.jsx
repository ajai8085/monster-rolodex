import { Component } from "react";
import './App.css';

class App2 extends Component{

    constructor(props){
        super(props);
        this.state= {
            meaningOfLife :47 + this.props.increment // Inorder to use this.props , we must use the props in constructor and pass it to super 
        }
    }
    handleClick = ()=>{
        //this.setState({meaningOfLife: this.state.meaningOfLife+1},()=>{console.log('Async completed')});
        this.setState((preState,prevProps)=> {
            return {meaningOfLife: preState.meaningOfLife+prevProps.increment}
        });
    }
    render(){
        return (
            <div className="App">
                <button onClick={this.handleClick}>Update state</button>
                <p>{this.state.meaningOfLife}</p>
            </div>
        );
    }
}
export default App2;