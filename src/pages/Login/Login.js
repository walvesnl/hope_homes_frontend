import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user/actions";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import "./style.css";

export default function Login() {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(getEmail, getPassword));

    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-form">
      <Box
        className="signup-form"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          fontFamily: "Merriweather",
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Login with your details</h2>
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
        <br />
        <br />
        <Button
          variant="contained"
          component="label"
          style={{
            width: 150,
            fontFamily: "Merriweather",
            backgroundColor: "#002366",
          }}
          type="Submit"
          onClick={submitForm}
        >
          <strong>Submit</strong>
        </Button>
      </Box>
    </div>
  );
}
