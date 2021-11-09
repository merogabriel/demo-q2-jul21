import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({})
  const { id } = useParams()
  

  useEffect(() => {
    fetch(`https://kenziehub.herokuapp.com/users/${id}`)
      .then((response) => response.json())
      .then((response) => setUser(response));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>{user.name}</h2>

        <h3> {user.bio} </h3>
      </header>
    </div>
  );
};

export default Profile;
