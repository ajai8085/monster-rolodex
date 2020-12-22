import { Component } from 'react';
import './App.css';
import LifeCycles from './LifeCycles.component';


class App3 extends Component{

    constructor(){
        super();
        this.state={
            showChild:false,
            text:'_updated',
            message:'_message'
        };
    }

    handleUpdateText= ()=>{
        this.setState((state)=>({text:state.text+'_updated'}));
    };

    handleToggleLifeCycle= ()=>{
        this.setState((prevState,prevProps)=>({showChild: !prevState.showChild}));
    };

    handleUpdateMessage = ()=>{
        this.setState(state=> ({message:state.message+'_updMsg'}));
    };

    render(){
        return (<div className='App'>            
            <button onClick={this.handleToggleLifeCycle}>Toggle Lifecycle</button>
            <button onClick={this.handleUpdateText}>Update Text</button>            
            <button onClick={this.handleUpdateMessage}>Update Message</button>            
            <div>{this.state.message}</div>
            {this.state.showChild?<LifeCycles text={this.state.text}/> : null}
        </div>);
    }
}

export default App3