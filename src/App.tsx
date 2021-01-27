import "./App.css";
import { Counter, User, Timer } from "./components";

const App = () => {
  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <User />
      <hr />
      <Timer />
    </div>
  );
};

export default App;
