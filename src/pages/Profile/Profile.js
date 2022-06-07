import { useSelector } from "react-redux";
import { API_URL } from "../../config/constants";
import { selectUser } from "../../store/user/selectors";

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? (
        <div>
          <h1>Your Profile</h1>
          <img
            src={`${API_URL}/${user.image}`}
            alt="Your face"
            style={{ maxWidth: 300, maxHeight: "auto" }}
          />
          <h2>Name: {user.name}</h2>
          <h3>Your description: {user.description}</h3>
          {user.address !== null ? (
            <div>
              <p>Address: {user.address}</p>
              <p>City: {user.city}</p>
            </div>
          ) : (
            false
          )}
          <p>Country: {user.country}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
