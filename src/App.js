import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import CharacterList from "./components/CharacterList";

import "./app.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [list, setList] = useState([]);
  const [characters, setCharacters] = useState([]);

  const handleTodo = (todo) => {
    setTodoList([...todoList, todo]);

    // Aqui na linha 13, o state TodoList, não está atualizado
    // setList(todoList);
  };

  const handleComplete = (todo) => {
    const filteredTodos = todoList.filter(
      (filteredTodo) => filteredTodo !== todo
    );

    setTodoList(filteredTodos);
  };

  // Montagem
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response);
      });
  }, []);

  // Atualização
  useEffect(() => {
    // Dessa maneira, o setList() só irá executar quando o TodoList atualizar
    setList(todoList);
  }, [todoList]);

  //Desmontagem
  useEffect(() => () => {}, []);

  console.log("Lista todoList", todoList);
  console.log("Lista de exemplo", list);

  return (
    <div className="App">
      <header className="App-header">
        Todo List
        <Form handleTodo={handleTodo} />
        <List todoList={todoList} handleComplete={handleComplete} />
      </header>
    </div>
  );
}

export default App;
