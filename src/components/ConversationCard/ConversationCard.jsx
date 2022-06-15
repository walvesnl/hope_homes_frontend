import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { apiUrl } from "../../config/constants";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

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

export default function ConversationCard(props) {
  const classes = useStyles();

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
            <NavLink
              to={`/conversation/${props.convId}`}
              style={{ textDecoration: "none" }}
            >
              <Button>Open</Button>
            </NavLink>
          </div>
        }
        title={
          <div>
            <NavLink
              to={`/list/${props.userId}`}
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
