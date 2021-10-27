import Card from "./components/Card";
import Button from "./components/Button";
import "./app.css";

function App() {
  const brazil = {
    countryName: "Brasil",
    population: "250 milhões",
  };

  const argentina = {
    countryName: "Argentina",
    population: "50 milhões",
  };

  return (
    <div>
      <header className="container">
        <Card info={brazil} />
        <Card info={argentina} />

        <Card info={brazil}>
          {/* Abaixo é children */}
          <Button text="Você será redirecionado">
            <span>Clica aqui!</span>
          </Button>
        </Card>
      </header>
    </div>
  );
}

export default App;
