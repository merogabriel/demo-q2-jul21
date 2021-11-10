import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutContainer from "../../components/LayoutContainer";

import { ListContainer } from './styles'


import api from '../../services/api'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch('')

    api.get("/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <LayoutContainer>
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
     </LayoutContainer>
  );
};

export default Users;
