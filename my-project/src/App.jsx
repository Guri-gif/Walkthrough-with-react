import "./App.css";
import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";
import Lists from "./components/Lists";

function App() {
  const handleClick = () => {
    alert("Button is clicked");
  };

  const list = ["pen", "pencil", "eraser"];
  return (
    <div>
      <div>
        <Person name="Gursewak" age={30} />
      </div>
      <div>
        <Button text="Click Me!" onClick={handleClick} />
      </div>
      <div>
        <Header Title="It is a Title" />
      </div>
      <div>
        <Lists items={list} />
      </div>
    </div>
  );
}

export default App;
