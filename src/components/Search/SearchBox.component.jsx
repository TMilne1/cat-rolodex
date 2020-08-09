import React from 'react'
import './search-box.styles.css'

const SearchBox = ({placeholder, onInputChange}) =>{
    return(
        <div>
            <input className="search"
                type='search'
                placeholder= {placeholder}
                onChange={onInputChange}
            >
            </input>
        </div>
    )

}
export default SearchBox