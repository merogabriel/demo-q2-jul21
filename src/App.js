import { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import { List } from "./components/List";

import "./app.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [listNames, setListNames] = useState([]);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  function addName() {
    if (name === "") {
      return;
    }

    setListNames([...listNames, name]);
  }

  console.log(name);

  // Two way data binding - Angular

  return (
    <div className="App">
      <header className="App-header">
        <h2>Contagem atual: {count}</h2>

        <Button onClick={add}>Aumentar</Button>
        <Button onClick={sub}>Diminuir</Button>

        <Input
          placeholder="Digite um nome"
          onChange={(event) => setName(event.target.value)}
        />

        <Button onClick={addName}>Adicionar nome</Button>

        <List list={listNames} />
      </header>
    </div>
  );
}

export default App;
