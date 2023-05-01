import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardDesign(props){
    console.log(props)
    return(
        <div>
        <div>
        <Card sx={{ width: 300, height:350 }}>
        <CardMedia
          component="img"
          alt="image"
          height="150"
          image={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={props.link}>Github</a>
        </CardActions>
      </Card>
        </div>
        </div>
    );
}