import React from "react";
import TextField from "@mui/material/TextField";

import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

export const TextInput = (props) => {
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Type a message"
          value={props.valueProps}
          onChange={props.onChangeProps}
        />
        {/* <Button variant="contained" color="primary">
          <SendIcon />
        </Button> */}
      </form>
    </>
  );
};
