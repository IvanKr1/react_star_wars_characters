import React,{useState} from "react";
import swCharacters from "./data.json";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";

const App = () => {
 const [character, setCharacter] = useState("")

  const onSearchChars = (value) => {
    setCharacter(value)
  }

  let filterChars = swCharacters.filter((chars) => {
    return chars.name.toLowerCase().includes(character.toLowerCase())
  })

  return (
    <div className="container ">
      <Header />
      <SearchBox onSearchChars={onSearchChars}/>
      <Card swCharacters={filterChars} />
    </div>
  );
};

export default App;
