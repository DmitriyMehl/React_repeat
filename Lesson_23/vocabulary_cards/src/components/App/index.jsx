import { words } from "../../data/words"
import CardsContainer from "../CardsContainer";
import { Context } from "../../context"

function App() {
  return (
    <div>
      <Context.Provider value={{ words }}>
        <CardsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
