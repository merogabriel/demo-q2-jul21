const Card = ({ name, company }) => {
  return (
    <div>
      Nome do foguete: {name}
      {" "} - 
      Empresa: {company}
    </div>
  )
}

export default Card;