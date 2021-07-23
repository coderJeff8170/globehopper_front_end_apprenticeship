import React from 'react';

export default class ComponentTemplate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            myBoolean: false
        }
        //bindings go here - don't need them if you use arrow functions
        this.myMethodThatRequiresBinding = this.myMethodThatRequiresBinding.bind(this);
    }

    /**************************** methods go here ******************************/
    
    myMethodThatDoesntRequireBinding = () => {
        this.setState({
            myBoolean: !this.state.myBoolean
        })
        console.log(this.state.myBoolean);
    }

    myMethodThatRequiresBinding () {
        this.setState({
            myBoolean: !this.state.myBoolean
        })
        console.log(this.state.myBoolean);
    }
    
    /**************************** methods end here ***********************************/
    render() {
        let text = this.state.myBoolean;
        
        return (
            <div>
                All nested JSX goes here
                <p>{text}</p>
                <button onClick={this.myMethodThatDoesntRequireBinding}>ClickNonBoundFunction</button>
                <button onClick={this.myMethodThatRequiresBinding}>ClickBoundFunction</button>
            </div>
        )
    }
}