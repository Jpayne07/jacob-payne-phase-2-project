import React, { useState } from 'react'

function AddFood({ style, addNewFood, url }){

const [newFoodName, setFoodName] = useState('')
const [newPrice, setNewPrice] = useState('')
const [newDescription, setNewDescription] = useState('')
const [newImage, setNewImage] = useState('')
const [foodCat, setfoodCat] = useState('')
    
    function addFood(e){
        e.preventDefault()
        const newFood = ({
            category: foodCat,
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
            console.log(data)
            setfoodCat('')
            setFoodName('')
            setNewPrice('')
            setNewDescription('')
            setNewImage('')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

   
    
    return(
        <form style ={style} onSubmit={addFood}>

            <label htmlFor="foodCategory">Choose a category:</label>
            <select name="foodCategory" id="foodCategory" value = {foodCat} onChange={(e)=>setfoodCat(e.target.value)} required>
            <option value="">--Please choose an option--</option>
            <option value="BBQ">BBQ</option>
            <option value="sushi">sushi</option>
            </select>
            <br></br>
            <label htmlFor="foodname">Food name: </label> 
            <input id="foodname" name="name" value={newFoodName} onChange={(e)=>setFoodName(e.target.value)}></input>
            <br></br>
            <label htmlFor="foodPrice"> Food price: </label> 
            <input id="foodPrice" name="price" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}></input>
            <br></br>
            <label htmlFor="foodDescription" > Food Description: </label> 
            <input id="foodDescription" name="description" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}></input><br></br>
            <br></br>
            <label htmlFor="foodImage" > Food image: </label> 
            <input id="foodImage" name="imageURL" value = {newImage} onChange={(e)=>setNewImage(e.target.value)}></input>

            <button type='submit'>Submit</button>
            
        </form>
    )
}

export default AddFood