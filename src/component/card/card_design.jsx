import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card_design(props){
    return(
        
        <div className='Projects'>
        <list>
        <Card sx={{ maxWidth: 345, backgroundColor:'blue',color:"white"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.link}
          alt="green iguana"
        />
        <CardContent >
          <Typography  gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.about}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           TechStack: {props.techStack}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </list>
        </div>
    );
}