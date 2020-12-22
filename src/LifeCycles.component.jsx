import {Component } from 'react';
class LifeCycles extends Component {

    constructor(){
        super();
        console.log('Constructor!');
    }

    render(){

        console.log('render');
        return (
            <div>{this.props.text}</div>
        );
        
    }

    componentDidMount(){
        console.log('componentDidMount!');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate!');
    }

    componenetWillUnmount(){
        console.log('componenetWillUnmount!');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate!',nextProps);
        //Conditionally update the component based on whether the specific properties has been updated / not 
        return this.props.text !== nextProps.text;
    }
}
export default LifeCycles;