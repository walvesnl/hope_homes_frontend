import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { apiUrl } from "../../config/constants";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { newRequest } from "../../store/user/actions";
import { NavLink } from "react-router-dom";
import { selectSentRequests } from "../../store/user/selectors";

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

export default function ListCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const requestsSent = useSelector(selectSentRequests);

  const ids = requestsSent.map((s) => {
    if (requestsSent !== null) {
      return s.receiverId;
    } else {
      return null;
    }
  });

  console.log("receiver", ids);

  const actionButton = ids.includes(props.id) ? (
    <Button>Request sent!</Button>
  ) : (
    <Button
      onClick={() => {
        dispatch(newRequest(props.id));
      }}
    >
      Contact request
    </Button>
  );

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
        action={actionButton}
        title={
          <NavLink
            to={`/list/${props.id}`}
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {props.name}
          </NavLink>
        }
        subheader={`${props.description} `}
      />
    </Card>
  );
}
