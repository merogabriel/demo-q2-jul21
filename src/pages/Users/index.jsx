import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ListContainer } from './styles'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://kenziehub.herokuapp.com/users")
      .then((response) => response.json())
      .then((response) => setUsers(response));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Listagem de usuários
        <ListContainer>
          {users.map((user) => (
            // Pode ser utilizado o history.push no onClick com o caminho `/users/${user.id}`
            // onClick = {() => history.push(`/users/${user.id}`)}
            <Link key={user.id} to={`/users/${user.id}`}>
              <li> {user.name} </li>
            </Link>
          ))}
        </ListContainer>
      </header>
    </div>
  );
};

export default Users;
