import { Context } from "../../context"
import PostsContainer from "../PostsContainer";
import { posts_data } from "../../data/posts"

function App() {
  return (
    <div>
      <Context.Provider value={{ posts_data }}>
        <PostsContainer/>
      </Context.Provider>
    </div>
  );
}

export default App;
