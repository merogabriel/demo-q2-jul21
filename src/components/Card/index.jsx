const Card = ({ info, children }) => {
  return (
    <div>
      <h1>{info.countryName}</h1>
      <span>População: {info.population}</span>

      {children}
    </div>
  )
}

export default Card;