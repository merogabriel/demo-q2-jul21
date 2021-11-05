const CharacterList = ({ characterList }) => (
  <ul>
    {characterList.map((character) => (
      <li key={character.actor}>
        {character.name}
      </li>
    ))}


    <button onClick={() => window.scrollTo(0, 0)}>Ir para o topo</button>
  </ul>
);

export default CharacterList;
