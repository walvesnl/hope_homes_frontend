import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { API_URL } from "../../config/constants";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    height: 150,
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
              src={`${API_URL}/${props.image}`}
              alt="none"
              style={{ maxWidth: 130, maxHeight: 130 }}
            />
          </Avatar>
        }
        action={
          <div>
            <Button>Open</Button>
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
          </div>
        }
      />
    </Card>
  );
}
