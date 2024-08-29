import React, {useState, useEffect} from "react";
import FoodList from "./FoodList";
import SearchFood from "./SearchFood";
import AddFood from "./AddFood";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function MenuComponent({url, modifier}) {

  const [foodState, setFood] = useState([])
  const [search, setSearch] = useState('')
  // console.log(foodState)

    useEffect(()=>{ 
    fetch(url)
    .then(r=>r.json())
    .then(data=>{
        const categoryData = data.filter(food=>{
          return food.category === modifier
        })
        console.log(categoryData)
        setFood(categoryData)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])// Disable ESLint for this line

  const foodSearch = (e)=>{
    setSearch(e.target.value.toLowerCase())
  }
  const filteredFood = foodState.filter((food)=> food.name.toLowerCase().includes(search))

  function addFood(newFood){
    setFood([...foodState, newFood])
}

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
      
      <Container sx={{backgroundColor: '#DAB454', padding: '20px', borderRadius: '8px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '20px'}}>{/*could swap for a div*/}
        <Container sx={{bgcolor:'White', textAlign:'center', m:'10px', borderRadius: 1}}>{/*Could swap for a div>*/}
          <Typography gutterBottom variant="h5" component="div" sx={{bgcolor:'White', textAlign:'center', p:'20px', borderRadius: 1}}> Our menu</Typography>
          <SearchFood foodSearch = {foodSearch} searchedValue = {search} style={{margin:'20px'}}/>
          <AddFood style = {{padding:'20px', textAlign:"left"}} addNewFood = {addFood} url={url} />
        </Container>
        <FoodList foods = {filteredFood}/>{/*custom FoodList component*/}
     </Container>
        
        
        
      </div>
    </div>
  );
}

export default MenuComponent;
