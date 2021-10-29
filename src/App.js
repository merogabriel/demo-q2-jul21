import { useState } from "react";
import { AiTwotoneBulb, AiOutlineBulb } from "react-icons/ai";
import Button from "./components/Button";
import Form from "./components/Form";
import List from "./components/List";

import "./app.css";

function App() {
  const [isOn, setIsOn] = useState(true);
  const [countryList, setCountryList] = useState([]);

  const handleLight = () => {
    // true
    setIsOn(!isOn);
  };

  const handleCountries = (country) => {
    setCountryList([...countryList, country]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AiTwotoneBulb size={50} color={isOn ? "yellow" : "gray"} />

        <Button onClick={handleLight} blueButton={isOn}>
          {isOn ? "Apagar" : "Acender"} a lâmpada
        </Button>

        <Form handleCountries={handleCountries} />

        <List countryList={countryList} />
      </header>
    </div>
  );
}

export default App;
