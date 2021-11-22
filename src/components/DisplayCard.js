import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { withStyles, makeStyles, theme } from '@material-ui/core/styles';
import '../styles/Main.css';

// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   };
const styles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red[500]',
  },
}));

class DisplayCard extends React.Component {


    
    constructor(props){
        super(props)
    }

    //when user clicks a card, send details to state for focused display
    handleClickOnDisplayCard = (event) => {
        event.stopPropagation();
        this.props.handleClickOnDisplayCard(this.props.item);
    }

    render() {
        return (
            <Card onClick={this.handleClickOnDisplayCard}>
                    <CardHeader title={<h1>{this.props.item.name}</h1>}></CardHeader>
                    <CardMedia
                        image={this.props.item.image}
                        title={this.props.item.name}
                    />
                    <CardContent>
                        {/* <p>itemDetails here</p> */}
                        <img className="cardImage" src={this.props.item.image} alt={`picture of ${this.props.item.name}`}/>
                    </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(DisplayCard);

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