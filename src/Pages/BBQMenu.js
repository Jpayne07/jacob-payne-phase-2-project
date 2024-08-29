import React, {useState} from 'react'
import MenuComponent from '../components/MenuComponent'
import Nav from '../components/Nav'
import FoodList from '../components/FoodList'


function BBQMenu(){
    const URL = 'http://localhost:3000/menu'
    return(
    <div>
        <Nav/>
        <MenuComponent url = {URL} modifier={'BBQ'}/>
    </div>
    )
}
export default BBQMenu