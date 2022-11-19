import { words } from "../../data/words"
import CardsContainer from "../CardsContainer";
import { Context } from "../../context"
import Triggers from "../Triggers";

function App() {
  return (
    <div>
      <Context.Provider value={{ words }}>
        <CardsContainer />
        <Triggers />
      </Context.Provider>
    </div>
  );
}

export default App;
