import React from 'react';
import FoodCard from './FoodCard';
import Grid from '@mui/material/Grid';


function FoodList({foods}){   
    
const foodList = foods.map((food) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={food.id}>
      <FoodCard food={food} />
    </Grid>
  ));

  return (
    
      <Grid container spacing={3}>
        {foodList}
      </Grid>
    
  );
}

export default FoodList