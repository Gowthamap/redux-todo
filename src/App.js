import "./App.css";
import Card from "./components/Card";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Todos />
        <Card />
      </div>
    </div>
  );
}

export default App;
