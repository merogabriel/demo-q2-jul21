const List = ({ list }) => {

  return (
    <ul>
      {
        list.map(name => <li key={name}>{name}</li>)
      }
    </ul>
  )
}

export default List;