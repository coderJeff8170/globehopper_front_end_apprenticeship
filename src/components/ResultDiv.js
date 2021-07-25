import React from 'react';
import DisplayCard from './DisplayCard.js';
import '../styles/Main.css';

export default class ResultDiv extends React.Component {
    constructor(props){
        super(props)
    }
    
    
    render() {
// TODO: if this.props.items.length===1 && this.props.items[0].hasOwnProperty('isCapital'){
//  return a city display card - else return a regular display card
//}

        let results = this.props.items.map(
            (item, key) => {
                return <DisplayCard 
                    key={key}
                    item={item}
                    handleSelection={this.props.handleSelection}
                />
            }
        )

        return (
            <div className="resultDiv">
                {results}
            </div>
        )
    }
}
/*
styles = {
    root: {
        
    }
    title: {

    }
}
export default withStyles(styles)(ResultDiv);

usage - className={this.props.classes.root} as a prop on the component
*/