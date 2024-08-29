import React from 'react'
import Nav from '../components/Nav'
import MenuComponent from '../components/MenuComponent'

function SushiMenu(){
    const URL = 'http://localhost:3000/menu'
    return(
    <div>
        <Nav/>
        <MenuComponent url = {URL} modifier={'sushi'}/>
    </div>
    )
}
export default SushiMenu