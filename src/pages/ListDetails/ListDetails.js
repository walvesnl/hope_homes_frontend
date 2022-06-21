import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { getOne } from "../../store/list/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectOne } from "../../store/list/selectors";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../config/constants";
import Geocode from "react-geocode";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { MYKEY } from "../../key";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Circle } from "react-leaflet/Circle";
import "./styles.css";

Geocode.setApiKey(MYKEY);

export default function ListDetails() {
  const { id } = useParams();
  const user = useSelector(selectOne);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  if (user !== null && user.isHost === true) {
    Geocode.fromAddress(`${user.address}, ${user.city}, ${user.country}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        if (lat && lng) {
          setLatitude(lat);
          setLongitude(lng);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
  const position = [latitude, longitude];
  console.log(position);

  return (
    <div>
      {user !== null ? (
        <div className="profile">
          <h1>{user.name}'s Profile</h1>
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
            </div>

            {latitude !== "" && longitude !== "" ? (
              <div className="map">
                <h3 style={{ marginTop: 50 }}>{user.name}'s Residence</h3>
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{
                    height: "400px",
                    width: "400px",

                    backgroundColor: "red",
                    marginTop: "80px",
                    marginBottom: "90px",
                  }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Circle center={position} radius={400}>
                    <Popup>
                      {user.name}'s residence <br />
                    </Popup>
                  </Circle>
                </MapContainer>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
