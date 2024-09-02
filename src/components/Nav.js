import { NavLink } from 'react-router-dom'

function Nav(){
return(
    <nav style = {{padding:'20px', textAlign:"center", fontSize:"30px"}}>
        <NavLink to ="/">Home   </NavLink>
        <NavLink to ="/bbqMenu">BBQ   </NavLink>
        <NavLink to ="/sushiMenu">Sushi</NavLink>
    </nav>
)
}

export default Nav