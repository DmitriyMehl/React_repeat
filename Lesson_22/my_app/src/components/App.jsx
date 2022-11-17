import { users } from "../data/users"
import User from "./User";

function App() {

  // const active_users = users.filter(el => el.active);

  return (
    <div>
      {
        users.map(el => <User key={el.id} {...el} />)
      }
    </div>
  );
}

export default App;
