import { useState } from "react";
import Button from '../Button'

const Form = ({ handleCountries }) => {
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  
  const addCountry = () => {

    const newCountry = {
      country, population: Number(population), 
    }

    handleCountries(newCountry)
  }

  return (
    <div>
      <input
        placeholder="Insira o nome de um país"
        onChange={(event) => setCountry(event.target.value)}
      />
      <input
        placeholder="Insira a população de um país (apenas numeros)"
        onChange={(event) => setPopulation(event.target.value)}
      />

      <Button blueButton onClick={addCountry}>Adicionar país</Button>      
    </div>
  );
};

export default Form;
