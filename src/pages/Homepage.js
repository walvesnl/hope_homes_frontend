import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectToken } from "../store/user/selectors";

export default function Homepage() {
  const token = useSelector(selectToken);

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
          countries against their will, often having no place to go.
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

      <div>
        {token === null ? (
          <div>
            <Link to="/signuph" className="homepage-button">
              <Button
                variant="contained"
                sx={{ fontFamily: "Merriweather", backgroundColor: "#002366" }}
              >
                Host a refugee
              </Button>
            </Link>
            <Link to="/signups" className="homepage-button">
              <Button
                variant="contained"
                sx={{ fontFamily: "Merriweather", backgroundColor: "#002366" }}
              >
                Find a Hope Home
              </Button>
            </Link>{" "}
          </div>
        ) : (
          <div>
            <Link to="/connections" className="homepage-button">
              <Button
                variant="contained"
                sx={{ fontFamily: "Merriweather", backgroundColor: "#002366" }}
              >
                Your Connections
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
