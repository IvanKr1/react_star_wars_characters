import React from 'react'
import "../scss/Header.scss"
import StarWarsLogo from "../assets/star_wars.png"

const Header = () => {
    return (
        <div className="header__container stars twinkling">
            <img src={StarWarsLogo} alt="star wars logo" width="150px" height="90px"/>
            {/* <h1 >Star Wars Characters</h1> */}
        </div>
    )
}

export default Header
