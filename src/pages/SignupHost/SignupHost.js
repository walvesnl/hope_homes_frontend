import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countryList } from "../../config/constants";
import { Button } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/user/actions";
import FormData from "form-data";

export default function SignupHost() {
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getImage, setImage] = useState(null);
  const [getDescription, setDescription] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getCity, setCity] = useState("");
  const [getCountry, setCountry] = useState("Select a country");
  const isHost = true;

  const dispatch = useDispatch();
  console.log(getImage);

  const submitForm = (event) => {
    event.preventDefault();

    dispatch(
      signUp(
        getName,
        getEmail,
        getPassword,
        getImage,
        getDescription,
        getAddress,
        getCity,
        getCountry,
        isHost
      )
    );
  };
  return (
    <Box
      className="signup-form"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="standard-required"
        label="Name"
        variant="standard"
        value={getName}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label="Email"
        variant="standard"
        value={getEmail}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        value={getPassword}
        onChange={(e) => {
          console.log(getPassword);
          setPassword(e.target.value);
        }}
      />

      <Button variant="contained" component="label" style={{ width: 150 }}>
        Upload File
        <input
          type="file"
          hidden
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImage(e.target.files[0]);
          }}
        />
      </Button>
      {getImage ? <p>{getImage.name}</p> : null}
      <TextField
        required
        id="standard-required"
        label="Tell us about yourself"
        variant="standard"
        value={getDescription}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label="Address"
        variant="standard"
        value={getAddress}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        required
        id="standard-required"
        label="City"
        variant="standard"
        value={getCity}
        onChange={(e) => setCity(e.target.value)}
      />
      <Autocomplete
        required
        disablePortal
        id="combo-box-demo"
        options={countryList}
        sx={{ width: 300 }}
        value={getCountry}
        onChange={(e) => {
          setCountry(e.target.textContent);
        }}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />
      <Button
        variant="contained"
        component="label"
        style={{ width: 150 }}
        type="Submit"
        onClick={submitForm}
      >
        Submit
      </Button>
    </Box>
  );
}
