import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./app.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [rockets, setRockets] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Montou");
    // Requisições são Promises
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((response) => {
        // Dentro do corpo .then, pode-se tratar os dados da maneira que bem entender

        const newRockets = response.map((rocket) => ({
          ...rocket,
          novaChave: "Hello",
        }));

        setRockets(newRockets);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("Atualizou", count);
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <div> Carregando... </div>
        ) : (
          rockets.map((rocket) => (
            <Card key={rocket.id} name={rocket.name} company={rocket.company} />
          ))
        )}

        <div>Contagem atual {count} </div>

        <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
        <button onClick={() => setCount(count - 1)}>Diminuir contagem</button>
      </header>
    </div>
  );
}

export default App;
