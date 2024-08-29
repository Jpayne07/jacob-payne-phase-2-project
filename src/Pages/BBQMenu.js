import React  from 'react'
import MenuComponent from '../components/MenuComponent'
import Nav from '../components/Nav'



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