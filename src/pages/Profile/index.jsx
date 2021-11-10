import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutContainer from "../../components/LayoutContainer";
import api from "../../services/api";

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.get(`/users/${id}`)
      .then((response) => setUser(response.data));
  }, []);

  return (
    <LayoutContainer>
      <h2>{user.name}</h2>

      <h3> {user.bio} </h3>
    </LayoutContainer>
  );
};

export default Profile;
