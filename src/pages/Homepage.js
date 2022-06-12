import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-body">
        <img
          src="https://i.ibb.co/wgYZJYw/Hope.png"
          alt="Hope"
          border="0"
          style={{ marginTop: 20 }}
        />
        <p className="homepage-text">
          Every year, thousands of people are forced to leave their home
          countries against their will, often leaving all their loved ones
          behind.
          <br />
          <br />
          Hope Homes is a platform to help connect refugees looking for
          temporary shelter with kind, solidary hosts who will receive them in
          their homes and help them establish themselves in a new country, which
          can be difficult in times of hardship.
          <br />
          <br />
          Our goal is to build a global community of compassion and unity,
          promoting solidarity and giving hope to those in need. Make yourself
          at home!
        </p>
      </div>

      <Link to="/signuph">
        <Button variant="contained">Host a refugee</Button>
      </Link>
      <Link to="/signups">
        <Button variant="contained">Find a Hope Home</Button>
      </Link>
    </div>
  );
}
