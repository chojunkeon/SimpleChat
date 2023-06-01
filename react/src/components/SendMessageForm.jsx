import React, { useState } from "react";
import { Form,FormControl,InputGroup,Button } from "react-bootstrap";

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState();
  const messageOnChange = (e) => {
    setMessage(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };
  return (
    <Form onSubmit={formSubmit}>
      <InputGroup>
        <FormControl
          placeholder="message..."
          onChange={messageOnChange}
          value={message}
        />
          <Button variant="primary" type="submit">
            Send
          </Button>
      </InputGroup>
    </Form>
  );
};

export default SendMessageForm;