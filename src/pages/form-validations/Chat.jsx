import React from "react";
import { ChatEngine } from "react-chat-engine";

const keys = [
  {
    projectID: "94bb04b9-81ba-43ad-b1ee-6b36151d44ae"
  },
  {
    chatID: "139047"
  },
  {
    chatAccessKey: "ayaansh2019"
  },
  {
    sendUserName: "sashreek"
  }
];

const Chat = () => {
  return (
    <>
      <ChatEngine
        projectID="94bb04b9-81ba-43ad-b1ee-6b36151d44ae"
        userName="sashreek"
        userSecret="ayaansh2019"
       />
    </>
  );
};

export default Chat;
