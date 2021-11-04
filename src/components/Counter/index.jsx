import { useEffect, useState } from "react";

const Counter = ({ count, setCount }) => {
  // Podemos chamar o ciclo de vida de atualização baseado em uma props
  useEffect(() => {

    console.log('Montagem')

    if(count > 1) {
      console.log("Atualizou", count)
    }

    return () => {
      console.log('Desmontou')
    }
  }, [count]);

  const goBack = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>Contagem atual {count} </div>

      <button onClick={() => setCount(count + 1)}>Aumentar contagem</button>
      <button onClick={goBack}>Diminuir contagem</button>
    </>
  );
};

export default Counter;
