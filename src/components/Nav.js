import { NavLink } from 'react-router-dom'


//create a controlled form, we're going add submit, and when submit update counter, and on submit clear form value
//1. Import State
//2. 

function Nav(){
return(
    <div>
    <nav style = {{padding:'20px', textAlign:"center", fontSize:"30px"}}>
        <NavLink to ="/">Home   </NavLink>
        <NavLink to ="/bbqMenu">BBQ   </NavLink>
        <NavLink to ="/sushiMenu">Sushi</NavLink>
    </nav>
    
    </div>
)
}

export default Nav