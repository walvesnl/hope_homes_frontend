import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { TextInput } from "../../components/Chat/TextInput";
import { MessageLeft, MessageRight } from "../../components/Chat/Message";
import { useDispatch, useSelector } from "react-redux";
import { getConversations } from "../../store/conversation/actions";
import { useParams } from "react-router-dom";
import { selectConv, selectMessages } from "../../store/conversation/selectors";
import { selectHost, selectUser } from "../../store/user/selectors";
import { apiUrl } from "../../config/constants";
import io from "socket.io-client";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

let socket;

const useStyles = makeStyles({
  paper: {
    width: "700px",
    height: "600px",
    maxWidth: "500px",
    maxHeight: "700px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  paper2: {
    width: "80vw",
    maxWidth: "500px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messagesBody: {
    width: "calc( 100% - 20px )",
    margin: 10,
    overflowY: "scroll",
    height: "calc( 100% - 80px )",
  },
});

export default function Conversation() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectUser);
  const parsedId = parseInt(id);
  const messages = useSelector(selectMessages);
  const [getMessages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getConversations(id));
  }, [dispatch, id]);

  useEffect(() => {
    setMessages(messages);
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    socket = io("localhost:4000");

    if (user) {
      socket.emit("join", { userId: user.id, conversationId: parsedId });

      return () => {
        socket.disconnect();

        socket.off();
      };
    }
  }, [parsedId, user]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...getMessages, message]);
      scrollToBottom();
    });
  });

  const conv = useSelector(selectConv);
  const isHost = useSelector(selectHost);
  const classes = useStyles();

  const changeMess = (event) =>
    setMessage({
      body: event.target.value,
      conversationId: parsedId,
      senderId: user.id,
    });

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  if (getMessages.length !== 0) console.log(getMessages);

  return (
    <div className={classes.container}>
      {user &&
      conv &&
      (user.id === conv.seekerId || user.id === conv.hostId) ? (
        <Paper className={classes.paper} zdepth={2}>
          <Paper id="style-1" className={classes.messagesBody}>
            {getMessages ? (
              getMessages.map((m) => {
                if (user.id === m.senderId) {
                  return (
                    <MessageRight
                      key={m.id}
                      message={m.body}
                      timestamp="MM/DD 00:00"
                      photoURL=""
                      displayName=""
                      avatarDisp={false}
                    />
                  );
                } else {
                  return (
                    <MessageLeft
                      key={m.id}
                      message={m.body}
                      timestamp="MM/DD 00:00"
                      photoURL={
                        isHost
                          ? `${apiUrl}/${conv.seekerImage}`
                          : `${apiUrl}/${conv.hostImage}`
                      }
                      displayName={
                        isHost ? `${conv.seekerName}` : `${conv.hostName}`
                      }
                      avatarDisp={true}
                    />
                  );
                }
              })
            ) : (
              <p>Loading...</p>
            )}
            <div ref={messagesEndRef} />
          </Paper>
          <TextInput
            valueProps={!message ? "" : message.body}
            onChangeProps={changeMess}
          />
          <Button variant="contained" color="primary" onClick={sendMessage}>
            <SendIcon />
          </Button>
        </Paper>
      ) : null}
    </div>
  );
}
