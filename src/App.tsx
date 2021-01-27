import "./App.css";
import { Counter, User } from "./components";

const App = () => {
  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <hr />
      <User />
    </div>
  );
};

export default App;
