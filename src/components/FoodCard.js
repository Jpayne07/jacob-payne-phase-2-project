import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function FoodCard({ food }){

return(
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="140"
          image={food.imageUrl}
        />{/*JSX equivalent <img src={food.imageUrl}/>*/}
        <CardContent>{/*This is used instead of a div for styling purposes */}
          <Typography gutterBottom variant="h5" component="div">{/*JSX equivalent H5 Tag*/}
            {food.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">{/*JSX equivalent p Tag for styling purposes */}
            {food.description}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{mt: '10px',bgcolor:'maroon', color: 'white', p:'5px',borderRadius: 1, textAlign: 'center'} }>{/*JSX equivalent p Tag for styling purposes */}
            {`$${food.price}`}
          </Typography>{/*JSX equivalent <button/> Tag for styling purposes */}
        </CardContent>
      </CardActionArea>
    </Card>
)

}

export default FoodCard
