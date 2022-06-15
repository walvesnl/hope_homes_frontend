import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { apiUrl } from "../../config/constants";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { requestAccepted } from "../../store/user/actions";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    maxWidth: 700,
    height: 150,
    margin: 20,
  },
  avatar: {
    width: 100,
    height: 100,
  },
});

export default function RequestCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img
              src={`${apiUrl}/${props.image}`}
              alt="none"
              style={{ maxWidth: 130, maxHeight: 130 }}
            />
          </Avatar>
        }
        action={
          <div>
            <Button
              onClick={() =>
                dispatch(requestAccepted(props.id, props.name, props.image))
              }
            >
              Accept
            </Button>
            <Button>Deny </Button>
          </div>
        }
        title={
          <div>
            <NavLink
              to={`/list/${props.id}`}
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              {props.name}
            </NavLink>{" "}
            wants to connect with you
          </div>
        }
      />
    </Card>
  );
}
