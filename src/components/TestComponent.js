import React from 'react';

export default class TestComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            myBoolean: false
        }
    }

    myToggle = () => {
        this.state.myBoolean ? this.setState({myBoolean: false}) : this.setState({myBoolean: true});
        console.log(this.state.myBoolean);
    }

    //do an istrue

    

    render() {
        let text = <h1>Jeff is Cool</h1>;
        if (this.state.myBoolean === true) {
            text = <p>Jeff is not so Cool</p>;
        }
        
        return (
            <div>
                
                {text}
                <button onClick={this.myToggle}>Click Me!</button>
            </div>
        )
    }
}