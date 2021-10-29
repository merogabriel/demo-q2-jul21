const List = ({ countryList }) => {
  // Em condições aninhadas, tratar os dados antes
  // const filteredCountries = countryList.filter();

  return (
    <>
      <h2>Países com mais 50 milhões de habitantes</h2>
      {/* <ul>
        {countryList.map((item) => (
          <>
            {item.population >= 5000000 && (
              <li key={item.country}>
                País: {item.country} - População: {item.population}
              </li>
            )}
          </>
        ))}
      </ul> */}

      <ul>
        {countryList
          .filter((item) => item.population >= 5000000)
          .map((item) => (
            <li key={item.country}>
              País: {item.country} - População: {item.population}
            </li>
          ))}
      </ul>
    </>
  );
};

export default List;
