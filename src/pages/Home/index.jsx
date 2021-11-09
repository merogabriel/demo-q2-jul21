import { Link, useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()


  return (
    <div className="App">
      <header className="App-header">
        
        Home aaa

        
        <Link to="/login"> Ir para o login </Link>
        
        <Link to="/users"> Ir para a listagem de usuários </Link>

        <button onClick={() => history.push("/login")}>Ir para o login (usando history)</button>
      </header>
    </div>
  );
};

export default Home;
