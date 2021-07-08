import React from "react";
import "../scss/CardList.scss";

const CardList = ({ character, classNames }) => {
  const {
    name,
    height,
    mass,
    gender,
    image,
    homeworld,
    species,
    born,
    died,
    diedLocation,
  } = character;

  let bornYear = `${born < 0 ? " BBY" : " ABY"}`;
  let deathYear = `${died < 0 ? " BBY" : " ABY"}`;

  return (
    <div
      className={`cardList__container ${
        classNames === "card__container-second"
          ? "cardList__container-second"
          : ""
      }`}
    >
      <div className="cardList__flip-card">
        <div className="cardList__flip-card-inner">
          <div className="cardList__flip-card-front">
            <img className="cardList__img" src={image} alt={name} />
          </div>
          <div className="cardList__flip-card-back">
            <h4>
              Name: <span>{name}</span>
            </h4>
            <h4>
              Species: <span>{species}</span>
            </h4>
            <h4>
              Height: <span>{height}cm</span>
            </h4>
            <h4>
              Mass: <span>{mass}kg</span>
            </h4>
            <h4>
              Gender: <span>{gender}</span>
            </h4>
            <h4>
              Homeworld: <span>{homeworld}</span>
            </h4>
            <h4>
              Birth:{" "}
              <span>
                {born}
                {bornYear}
              </span>
            </h4>
            {died && (
              <h4>
                Death:
                <span>
                  {died ? `${died}${deathYear}` : ""}
                  {diedLocation ? `, ${diedLocation}` : ""}
                </span>
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
