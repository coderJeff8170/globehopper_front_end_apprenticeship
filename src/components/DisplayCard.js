import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

export default class DisplayCard extends React.Component {
    constructor(props){
        super(props)
    }

    handleCardDetail = (event) => {
        event.stopPropagation();
        //console.log(this.props.itemName);
        this.props.handleSelection(this.props.item);//pass this.props.object up here? through param?
    }

    render() {
        // figure out whether this is 
        return (
            <Card onClick={this.handleCardDetail}>
                    <CardHeader title={<h1>{this.props.itemName}</h1>}></CardHeader>
                    <CardContent>
                        <p>itemDetails here</p>
                    </CardContent>
            </Card>
        )
    }
}

/*
<Card className={classes.root}>
                <CardHeader title={<h1>{this.props.country.name}</h1>}></CardHeader>
                <CardContent>
                    <a>
                        <h1>{this.props.country.name}</h1>
                        <h1>{this.props.country.population}</h1>
                    </a>
                </CardContent>
            </Card>
*/