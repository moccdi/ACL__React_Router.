import React from 'react';
import './style.css';
import {string,arrayOf,func} from 'prop-types';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";



const Column = ({image,title,tags,firstParagraph,className,onShare,onLearMore}) => (
    <div>
    <Card className={`card ${className}`}>
        <CardActionArea>
            <CardMedia
                component="img"
                className="media"
                image={image}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {title}
                </Typography>
                <Typography component="p">
                    {title}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={onShare}>
                Share
            </Button>
            <Button size="small" color="primary" onClick={onLearMore}>
                Learn More
            </Button>
        </CardActions>
    </Card>
    </div>
)
Column.propTypes = {
    //user: oneOf(['admin','user','moderator']).isRequired,
    image: string.isRequired, //строка обязательно
    title: string.isRequired,
    //tags: array, //масив не обязательно
    tags: arrayOf(string), //масив не обязательно
    firstParagraph: string.isRequired,
    className: string,
    onShare: func.isRequired,
    onLearMore:func.isRequired,
}
Column.defaultProp = {
    tags:[],
    className: '',
}


export default Column;