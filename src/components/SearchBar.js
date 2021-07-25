import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/Main.css';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props)
    }

    handleInput = (event) => {
        this.props.handleInput(event.target.value);
    }

    render() {

        return (
            <div>
                <TextField 
                    className="search"
                    onChange={this.handleInput}
                    variant="outlined"
                    InputProps={{
                        startAdornment: <SearchIcon />
                    }}
                    placeholder="Find your Destination!"
                />
            </div>
        )
    }
}