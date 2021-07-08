import React from 'react'
import "../scss/SearchBox.scss"

const SearchBox = ({onSearchChars}) => {
    return (
        <div className="searchbox__container">
            <input className="searchbox__input index" type="text" placeholder="Star Wars Characters" onChange={(e) => onSearchChars(e.target.value)}/>
        </div>
    )
}

export default SearchBox
