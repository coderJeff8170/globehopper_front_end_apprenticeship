import React from 'react';
import DisplayCard from './DisplayCard.js';
import '../styles/Main.css';

export default class ResultDiv extends React.Component {
    constructor(props){
        super(props)
    }


    render() {


        let results = this.props.items.map(
            (item, key) => {
                return <DisplayCard 
                    key={key}
                    itemName={item.name}
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