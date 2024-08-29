import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

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