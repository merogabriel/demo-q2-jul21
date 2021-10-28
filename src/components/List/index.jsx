export const List = ({ list }) => (
  <ul>
    {list.map((name, index) => (
      <li key={index}>{name}</li>
    ))}
  </ul>
);

// Com retorno implicito, 
// não podemos ter states ou lógica dentro do nosso componente, apenas exibição. Esse componente apenas exibe
