import React from "react";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import {Button} from "react-bootstrap";
import ConnectedUsers from "./ConnectedUsers";

const Chat = ({ messages, sendMessage, closeConnection, users }) => {
  const onClickLeave=()=>{
    closeConnection();
  }
  return (
    <>
    <div className ="leave-room">
      <Button variant = "danger" onClick={onClickLeave}>LeaveRoom</Button>
    </div>
    <ConnectedUsers users={users}/>
    <div className="chat">
      <MessageContainer messages={messages} />
      <SendMessageForm sendMessage={sendMessage}/>
    </div>
    </>
  );
};

export default Chat;