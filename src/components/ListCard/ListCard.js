import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { API_URL } from "../../config/constants";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { newRequest } from "../../store/user/actions";

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

export default function ListCard(props) {
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
          <Button
            onClick={() => {
              dispatch(newRequest(props.id));
            }}
          >
            Contact request
          </Button>
        }
        title={props.name}
        subheader={props.description}
      />
    </Card>
  );
}