import Button from '../Button'

const List = ({ todoList, handleComplete }) => (
  <ul>
    {todoList.map((todo) => (
      <li key={todo}>
        {todo}
        <Button onClick={() => handleComplete(todo)}>Concluir</Button>
      </li>
    ))}
  </ul>
);

export default List;
