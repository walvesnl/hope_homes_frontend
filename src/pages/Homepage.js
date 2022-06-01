import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>

      <Link to="/signuph">
        <Button variant="contained">SIGN UP AS HOST</Button>
      </Link>
      <Link to="/signups">
        <Button variant="contained">SIGN UP AS REFUGEE</Button>
      </Link>
    </div>
  );
}
