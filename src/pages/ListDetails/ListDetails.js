import { useEffect, useState } from "react";
import { getOne } from "../../store/list/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectOne } from "../../store/list/selectors";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/constants";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDD6jpgD0k81Hh1MAZEa0AkqGIYRp4v_yE");
export default function ListDetails() {
  const { id } = useParams();
  const user = useSelector(selectOne);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  if (user !== null && user.isHost === true) {
    Geocode.fromAddress(`${user.address}, ${user.city}, ${user.country}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  return (
    <div>
      {user !== null ? (
        <div>
          <h1>{user.name}'s Profile</h1>
          <img
            src={`${apiUrl}/${user.image}`}
            style={{ maxWidth: 300, maxHeight: "auto" }}
            alt="qsaco"
          />
          <p>{user.name}</p>
          <p>{user.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
