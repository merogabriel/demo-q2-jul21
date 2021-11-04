import { useState, useEffect } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";

import "./app.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const [count, setCount] = useState(51);

  const [error, setError] = useState(false);

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    // Requisições são Promises
    fetch(`https://kenzie-habits.herokuapp.com/groups/?page=${count}`)
      .then((response) => response.json())
      .then((response) => {
        setGroups(response.results);

        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [count]);

  if (error) {
    return (
      <div>
        <h1>Ocorreu algum erro</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <div> Carregando... </div>
        ) : (
          groups.map((group) => (
            <Card
              key={group.id}
              name={group.name}
              description={group.description}
            />
          ))
        )}

        {isVisible && <Counter count={count} setCount={setCount} />}

        <button onClick={() => setVisible(!isVisible)}>
          Esconder o counter
        </button>
      </header>
    </div>
  );
}

export default App;
