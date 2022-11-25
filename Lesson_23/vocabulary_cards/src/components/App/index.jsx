import { words } from "../../data/words"
import CardsContainer from "../CardsContainer";
import { Context } from "../../context"
import Triggers from "../Triggers";
import { useState } from "react"

function App() {

  const [ cards, setCards ] = useState(words)

  const change_to_rus = () => {
    setCards(
      cards.map(el => {
        el.lang = "rus";
        return el;
      })
    )
  }

  const change_to_eng = () => {
    setCards(
      cards.map(el => {
        el.lang = "eng";
        return el;
      })
    )
  }

  return (
    <div>
      <Context.Provider value={{ cards, change_to_eng, change_to_rus }}>
        <CardsContainer />
        <Triggers />
      </Context.Provider>
    </div>
  );
}

export default App;
