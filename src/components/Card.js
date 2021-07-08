import React from 'react'
import "../scss/Card.scss"
import CardList from './CardList'

const Card = ({swCharacters}) => {

    let classNames = swCharacters.length > 3 ? "card__container": "card__container-second"

    return (
        <div className={classNames}>
            {swCharacters.map((character) => {
                return <CardList key={character.id} character={character} classNames={classNames}/>
            })}
        </div>
    )
}

export default Card
