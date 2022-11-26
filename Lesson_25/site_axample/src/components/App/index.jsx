import "../../style.css"
import { Context } from "../../context";
import Navbar from "../Navbar";
import Services from "../Services";

function App() {
  return (
    <div>
      <Context.Provider value={{  }}>
        <Navbar/>
        <Services/>
      </Context.Provider>
    </div>
  );
}

export default App;
