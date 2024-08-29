import React, {useState} from 'react'
import MenuComponent from '../components/MenuComponent'
import Nav from '../components/Nav'


function Home(){
    return(
        <div>
            <Nav/>
            <h1 style = {{padding:'20px', textAlign:"center", fontSize:"30px"}}>WELCOME TO MY MENU</h1>
            </div>
    )
}
export default Home