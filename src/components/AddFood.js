import React, { useState } from 'react'

function AddFood({ style, addNewFood, url }){

const [newFoodName, setFoodName] = useState('')
const [newPrice, setNewPrice] = useState('')
const [newDescription, setNewDescription] = useState('')
const [newImage, setNewImage] = useState('')
    
    function addFood(e){
        e.preventDefault()
        const newFood = ({
            name: newFoodName,
            price: newPrice,
            description: newDescription,
            imageURL: newImage
        })
        
    
        fetch(url,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newFood)
        })
        .then((response) => response.json())
        .then((data) => {
            addNewFood(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

   
    
    return(
        <form style ={style} onSubmit={addFood}>

            <label htmlFor="foodname">Food name: </label> 
            <input id="foodname" name="name" value={newFoodName} onChange={(e)=>setFoodName(e.target.value)}></input>
            
            <label htmlFor="foodPrice"> Food price: </label> 
            <input id="foodPrice" name="price" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}></input>
            
            <label htmlFor="foodDescription" > Food Description: </label> 
            <input id="foodDescription" name="description" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}></input><br></br>
            
            <label htmlFor="foodImage" > Food image: </label> 
            <input id="foodImage" name="imageURL" value = {newImage} onChange={(e)=>setNewImage(e.target.value)}></input>

            <button type='submit'>Submit</button>
            
        </form>
    )
}

export default AddFood