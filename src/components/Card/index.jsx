const Card = ({ name, description }) => {
  return (
    <div>
      Nome do grupo: {name}
      {" "} - 
      Descrição: {description}
    </div>
  )
}

export default Card;