import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>

      <Link to="/signuph">
        <Button variant="contained">Host a refugee</Button>
      </Link>
      <Link to="/signups">
        <Button variant="contained">Find a Hope Home</Button>
      </Link>
    </div>
  );
}
