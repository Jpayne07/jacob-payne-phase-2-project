import React from 'react'

function SearchFood({searchedValue, foodSearch, style}){

    return(
        <form>
            <label>Search for food: </label>
            <input onChange={foodSearch} value={searchedValue} style = {style}></input>
        </form>
    )
}

export default SearchFood