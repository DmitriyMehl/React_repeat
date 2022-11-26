import "../../style.css"
import { Context } from "../../context";
import Navbar from "../Navbar";

function App() {
  return (
    <div>
      <Context.Provider value={{  }}>
        <Navbar/>
      </Context.Provider>
    </div>
  );
}

export default App;
