import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../styles/Main.css';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }
    /**************************** methods go here ******************************/
    handleInput = (event) => console.log(event.target.value)
    
    /**************************** methods end here ***********************************/
    render() {

        return (
            <div>
                <TextField 
                    className="search"
                    onChange={this.handleInput}
                    variant="outlined"
                    label="Find your Destination!"
                />
            </div>
        )
    }
}