import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import { makeStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

export default class CityDetailCard extends React.Component {

    render() {
        let isCapital = this.props.item.capital?"yes":"no";
        console.log(this.props.item);
        return (
            <Card >
                    <CardHeader title={<h1>{this.props.item.name}</h1>}></CardHeader>
                    <CardContent>
                        <h3>Capital: {isCapital}</h3>
                        <h3>Places to Go:</h3>
                        <ul>
                            <li>{this.props.item.firstlandmark}</li>
                            <li>{this.props.item.secondlandmark}</li>
                            <li>{this.props.item.thirdlandmark}</li>
                        </ul>
                        
                    </CardContent>
            </Card>
        )
    }
}