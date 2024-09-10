import React, {useState} from 'react'
import Nav from '../components/Nav'
//create a controlled form, we're going add submit, and when submit update counter, and on submit clear form value
//1. Import useState
//2. define state
//3. set controlled form
//4.

function Home(){
    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setCounter((counter) => counter + input.length)

        setInput("")
    }



    return(
        <div>
            <Nav/>
           
            <h1 style = {{padding:'20px', textAlign:"center", fontSize:"30px"}}>WELCOME TO MY MENU</h1>
        </div>
    )
}
export default Home