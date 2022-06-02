import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user/actions";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";

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
