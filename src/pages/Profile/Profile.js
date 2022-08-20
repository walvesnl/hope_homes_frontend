import { useSelector } from "react-redux";
import { apiUrl } from "../../config/constants";
import { selectUser } from "../../store/user/selectors";

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? (
        <div>
          <h1>Your Profile</h1>
          {/* <img
            src={`${apiUrl}/${user.image}`}
            alt="Your face"
            style={{ maxWidth: 300, maxHeight: "auto" }}
          />
          <h2>Name: {user.name}</h2>
          <h3>Your description: {user.description}</h3>
          {user.address !== null ? (
            <div>
              <p>Address: {user.address}</p>
              <p>City: {user.city}</p> */}
          <div className="profile">
            <div className="profile-body">
              <img
                className="profile-image"
                src={`${apiUrl}/${user.image}`}
                alt="qsaco"
              />
              <div className="desc">
                <p>
                  <strong>Name: </strong>
                  {user.name}
                </p>
                <br />
                <br />
                <p>
                  <strong>Who is {user.name}?</strong>
                </p>
                <p>{user.description}</p>
                <br />
                <br />
                <p>
                  <strong>Country: </strong>
                  {user.country}
                </p>
                <button>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
