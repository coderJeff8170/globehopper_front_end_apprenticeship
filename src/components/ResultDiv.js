import React from 'react';
import DisplayCard from './DisplayCard.js';
import '../styles/Main.css';

export default class ResultDiv extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        // if countries, results = this.props.countries
        // if cities, results = this.props.cities

        let results = this.props.items.map(
            (item) => {
                //console.log(item.name);
                return <DisplayCard 
                    itemName={item.name}
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