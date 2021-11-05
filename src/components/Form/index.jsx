import { useState } from "react";
import Button from '../Button'

const Form = ({ handleTodo }) => {
  const [todo, setTodo] = useState("");


  // Quando utilizado o evento onSubmit, é necessário utilizar o e.preventDefault()
  const handleSubmit = (e) => {
    e.preventDefault()
    handleTodo(todo)
    
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={todo} onChange={e => setTodo(e.target.value)} placeholder="Insira uma tarefa" />
      <Button type="submit">Adicionar tarefa</Button>
    </form>
  )
}

export default Form